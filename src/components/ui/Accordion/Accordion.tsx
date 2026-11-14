import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion"
import { cn } from "@/lib/utils"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowDown01Icon, ArrowUp01Icon } from "@hugeicons/core-free-icons"
import styles from "./Accordion.module.css"

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn(
        styles.root,
        className
      )}
      {...props}
    />
  )
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(styles.item, className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className={styles["trigger-header"]}>
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger", styles.trigger,
          className
        )}
        {...props}
      >
        {children}
        <HugeiconsIcon icon={ArrowDown01Icon} strokeWidth={2} data-slot="accordion-trigger-icon" className={styles.triggerIcon} />
        <HugeiconsIcon icon={ArrowUp01Icon} strokeWidth={2} data-slot="accordion-trigger-icon" className={styles["triggerIcon-2"]} />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className={styles.content}
      {...props}
    >
      <div
        className={cn(
          styles["content-2"],
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Panel>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
