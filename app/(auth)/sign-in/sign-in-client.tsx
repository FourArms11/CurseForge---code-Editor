'use client'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import SignInPage from '@/components/sign-in-page'

export default function SignInClient() {
  const router = useRouter()

  return (
    <SignInPage
      providers={['google', 'github', 'discord']}
      onSubmit={async ({ email, password }) => {
        const result = await signIn('credentials', {
          email,
          password,
          redirect: false,
        })

        if (!result?.ok) {
          return 'That email and password do not match.'
        }

        router.push('/')
      }}
      onOAuth={(provider) => {
        void signIn(provider, { callbackUrl: '/' })
      }}
    />
  )
}
