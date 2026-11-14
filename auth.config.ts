import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import discord from "next-auth/providers/discord"
import type { NextAuthConfig } from "next-auth"


export default {
    providers: [
        GitHub({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        discord({
            clientId: process.env.DISCORD_CLIENT_ID as string,
            clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
        })
    ]
} satisfies NextAuthConfig  