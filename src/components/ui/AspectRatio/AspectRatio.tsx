import { cn } from "@/lib/utils"
import styles from "./AspectRatio.module.css"

function AspectRatio({
  ratio,
  className,
  ...props
}: React.ComponentProps<"div"> & { ratio: number }) {
  return (
    <div
      data-slot="aspect-ratio"
      style={
        {
          "--ratio": ratio,
        } as React.CSSProperties
      }
      className={cn(styles.root, className)}
      {...props}
    />
  )
}

export { AspectRatio }
