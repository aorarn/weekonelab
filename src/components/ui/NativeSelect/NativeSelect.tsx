import * as React from "react"
import { cn } from "@/lib/utils"
import { HugeiconsIcon } from "@hugeicons/react"
import { UnfoldMoreIcon } from "@hugeicons/core-free-icons"
import styles from "./NativeSelect.module.css"

type NativeSelectProps = Omit<React.ComponentProps<"select">, "size"> & {
  size?: "sm" | "default"
}

function NativeSelect({
  className,
  size = "default",
  ...props
}: NativeSelectProps) {
  return (
    <div
      className={cn(
        "group/native-select", styles.wrapper,
        className
      )}
      data-slot="native-select-wrapper"
      data-size={size}
    >
      <select
        data-slot="native-select"
        data-size={size}
        className={styles.root}
        {...props}
      />
      <HugeiconsIcon icon={UnfoldMoreIcon} strokeWidth={2} className={styles.icon} aria-hidden="true" data-slot="native-select-icon" />
    </div>
  )
}

function NativeSelectOption({
  className,
  ...props
}: React.ComponentProps<"option">) {
  return (
    <option
      data-slot="native-select-option"
      className={cn(styles.option, className)}
      {...props}
    />
  )
}

function NativeSelectOptGroup({
  className,
  ...props
}: React.ComponentProps<"optgroup">) {
  return (
    <optgroup
      data-slot="native-select-optgroup"
      className={cn(styles.optgroup, className)}
      {...props}
    />
  )
}

export { NativeSelect, NativeSelectOptGroup, NativeSelectOption }
