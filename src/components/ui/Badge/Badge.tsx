import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import styles from "./Badge.module.css"

const badgeVariants = cva(
  ["group/badge", styles.root],
  {
    variants: {
      variant: {
        default: styles["variant-default"],
        secondary:
          styles["variant-secondary"],
        destructive:
          styles["variant-destructive"],
        outline:
          styles["variant-outline"],
        ghost:
          styles["variant-ghost"],
        link: styles["variant-link"],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }
