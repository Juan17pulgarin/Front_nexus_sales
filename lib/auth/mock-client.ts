import { AUTH_EXP_COOKIE, AUTH_TOKEN_COOKIE } from "@/lib/auth/shared";

export type MockUser = {
  email: string;
  passwordHash: string;
};

export const MOCK_USERS: MockUser[] = [
  {
    email: "demo@nexussales.com",
    passwordHash: "ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f",
  },
];

export async function sha256(value: string): Promise<string> {
  const encoded = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", encoded);
  const bytes = Array.from(new Uint8Array(digest));

  return bytes.map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

export async function verifyPasswordHash(password: string, passwordHash: string): Promise<boolean> {
  const currentHash = await sha256(password);

  return currentHash === passwordHash;
}

export function createMockToken(email: string, expiresAt: number): string {
  const header = { alg: "HS256", typ: "JWT" };
  const payload = { sub: email, exp: Math.floor(expiresAt / 1000), iss: "nexus-sales-mock" };

  const base64UrlEncode = (value: string) =>
    btoa(value).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");

  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedPayload = base64UrlEncode(JSON.stringify(payload));

  return `${encodedHeader}.${encodedPayload}.mock-signature`;
}

export function setAuthCookies(token: string, expiresAt: number): void {
  const maxAge = Math.max(0, Math.floor((expiresAt - Date.now()) / 1000));

  document.cookie = `${AUTH_TOKEN_COOKIE}=${token}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
  document.cookie = `${AUTH_EXP_COOKIE}=${expiresAt}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
}

export function clearAuthCookies(): void {
  document.cookie = `${AUTH_TOKEN_COOKIE}=; Path=/; Max-Age=0; SameSite=Lax`;
  document.cookie = `${AUTH_EXP_COOKIE}=; Path=/; Max-Age=0; SameSite=Lax`;
}
