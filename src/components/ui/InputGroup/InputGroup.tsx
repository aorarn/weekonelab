"use client"

import * as React from "react"

import { cn, mergeClassName } from "@/lib/utils"
import { Button, type ButtonProps } from "@/components/ui/Button"
import { Input, type InputProps } from "@/components/ui/Input"
import { Textarea, type TextareaProps } from "@/components/ui/Textarea"
import styles from "./InputGroup.module.css"

export type InputGroupAddonAlign =
  | "inline-start"
  | "inline-end"
  | "block-start"
  | "block-end"

export type InputGroupButtonSize = "xs" | "sm" | "icon-xs" | "icon-sm"

export type InputGroupProps = React.ComponentProps<"div">

export function InputGroup({ className, ...props }: InputGroupProps) {
  return (
    <div
      data-slot="input-group"
      role="group"
      className={cn(
        // `group/input-group` is a marker, not a style: children can react with group-*/input-group:*
        "group/input-group",
        styles.root,
        className
      )}
      {...props}
    />
  )
}

export type InputGroupAddonProps = React.ComponentProps<"div"> & {
  /** Where the addon sits relative to the control. */
  align?: InputGroupAddonAlign
}

export function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}: InputGroupAddonProps) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(styles.addon, styles[`align-${align}`], className)}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) {
          return
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus()
      }}
      {...props}
    />
  )
}

export type InputGroupButtonProps = Omit<ButtonProps, "size" | "type"> & {
  /** Compact size scale tuned to fit inside the group. */
  size?: InputGroupButtonSize
  type?: "button" | "submit" | "reset"
}

export function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}: InputGroupButtonProps) {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      className={mergeClassName(
        cn(styles.button, styles[`button-size-${size}`]),
        className
      )}
      {...props}
    />
  )
}

export function InputGroupText({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="input-group-text"
      className={cn(styles.text, className)}
      {...props}
    />
  )
}

export function InputGroupInput({ className, ...props }: InputProps) {
  return (
    <Input
      data-slot="input-group-control"
      className={mergeClassName(styles.input, className)}
      {...props}
    />
  )
}

export function InputGroupTextarea({ className, ...props }: TextareaProps) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn(styles.textarea, className)}
      {...props}
    />
  )
}
