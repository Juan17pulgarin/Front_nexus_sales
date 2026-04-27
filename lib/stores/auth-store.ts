import { create } from "zustand";
import { apiClient, setAccessTokenGetter } from "@/lib/axios-client";
import { getApiErrorMessage } from "@/lib/get-api-error-message";
import { AUTH_EXP_COOKIE, AUTH_TOKEN_COOKIE } from "@/lib/auth/shared";

type LoginResult = {
  success: boolean;
  message?: string;
};

type AuthStore = {
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string, remember?: boolean) => Promise<LoginResult>;
  setToken: (token: string | null, remember: boolean) => void;
  clearError: () => void;
  logout: () => void;
};

const LOCAL_STORAGE_TOKEN_KEY = "nexus.auth.token";
const SESSION_STORAGE_TOKEN_KEY = "nexus.auth.token";
const DEFAULT_SESSION_DURATION_MS = 1000 * 60 * 60 * 12;
const REMEMBER_SESSION_DURATION_MS = 1000 * 60 * 60 * 24 * 7;

type LoginResponsePayload = {
  token?: unknown;
  accessToken?: unknown;
  access_token?: unknown;
  jwt?: unknown;
  data?: LoginResponsePayload;
};

function isBrowser() {
  return typeof window !== "undefined";
}

function getCookieValue(name: string) {
  if (!isBrowser()) {
    return null;
  }

  const match = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function setPersistedToken(token: string | null, remember: boolean) {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
  window.sessionStorage.removeItem(SESSION_STORAGE_TOKEN_KEY);
  document.cookie = `${AUTH_TOKEN_COOKIE}=; Path=/; Max-Age=0; SameSite=Lax`;
  document.cookie = `${AUTH_EXP_COOKIE}=; Path=/; Max-Age=0; SameSite=Lax`;

  if (!token) {
    return;
  }

  const sessionDurationMs = remember
    ? REMEMBER_SESSION_DURATION_MS
    : DEFAULT_SESSION_DURATION_MS;
  const expiresAt = Date.now() + sessionDurationMs;
  const maxAge = Math.max(0, Math.floor(sessionDurationMs / 1000));

  document.cookie = `${AUTH_TOKEN_COOKIE}=${encodeURIComponent(token)}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
  document.cookie = `${AUTH_EXP_COOKIE}=${expiresAt}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;

  if (remember) {
    window.localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
    return;
  }

  window.sessionStorage.setItem(SESSION_STORAGE_TOKEN_KEY, token);
}

function readPersistedToken() {
  if (!isBrowser()) {
    return null;
  }

  const cookieToken = getCookieValue(AUTH_TOKEN_COOKIE);
  if (cookieToken) {
    return cookieToken;
  }

  return (
    window.localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY) ??
    window.sessionStorage.getItem(SESSION_STORAGE_TOKEN_KEY)
  );
}

function extractToken(payload: LoginResponsePayload | undefined | null): string | null {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  const record = payload as Record<string, unknown>;
  const directTokenKeys = ["token", "accessToken", "access_token", "jwt"];

  for (const key of directTokenKeys) {
    const value = record[key];
    if (typeof value === "string" && value.trim()) {
      return value;
    }
  }

  const nestedData = record.data;
  if (nestedData && typeof nestedData === "object") {
    return extractToken(nestedData as LoginResponsePayload);
  }

  return null;
}

function persistSession(token: string | null, remember: boolean) {
  setPersistedToken(token, remember);
}

export const useAuthStore = create<AuthStore>((set) => {
  const initialToken = readPersistedToken();

  return {
    token: initialToken,
    isAuthenticated: Boolean(initialToken),
    isLoading: false,
    error: null,
    login: async (email, password, remember = false) => {
      set({ isLoading: true, error: null });

      try {
        const response = await apiClient.post<LoginResponsePayload>("/login", {
          email,
          password,
        });

        const normalizedToken = extractToken(response.data);

        if (!normalizedToken) {
          const message = "La respuesta de login no incluyo un token valido.";
          set({ isLoading: false, isAuthenticated: false, token: null, error: message });
          return { success: false, message };
        }

        persistSession(normalizedToken, remember);
        set({ token: normalizedToken, isAuthenticated: true, isLoading: false, error: null });
        return { success: true };
      } catch (error) {
        const message = getApiErrorMessage(error, "Usuario o contraseña inválidos");
        set({ isLoading: false, isAuthenticated: false, token: null, error: message });
        return { success: false, message };
      }
    },
    setToken: (token, remember) => {
      persistSession(token, remember);
      set({ token, isAuthenticated: Boolean(token) });
    },
    clearError: () => {
      set({ error: null });
    },
    logout: () => {
      persistSession(null, false);
      set({ token: null, isAuthenticated: false, error: null });
    },
  };
});

setAccessTokenGetter(() => useAuthStore.getState().token);
