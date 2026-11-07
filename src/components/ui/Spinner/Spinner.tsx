import { cn } from "@/lib/utils"
import { HugeiconsIcon } from "@hugeicons/react"
import { Loading03Icon } from "@hugeicons/core-free-icons"
import styles from "./Spinner.module.css"

function Spinner({ className, ...props }: Omit<React.ComponentProps<"svg">, "strokeWidth">) {
  return (
    <HugeiconsIcon icon={Loading03Icon} strokeWidth={2} data-slot="spinner" role="status" aria-label="Loading" className={cn(styles.root, className)} {...props} />
  )
}

export { Spinner }
