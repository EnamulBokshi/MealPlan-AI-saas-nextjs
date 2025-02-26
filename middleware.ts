import { clerkMiddleware,createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-up(.*)",
  "/pricing(.*)",
])

export default clerkMiddleware(async(auth,req) =>{
  const userAuth = await auth();
  const {userId} = userAuth;
  const {pathname,origin} = req.nextUrl;

  console.log("user info: ",userId,pathname,origin);
  if(!isPublicRoute(req) && !userId){
    return NextResponse.redirect(new URL("/sing-up",origin))
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};