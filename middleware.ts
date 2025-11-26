// import { NextResponse } from "next/server";
// import { NextRequest } from "next/server";

// const AuthRoutes = ["/login", "/register"];

// type Role = keyof typeof roleBasedRoutes;

// const roleBasedRoutes = {
//   USER: [/^\/profile/],
//   ADMIN: [/^\/admin/],
// };

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   console.log(pathname);

//     const user = {
//       name: "Mir",
//       token: "adsf asda",
//       role: "ADMIN",
//     };

//   // const user = undefined;

//   if (!user) {
//     if (AuthRoutes.includes(pathname)) {
//       return NextResponse.next();
//     } else {
//       return NextResponse.redirect(new URL("/login", request.url));
//     }
//   }

//   if (user?.role && roleBasedRoutes[user?.role as Role]) {
//     const routes = roleBasedRoutes[user?.role as Role];

//     if (routes.some((route) => pathname.match(route))) {
//       return NextResponse.next();
//     }
//   }

//   return NextResponse.redirect(new URL("/", request.url));
// }

// export const config = {
//   matcher: ["/profile", "/admin", "/login", "/register"],
// };

import { NextResponse, NextRequest } from "next/server";

const AuthRoutes = ["/login", "/register"];

const roleBasedRoutes = {
  USER: [/^\/profile/],
  ADMIN: [/^\/admin/],
};

type Role = keyof typeof roleBasedRoutes;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Mock user (replace with real auth later)
  const user = undefined; // ⬅ এখন ধরে নিচ্ছি logged-out

  // ---------------------------
  // 1. User NOT logged in
  // ---------------------------
  if (!user) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next(); // allow login/register
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // ---------------------------
  // 2. User logged in → stop going to login/register
  // ---------------------------
  if (AuthRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // ---------------------------
  // 3. Role based access
  // ---------------------------
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
