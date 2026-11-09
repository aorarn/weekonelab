"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Alert02Icon,
  DashboardSquare01Icon,
  LockPasswordIcon,
  Mail01Icon,
  ViewIcon,
  ViewOffSlashIcon,
} from "@hugeicons/core-free-icons"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/Alert"
import { Button } from "@/components/ui/Button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card"
import { Checkbox } from "@/components/ui/Checkbox"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/Field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/InputGroup"
import { Spinner } from "@/components/ui/Spinner"

/** Mock credentials — UI-only, there is no backend. */
const DEMO_USER = { email: "admin@bof.test", password: "password123" }
const SESSION_KEY = "bof.session"

type FieldErrors = { email?: string; password?: string }

function validate(email: string, password: string): FieldErrors {
  const errors: FieldErrors = {}
  if (!email) errors.email = "Email is required"
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Enter a valid email address"
  if (!password) errors.password = "Password is required"
  else if (password.length < 8)
    errors.password = "Password must be at least 8 characters"
  return errors
}

export function LoginForm() {
  const router = useRouter()
  const [showPassword, setShowPassword] = React.useState(false)
  const [errors, setErrors] = React.useState<FieldErrors>({})
  const [formError, setFormError] = React.useState<string | null>(null)
  const [pending, setPending] = React.useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const email = String(data.get("email") ?? "").trim()
    const password = String(data.get("password") ?? "")

    const nextErrors = validate(email, password)
    setErrors(nextErrors)
    setFormError(null)
    if (Object.keys(nextErrors).length > 0) return

    setPending(true)
    // Simulate network latency so the loading state is visible.
    await new Promise((resolve) => setTimeout(resolve, 800))

    if (email !== DEMO_USER.email || password !== DEMO_USER.password) {
      setPending(false)
      setFormError("Incorrect email or password.")
      return
    }

    try {
      localStorage.setItem(
        SESSION_KEY,
        JSON.stringify({ email, signedInAt: new Date().toISOString() })
      )
    } catch {
      // Storage may be unavailable (private mode); the mock still navigates.
    }
    router.push("/")
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="text-center">
        <div className="mx-auto mb-2 flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <HugeiconsIcon icon={DashboardSquare01Icon} strokeWidth={2} />
        </div>
        <CardTitle>Sign in to Back Office</CardTitle>
        <CardDescription>Enter your email and password to continue</CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit} noValidate>
        <CardContent>
          <FieldGroup>
            {formError && (
              <Alert variant="destructive">
                <HugeiconsIcon icon={Alert02Icon} strokeWidth={2} />
                <AlertTitle>Sign in failed</AlertTitle>
                <AlertDescription>{formError}</AlertDescription>
              </Alert>
            )}

            <Field data-invalid={!!errors.email} data-disabled={pending}>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <InputGroup>
                <InputGroupAddon>
                  <HugeiconsIcon icon={Mail01Icon} strokeWidth={2} />
                </InputGroupAddon>
                <InputGroupInput
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  disabled={pending}
                />
              </InputGroup>
              <FieldError id="email-error">{errors.email}</FieldError>
            </Field>

            <Field data-invalid={!!errors.password} data-disabled={pending}>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <a
                  href="#"
                  className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <InputGroup>
                <InputGroupAddon>
                  <HugeiconsIcon icon={LockPasswordIcon} strokeWidth={2} />
                </InputGroupAddon>
                <InputGroupInput
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="••••••••"
                  aria-invalid={!!errors.password}
                  aria-describedby={errors.password ? "password-error" : undefined}
                  disabled={pending}
                />
                <InputGroupAddon align="inline-end">
                  <InputGroupButton
                    size="icon-xs"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowPassword((v) => !v)}
                  >
                    <HugeiconsIcon
                      icon={showPassword ? ViewOffSlashIcon : ViewIcon}
                      strokeWidth={2}
                    />
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
              <FieldError id="password-error">{errors.password}</FieldError>
            </Field>

            <Field orientation="horizontal" data-disabled={pending}>
              <Checkbox id="remember" name="remember" disabled={pending} />
              <FieldLabel htmlFor="remember" className="font-normal">
                Remember me
              </FieldLabel>
            </Field>
          </FieldGroup>
        </CardContent>

        <CardFooter className="mt-6 flex flex-col gap-3">
          <Button type="submit" className="w-full" disabled={pending}>
            {pending && <Spinner data-icon="inline-start" />}
            {pending ? "Signing in…" : "Sign in"}
          </Button>
          <FieldSeparator className="w-full">Demo account</FieldSeparator>
          <FieldDescription className="text-center">
            <span className="font-mono">{DEMO_USER.email}</span> /{" "}
            <span className="font-mono">{DEMO_USER.password}</span>
          </FieldDescription>
        </CardFooter>
      </form>
    </Card>
  )
}
