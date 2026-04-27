import { AUTH_TOKEN_COOKIE, LOGIN_REDIRECT_PATH } from "@/lib/auth/shared";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_PATHS = new Set(["/login", "/register", "/logout"]);
const PROTECTED_PATHS = ["/home", "/customers", "/sales", "/reports", "/settings"];

function isProtectedPath(pathname: string) {
  return PROTECTED_PATHS.some(
    (protectedPath) => pathname === protectedPath || pathname.startsWith(`${protectedPath}/`)
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get(AUTH_TOKEN_COOKIE)?.value;
  const authenticated = Boolean(token?.trim());

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

  if (isProtectedPath(pathname) && !authenticated) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
