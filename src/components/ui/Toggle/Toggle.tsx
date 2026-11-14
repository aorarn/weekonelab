"use client"

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import styles from "./Toggle.module.css"

const toggleVariants = cva(
  ["group/toggle", styles.root],
  {
    variants: {
      variant: {
        default: styles["variant-default"],
        outline: styles["variant-outline"],
      },
      size: {
        default:
          styles["size-default"],
        sm: styles["size-sm"],
        lg: styles["size-lg"],
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Toggle({
  className,
  variant = "default",
  size = "default",
  ...props
}: TogglePrimitive.Props & VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
