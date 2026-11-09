"use client";

import * as React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Copy01Icon,
  Search01Icon,
  SentIcon,
  ViewIcon,
} from "@hugeicons/core-free-icons";
import type { DateRange } from "react-day-picker";

import { Calendar } from "@/components/ui/Calendar";
import { Checkbox } from "@/components/ui/Checkbox";
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/Combobox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/Field";
import { Input } from "@/components/ui/Input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/InputGroup";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/InputOTP";
import { Label } from "@/components/ui/Label";
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/NativeSelect";
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Slider } from "@/components/ui/Slider";
import { Switch } from "@/components/ui/Switch";
import { Textarea } from "@/components/ui/Textarea";

import { Example, Section } from "../primitives";

const roles = [
  { label: "Select a role", value: null },
  { label: "Administrator", value: "admin" },
  { label: "Manager", value: "manager" },
  { label: "Support agent", value: "support" },
  { label: "Viewer", value: "viewer" },
];

const departments = [
  "Finance",
  "Operations",
  "Customer support",
  "Marketing",
  "Engineering",
  "Human resources",
];

// Fixed dates: reading the clock during prerender is not allowed with
// cacheComponents, and a stable date keeps the demo deterministic.
const demoMonth = new Date(2026, 10, 1);

function ComboboxDemos() {
  const anchor = useComboboxAnchor();

  return (
    <>
      <Example title="Single" description="Type to filter, Enter to pick">
        <Combobox items={departments}>
          <ComboboxInput placeholder="Select department" className="w-64" />
          <ComboboxContent>
            <ComboboxEmpty>No department found.</ComboboxEmpty>
            <ComboboxList>
              {(item: string) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </Example>

      <Example title="Multiple with chips" description="multiple + ComboboxChips">
        <Combobox
          multiple
          autoHighlight
          items={departments}
          defaultValue={[departments[0], departments[1]]}
        >
          <ComboboxChips ref={anchor} className="w-full max-w-sm">
            <ComboboxValue>
              {(values: string[]) => (
                <>
                  {values.map((value) => (
                    <ComboboxChip key={value}>{value}</ComboboxChip>
                  ))}
                  <ComboboxChipsInput placeholder="Add department" />
                </>
              )}
            </ComboboxValue>
          </ComboboxChips>
          <ComboboxContent anchor={anchor}>
            <ComboboxEmpty>No department found.</ComboboxEmpty>
            <ComboboxList>
              {(item: string) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </Example>
    </>
  );
}

function CalendarDemos() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(2026, 10, 9),
  );
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(2026, 10, 4),
    to: new Date(2026, 10, 12),
  });

  return (
    <Example title="Single and range" description='mode="single" | "range"' layout="row">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        defaultMonth={demoMonth}
        className="rounded-lg border"
      />
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
        defaultMonth={demoMonth}
        captionLayout="dropdown"
        className="rounded-lg border"
      />
    </Example>
  );
}

export function FormsSections() {
  return (
    <>
      <Section name="Input">
        <Example title="Types" description="Any native input type" layout="grid">
          <Input placeholder="Full name" />
          <Input type="email" placeholder="name@company.com" />
          <Input type="password" placeholder="Password" />
          <Input type="file" />
        </Example>
        <Example title="States" description="disabled and aria-invalid" layout="grid">
          <Input placeholder="Disabled" disabled />
          <Input defaultValue="not-an-email" aria-invalid />
        </Example>
      </Section>

      <Section name="Textarea">
        <Example title="Default" description="Grows with its content" layout="grid">
          <Textarea placeholder="Write a note…" />
          <Textarea defaultValue="Required field" aria-invalid />
        </Example>
      </Section>

      <Section name="InputGroup">
        <Example title="Inline addons" description="align: inline-start, inline-end" layout="grid">
          <InputGroup>
            <InputGroupInput placeholder="Search accounts…" />
            <InputGroupAddon>
              <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupAddon>
              <InputGroupText>https://</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder="example" />
            <InputGroupAddon align="inline-end">
              <InputGroupText>.com</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Example>
        <Example title="With buttons" description="InputGroupButton" layout="grid">
          <InputGroup>
            <InputGroupInput type="password" placeholder="Password" />
            <InputGroupAddon align="inline-end">
              <InputGroupButton size="icon-xs" aria-label="Show password">
                <HugeiconsIcon icon={ViewIcon} strokeWidth={2} />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput readOnly defaultValue="sk-test-1234" />
            <InputGroupAddon align="inline-end">
              <InputGroupButton>
                <HugeiconsIcon icon={Copy01Icon} strokeWidth={2} />
                Copy
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </Example>
        <Example title="With textarea" description="Block addon below the control" layout="grid">
          <InputGroup>
            <InputGroupTextarea placeholder="Reply to customer…" />
            <InputGroupAddon align="block-end" className="border-t">
              <InputGroupText>0 / 500</InputGroupText>
              <InputGroupButton size="sm" variant="default" className="ml-auto">
                Send
                <HugeiconsIcon icon={SentIcon} strokeWidth={2} data-icon="inline-end" />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </Example>
      </Section>

      <Section name="InputOTP">
        <Example title="Six digits" description="Groups split by InputOTPSeparator">
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </Example>
        <Example title="States" description="disabled and aria-invalid">
          <InputOTP maxLength={4} disabled>
            <InputOTPGroup>
              {[0, 1, 2, 3].map((i) => (
                <InputOTPSlot key={i} index={i} />
              ))}
            </InputOTPGroup>
          </InputOTP>
          <InputOTP maxLength={4}>
            <InputOTPGroup>
              {[0, 1, 2, 3].map((i) => (
                <InputOTPSlot key={i} index={i} aria-invalid />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </Example>
      </Section>

      <Section name="Label">
        <Example title="With controls" description="htmlFor links label and control">
          <div className="flex items-center gap-2">
            <Checkbox id="label-terms" />
            <Label htmlFor="label-terms">Accept terms</Label>
          </div>
          <div className="flex w-64 flex-col gap-2">
            <Label htmlFor="label-email">Email</Label>
            <Input id="label-email" placeholder="you@company.com" />
          </div>
        </Example>
      </Section>

      <Section name="Field">
        <Example title="Form layout" description="FieldSet, FieldGroup, FieldSeparator" layout="stack">
          <FieldSet className="max-w-md">
            <FieldLegend>Account details</FieldLegend>
            <FieldDescription>Shown on invoices and in the team directory.</FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="field-name">Full name</FieldLabel>
                <Input id="field-name" defaultValue="Jane Doe" />
              </Field>
              <Field data-invalid>
                <FieldLabel htmlFor="field-email">Work email</FieldLabel>
                <Input id="field-email" defaultValue="jane@" aria-invalid />
                <FieldError>Enter a valid email address.</FieldError>
              </Field>
              <FieldSeparator>Notifications</FieldSeparator>
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldLabel htmlFor="field-digest">Weekly digest</FieldLabel>
                  <FieldDescription>Summary of activity every Monday.</FieldDescription>
                </FieldContent>
                <Switch id="field-digest" defaultChecked />
              </Field>
            </FieldGroup>
          </FieldSet>
        </Example>
      </Section>

      <Section name="Checkbox">
        <Example title="States" description="unchecked, checked, indeterminate, disabled">
          <div className="flex items-center gap-2">
            <Checkbox id="cb-1" />
            <Label htmlFor="cb-1">Unchecked</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="cb-2" defaultChecked />
            <Label htmlFor="cb-2">Checked</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="cb-3" indeterminate />
            <Label htmlFor="cb-3">Indeterminate</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="cb-4" disabled />
            <Label htmlFor="cb-4">Disabled</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="cb-5" aria-invalid />
            <Label htmlFor="cb-5">Invalid</Label>
          </div>
        </Example>
      </Section>

      <Section name="RadioGroup">
        <Example title="Default" description="RadioGroupItem with Field">
          <RadioGroup defaultValue="monthly" className="w-fit">
            {[
              ["monthly", "Monthly billing"],
              ["yearly", "Yearly billing (save 20%)"],
              ["custom", "Custom contract"],
            ].map(([value, label]) => (
              <Field key={value} orientation="horizontal">
                <RadioGroupItem value={value} id={`radio-${value}`} />
                <FieldLabel htmlFor={`radio-${value}`}>{label}</FieldLabel>
              </Field>
            ))}
          </RadioGroup>
        </Example>
      </Section>

      <Section name="Switch">
        <Example title="Sizes and states" description="size: sm, default">
          <div className="flex items-center gap-2">
            <Switch id="sw-1" defaultChecked />
            <Label htmlFor="sw-1">Default</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="sw-2" size="sm" />
            <Label htmlFor="sw-2">Small</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="sw-3" disabled />
            <Label htmlFor="sw-3">Disabled</Label>
          </div>
        </Example>
      </Section>

      <Section name="Slider">
        <Example title="Single and range" description="One thumb per value" layout="grid">
          <Slider defaultValue={[40]} max={100} />
          <Slider defaultValue={[20, 75]} max={100} />
          <Slider defaultValue={[60]} max={100} disabled />
        </Example>
      </Section>

      <Section name="Select">
        <Example title="Default" description="items prop drives the displayed label">
          <Select items={roles}>
            <SelectTrigger className="w-56">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Roles</SelectLabel>
                {roles.map((role) => (
                  <SelectItem key={role.label} value={role.value}>
                    {role.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select items={roles} defaultValue="manager">
            <SelectTrigger size="sm" className="w-44">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {roles.slice(1).map((role) => (
                <SelectItem key={role.label} value={role.value}>
                  {role.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Example>
      </Section>

      <Section name="NativeSelect">
        <Example title="Default" description="size: default, sm">
          <NativeSelect defaultValue="">
            <NativeSelectOption value="" disabled>
              Choose status
            </NativeSelectOption>
            <NativeSelectOptGroup label="Open">
              <NativeSelectOption value="new">New</NativeSelectOption>
              <NativeSelectOption value="pending">Pending</NativeSelectOption>
            </NativeSelectOptGroup>
            <NativeSelectOptGroup label="Closed">
              <NativeSelectOption value="resolved">Resolved</NativeSelectOption>
            </NativeSelectOptGroup>
          </NativeSelect>
          <NativeSelect size="sm" defaultValue="10">
            <NativeSelectOption value="10">10 per page</NativeSelectOption>
            <NativeSelectOption value="25">25 per page</NativeSelectOption>
            <NativeSelectOption value="50">50 per page</NativeSelectOption>
          </NativeSelect>
        </Example>
      </Section>

      <Section name="Combobox">
        <ComboboxDemos />
      </Section>

      <Section name="Calendar">
        {/* react-day-picker reads today's date, which must stream rather than prerender. */}
        <React.Suspense fallback={<Example title="Single and range">Loading…</Example>}>
          <CalendarDemos />
        </React.Suspense>
      </Section>
    </>
  );
}
