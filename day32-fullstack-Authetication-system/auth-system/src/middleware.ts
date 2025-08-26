import { NextResponse, NextRequest } from "next/server";


export function middleware(request: NextRequest) {
 const path = request.nextUrl.pathname;
 const isPublicPath = path === '/login' || path === '/signup';
 const token = request.cookies.get('token')?.value || '';
 if(isPublicPath && token){
   return NextResponse.redirect(new URL('/', request.nextUrl)) // from here also we can redirect user to home/dasboard in our project
 }
 if(!isPublicPath && !token){
   return NextResponse.redirect(new URL('/login', request.nextUrl))
 }
}

export const config = {
  matcher: ["/", "/profile", "/login", "/signup"],
};
