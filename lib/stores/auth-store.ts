import { create } from "zustand";
import { apiClient, setAccessTokenGetter } from "@/lib/axios-client";
import { getApiErrorMessage } from "@/lib/get-api-error-message";

type LoginResult = {
  success: boolean;
  message?: string;
};

type AuthStore = {
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string, remember: boolean) => Promise<LoginResult>;
  setToken: (token: string | null, remember: boolean) => void;
  clearError: () => void;
  logout: () => void;
};

const LOCAL_STORAGE_TOKEN_KEY = "nexus.auth.token";
const SESSION_STORAGE_TOKEN_KEY = "nexus.auth.token";

function setPersistedToken(token: string | null, remember: boolean) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
  window.sessionStorage.removeItem(SESSION_STORAGE_TOKEN_KEY);

  if (!token) {
    return;
  }

  if (remember) {
    window.localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
    return;
  }

  window.sessionStorage.setItem(SESSION_STORAGE_TOKEN_KEY, token);
}

function readPersistedToken() {
  if (typeof window === "undefined") {
    return null;
  }

  return (
    window.localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY) ??
    window.sessionStorage.getItem(SESSION_STORAGE_TOKEN_KEY)
  );
}

function extractToken(payload: unknown): string | null {
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
    return extractToken(nestedData);
  }

  return null;
}

export const useAuthStore = create<AuthStore>((set) => {
  const initialToken = readPersistedToken();

  return {
    token: initialToken,
    isAuthenticated: Boolean(initialToken),
    isLoading: false,
    error: null,
    login: async (email, password, remember) => {
      set({ isLoading: true, error: null });

      try {
        const response = await apiClient.post("/login", {
          email,
          password,
        });

        const token = extractToken(response.data);

        if (!token) {
          const message = "La respuesta de login no incluyo un token valido.";
          set({ isLoading: false, isAuthenticated: false, token: null, error: message });
          return { success: false, message };
        }

        setPersistedToken(token, remember);
        set({ token, isAuthenticated: true, isLoading: false, error: null });
        return { success: true };
      } catch (error) {
        const message = getApiErrorMessage(error, "Credenciales invalidas.");
        set({ isLoading: false, isAuthenticated: false, token: null, error: message });
        return { success: false, message };
      }
    },
    setToken: (token, remember) => {
      setPersistedToken(token, remember);
      set({ token, isAuthenticated: Boolean(token) });
    },
    clearError: () => {
      set({ error: null });
    },
    logout: () => {
      setPersistedToken(null, false);
      set({ token: null, isAuthenticated: false, error: null });
    },
  };
});

setAccessTokenGetter(() => useAuthStore.getState().token);
