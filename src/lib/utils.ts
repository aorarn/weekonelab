import { cn } from "cn"

export { cn }

/**
 * Merge a component's recipe classes with a consumer `className` override.
 *
 * Base UI primitives accept `className` either as a string or as a function of
 * the component's state; both forms are supported and the override always wins.
 */
export function mergeClassName<State>(
  base: string,
  className?: string | ((state: State) => string | undefined)
): string | ((state: State) => string) {
  if (typeof className === "function") {
    return (state: State) => cn(base, className(state))
  }
  return cn(base, className)
}
