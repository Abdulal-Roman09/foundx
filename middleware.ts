import { NextResponse, NextRequest } from "next/server";
import { getCurrentUser } from "./services/AuthServices";

const AuthRoutes = ["/login", "/register"];

const roleBasedRoutes = {
  USER: [/^\/profile/],
  ADMIN: [/^\/admin/],
};

type Role = keyof typeof roleBasedRoutes;

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const user = await getCurrentUser()

  if (!user) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, request.url));
    }
  }

  if (AuthRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (user.role && roleBasedRoutes[user.role as Role]) {
    const rules = roleBasedRoutes[user.role as Role];
    if (rules.some((r) => pathname.match(r))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/profile/:path*", "/admin/:path*", "/login", "/register"],
};
