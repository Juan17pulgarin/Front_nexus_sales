import { AUTH_EXP_COOKIE, AUTH_TOKEN_COOKIE, isValidSession, LOGIN_REDIRECT_PATH } from "@/lib/auth/shared";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_PATHS = new Set(["/login", "/register"]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/logout") {
    return NextResponse.next();
  }

  const token = request.cookies.get(AUTH_TOKEN_COOKIE)?.value;
  const exp = request.cookies.get(AUTH_EXP_COOKIE)?.value;
  const authenticated = isValidSession(token, exp);

  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = authenticated ? LOGIN_REDIRECT_PATH : "/login";
    return NextResponse.redirect(url);
  }

  if (PUBLIC_PATHS.has(pathname) && authenticated) {
    const url = request.nextUrl.clone();
    url.pathname = LOGIN_REDIRECT_PATH;
    return NextResponse.redirect(url);
  }

  if (!PUBLIC_PATHS.has(pathname) && !authenticated) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
