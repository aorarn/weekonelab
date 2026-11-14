import { Button as ButtonPrimitive } from "@base-ui/react/button"

import { cn, mergeClassName } from "@/lib/utils"
import styles from "./Button.module.css"

export type ButtonVariant =
  | "default"
  | "secondary"
  | "outline"
  | "ghost"
  | "destructive"
  | "link"

export type ButtonSize =
  | "xs"
  | "sm"
  | "default"
  | "lg"
  | "icon-xs"
  | "icon-sm"
  | "icon"
  | "icon-lg"

export type ButtonStyleProps = {
  /** Visual intent of the button. */
  variant?: ButtonVariant
  /** Height/padding scale; `icon*` sizes render a square icon-only button. */
  size?: ButtonSize
}

export type ButtonProps = ButtonPrimitive.Props & ButtonStyleProps

/**
 * Class names for the button look. Use it to style other elements, such as a
 * link, as a button: `<Link className={buttonStyles({ variant: "outline" })} />`
 */
export function buttonStyles({
  variant = "default",
  size = "default",
}: ButtonStyleProps = {}) {
  return cn(
    // `group/button` is a marker, not a style: children can react with group-hover/button:*
    "group/button",
    styles.root,
    styles[`variant-${variant}`],
    styles[`size-${size}`]
  )
}

export function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={mergeClassName(buttonStyles({ variant, size }), className)}
      {...props}
    />
  )
}
