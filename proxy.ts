import NextAuth from "next-auth"
import authConfig from "@/auth.config"
export { auth as proxy } from "@/auth"



const DEFAULT_LOGIN_REDIRECT = "/"

const publicRoutes: string[] = []

const protectedRoutes: string[] = ["/"]

const authRoutes: string[] = ["/auth/login", "/auth/signup"]

const apiAuthRoutes: String[] = ["/api/auth"]



const { auth } = NextAuth(authConfig)

export default auth((req) => {
    const { nextUrl } = req
    const isloggedIn = !!req.auth

    const isApiRoute = nextUrl.pathname.startsWith("/api")
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    if (isApiRoute) {
        if (isloggedIn) {
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
        }
        return null;
    }
    if (!isloggedIn && !isPublicRoute) {
        return Response.redirect(new URL("/auth/login", nextUrl));
    }
    return null;

})

export const config = {
    matcher: [
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        '/(api|trpc)(.*)'
    ]
}
