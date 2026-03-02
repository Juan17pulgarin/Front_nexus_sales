export const AUTH_TOKEN_COOKIE = "ns_token";
export const AUTH_EXP_COOKIE = "ns_exp";
export const LOGIN_REDIRECT_PATH = "/home";

export function isValidSession(token: string | undefined, exp: string | undefined): boolean {
  if (!token || !exp) {
    return false;
  }

  const expiration = Number(exp);

  if (!Number.isFinite(expiration)) {
    return false;
  }

  return expiration > Date.now();
}
