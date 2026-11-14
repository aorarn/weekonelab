import type { Metadata } from "next"

import { LoginForm } from "./LoginForm"

export const metadata: Metadata = {
  title: "Sign in · Back Office",
}

export default function LoginPage() {
  return (
    <main className="flex flex-1 items-center justify-center bg-muted/40 px-4 py-12">
      <LoginForm />
    </main>
  )
}
