import { NextRequest, NextResponse } from "next/server";

import { getToken } from "next-auth/jwt";
import createMiddleware from "next-intl/middleware";

import { routing } from "@/i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default async function proxy(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // 1. Handle Locale (Next-Intl)
  const response = intlMiddleware(req);

  // 2. Auth & RBAC Logic
  // Check if the path is protected
  const isProtected =
    pathname.includes("/admin") || pathname.includes("/artist") || pathname.includes("/profile");

  if (isProtected) {
    const token = await getToken({ req });

    if (!token) {
      // Redirect to login if not authenticated
      // We need to preserve the locale if present in the path
      const loginUrl = new URL("/login", req.url);
      return NextResponse.redirect(loginUrl);
    }

    // RBAC logic
    if (pathname.includes("/admin") && !token.roles?.includes("ADMIN")) {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }

    if (pathname.includes("/artist") && !token.roles?.includes("ARTIST")) {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }
  }

  return response;
}

export const config = {
  // Combine matchers
  matcher: [
    // Locale matcher
    "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
    // Auth matchers (explicit for clarity, though covered by above)
    "/admin/:path*",
    "/artist/:path*",
    "/profile/:path*"
  ]
};
