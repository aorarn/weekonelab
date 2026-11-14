"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import {
  DayPicker,
  getDefaultClassNames,
  type DayButton,
  type Locale,
} from "react-day-picker"

import { Button, buttonStyles } from "@/components/ui/Button"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowLeftIcon, ArrowRightIcon, ArrowDownIcon } from "@hugeicons/core-free-icons"
import styles from "./Calendar.module.css"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  locale,
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
}) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "group/calendar", styles.root,
        styles["root-rtl"],
        className
      )}
      captionLayout={captionLayout}
      locale={locale}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString(locale?.code, { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn(styles["root-2"], defaultClassNames.root),
        months: cn(
          styles["root-3"],
          defaultClassNames.months
        ),
        month: cn(styles["root-4"], defaultClassNames.month),
        nav: cn(
          styles["root-5"],
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonStyles({ variant: buttonVariant }),
          styles["root-6"],
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonStyles({ variant: buttonVariant }),
          styles["root-6"],
          defaultClassNames.button_next
        ),
        month_caption: cn(
          styles["root-7"],
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          styles["root-8"],
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          styles["root-9"],
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          styles["root-10"],
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          styles["root-11"],
          captionLayout === "label"
            ? styles["root-on"]
            : styles["root-off"],
          defaultClassNames.caption_label
        ),
        month_grid: cn(styles["root-12"], defaultClassNames.month_grid),
        weekdays: cn(styles["root-13"], defaultClassNames.weekdays),
        weekday: cn(
          styles["root-14"],
          defaultClassNames.weekday
        ),
        week: cn(styles["root-15"], defaultClassNames.week),
        week_number_header: cn(
          styles["root-16"],
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          styles["root-17"],
          defaultClassNames.week_number
        ),
        day: cn(
          "group/day", styles["root-18"],
          props.showWeekNumber
            ? styles["root-on-2"]
            : styles["root-off-2"],
          defaultClassNames.day
        ),
        range_start: cn(
          styles["root-19"],
          defaultClassNames.range_start
        ),
        range_middle: cn(styles["root-20"], defaultClassNames.range_middle),
        range_end: cn(
          styles["root-21"],
          defaultClassNames.range_end
        ),
        today: cn(
          styles["root-22"],
          defaultClassNames.today
        ),
        outside: cn(
          styles["root-23"],
          defaultClassNames.outside
        ),
        disabled: cn(
          styles["root-24"],
          defaultClassNames.disabled
        ),
        hidden: cn(styles["root-25"], defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          )
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <HugeiconsIcon icon={ArrowLeftIcon} strokeWidth={2} className={cn(styles["root-26"], className)} {...props} />
            )
          }

          if (orientation === "right") {
            return (
              <HugeiconsIcon icon={ArrowRightIcon} strokeWidth={2} className={cn(styles["root-26"], className)} {...props} />
            )
          }

          return (
            <HugeiconsIcon icon={ArrowDownIcon} strokeWidth={2} className={cn(styles["root-26"], className)} {...props} />
          )
        },
        DayButton: ({ ...props }) => (
          <CalendarDayButton locale={locale} {...props} />
        ),
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className={styles["root-div"]}>
                {children}
              </div>
            </td>
          )
        },
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  locale,
  ...props
}: React.ComponentProps<typeof DayButton> & { locale?: Partial<Locale> }) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <Button
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString(locale?.code)}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        styles.dayButton,
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }
