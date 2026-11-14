import * as React from "react"

import { cn } from "@/lib/utils"
import styles from "./Card.module.css"

export type CardSize = "default" | "sm"

export type CardProps = React.ComponentProps<"div"> & {
  /** Spacing scale for the card and all of its slots. */
  size?: CardSize
}

export function Card({ className, size = "default", ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        // `group/card` is a marker, not a style: children can react with group-*/card:*
        "group/card",
        styles.root,
        styles[`size-${size}`],
        className
      )}
      {...props}
    />
  )
}

export function CardHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        // markers for group-*/card-header:* and @container queries
        "group/card-header @container/card-header",
        styles.header,
        className
      )}
      {...props}
    />
  )
}

export function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(styles.title, className)}
      {...props}
    />
  )
}

export function CardDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn(styles.description, className)}
      {...props}
    />
  )
}

export function CardAction({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(styles.action, className)}
      {...props}
    />
  )
}

export function CardContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn(styles.content, className)}
      {...props}
    />
  )
}

export function CardFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(styles.footer, className)}
      {...props}
    />
  )
}
