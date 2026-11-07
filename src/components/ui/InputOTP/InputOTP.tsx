"use client"

import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { HugeiconsIcon } from "@hugeicons/react"
import { MinusSignIcon } from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import styles from "./InputOTP.module.css"

export type InputOTPProps = React.ComponentProps<typeof OTPInput> & {
  /** Class for the wrapper around the slots (`className` targets the hidden input). */
  containerClassName?: string
}

export function InputOTP({
  className,
  containerClassName,
  ...props
}: InputOTPProps) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        // `cn-input-otp` is a marker, not a style
        "cn-input-otp",
        styles.container,
        containerClassName
      )}
      spellCheck={false}
      className={cn(styles.input, className)}
      {...props}
    />
  )
}

export function InputOTPGroup({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn(styles.group, className)}
      {...props}
    />
  )
}

export type InputOTPSlotProps = React.ComponentProps<"div"> & {
  /** Position of the character this slot renders. */
  index: number
}

export function InputOTPSlot({ index, className, ...props }: InputOTPSlotProps) {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {}

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(styles.slot, className)}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className={styles.caret}>
          <div className={styles["caret-line"]} />
        </div>
      )}
    </div>
  )
}

export function InputOTPSeparator({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-separator"
      role="separator"
      className={cn(styles.separator, className)}
      {...props}
    >
      <HugeiconsIcon icon={MinusSignIcon} strokeWidth={2} />
    </div>
  )
}
