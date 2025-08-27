import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // ✅ Add forgotpassword & resetpassword to public paths
  const isPublicPath =
    path === "/login" ||
    path === "/signup" ||
    path === "/verifyemail" ||
    path === "/forgotpassword" ||
    path === "/resetpassword";

  const token = request.cookies.get("token")?.value || "";

  // If user is already logged in and tries to go to login/signup/forgot/reset → redirect to dashboard/home
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  // If route is protected (not public) and user has no token → redirect to login
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

export const config = {
  // ✅ Add forgot/reset to matcher so middleware runs for those too
  matcher: [
    "/",
    "/profile",
    "/login",
    "/signup",
    "/verifyemail",
    "/forgotpassword",
    "/resetpassword",
  ],
};
