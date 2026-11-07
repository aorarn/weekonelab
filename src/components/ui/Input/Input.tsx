import { Input as InputPrimitive } from "@base-ui/react/input"

import { mergeClassName } from "@/lib/utils"
import styles from "./Input.module.css"

export type InputProps = InputPrimitive.Props

export function Input({ className, type, ...props }: InputProps) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={mergeClassName(styles.root, className)}
      {...props}
    />
  )
}
