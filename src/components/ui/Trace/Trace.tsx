import * as React from "react"
import { cn } from "@/lib/utils"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/Collapsible"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import styles from "./Trace.module.css"

function Trace({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="trace"
      className={cn(
        styles.root,
        className
      )}
      {...props}
    />
  )
}

function TraceLine({
  className,
  status,
  ...props
}: React.ComponentProps<"span"> & {
  status?: "running" | "error" | "pending"
}) {
  return (
    <span
      data-slot="trace-line"
      data-status={status}
      className={cn(
        styles.line,
        className
      )}
      {...props}
    />
  )
}

function TraceIcon({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="trace-icon"
      aria-hidden="true"
      className={cn(
        styles.icon,
        className
      )}
      {...props}
    />
  )
}

function TraceTitle({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="trace-title"
      className={cn(styles.title, className)}
      {...props}
    />
  )
}

function TraceDescription({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="trace-description"
      className={cn(
        styles.description,
        className
      )}
      {...props}
    />
  )
}

function TraceCollapsible({
  className,
  ...props
}: Omit<React.ComponentProps<typeof Collapsible>, "open"> &
  (
    | { open?: undefined }
    | {
        open: boolean
        onOpenChange: NonNullable<
          React.ComponentProps<typeof Collapsible>["onOpenChange"]
        >
      }
  )) {
  return (
    <Collapsible
      data-slot="trace-collapsible"
      className={cn(styles.collapsible, className)}
      {...props}
    />
  )
}

function TraceCollapsibleTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CollapsibleTrigger>) {
  return (
    <CollapsibleTrigger
      data-slot="trace-collapsible-trigger"
      className={cn(
        "group/trace-collapsible-trigger", styles.collapsibleTrigger,
        className
      )}
      {...props}
    >
      {children}
      <TraceIcon className={styles["collapsibleTrigger-traceIcon"]}>
        <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} />
      </TraceIcon>
    </CollapsibleTrigger>
  )
}

function TraceCollapsibleContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CollapsibleContent>) {
  return (
    <CollapsibleContent
      data-slot="trace-collapsible-content"
      className={styles.collapsibleContent}
      {...props}
    >
      <div
        data-slot="trace-collapsible-content-inner"
        className={cn(
          styles.collapsibleContentInner,
          className
        )}
      >
        {children}
      </div>
    </CollapsibleContent>
  )
}

export {
  Trace,
  TraceLine,
  TraceIcon,
  TraceTitle,
  TraceDescription,
  TraceCollapsible,
  TraceCollapsibleTrigger,
  TraceCollapsibleContent,
}
