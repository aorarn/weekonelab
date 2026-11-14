"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  Add01Icon,
  ArrowDown01Icon,
  ArrowLeft01Icon,
  ArrowRight01Icon,
  Delete02Icon,
  Download04Icon,
  Mail01Icon,
  Search01Icon,
  Settings02Icon,
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
  TextBoldIcon,
  TextItalicIcon,
  TextUnderlineIcon,
} from "@hugeicons/core-free-icons";

import { Button } from "@/components/ui/Button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/ButtonGroup";
import { Input } from "@/components/ui/Input";
import { Spinner } from "@/components/ui/Spinner";
import { Toggle } from "@/components/ui/Toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/ToggleGroup";

import { Example, Section } from "../primitives";

const buttonVariants = [
  "default",
  "secondary",
  "outline",
  "ghost",
  "destructive",
  "link",
] as const;
const buttonSizes = ["xs", "sm", "default", "lg"] as const;
const iconSizes = ["icon-xs", "icon-sm", "icon", "icon-lg"] as const;

export function ActionsSections() {
  return (
    <>
      <Section name="Button">
        <Example title="Variants" description="variant prop">
          {buttonVariants.map((variant) => (
            <Button key={variant} variant={variant}>
              {variant}
            </Button>
          ))}
        </Example>

        <Example title="Sizes" description="size: xs, sm, default, lg">
          {buttonSizes.map((size) => (
            <Button key={size} size={size}>
              {size}
            </Button>
          ))}
        </Example>

        <Example
          title="With icons"
          description='Icons marked with data-icon="inline-start" | "inline-end"'
        >
          <Button>
            <HugeiconsIcon icon={Add01Icon} strokeWidth={2} data-icon="inline-start" />
            New account
          </Button>
          <Button variant="outline">
            <HugeiconsIcon icon={Download04Icon} strokeWidth={2} data-icon="inline-start" />
            Export
          </Button>
          <Button variant="secondary">
            Continue
            <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} data-icon="inline-end" />
          </Button>
          <Button variant="destructive">
            <HugeiconsIcon icon={Delete02Icon} strokeWidth={2} data-icon="inline-start" />
            Delete
          </Button>
        </Example>

        <Example title="Icon only" description="size: icon-xs, icon-sm, icon, icon-lg">
          {iconSizes.map((size) => (
            <Button key={size} size={size} variant="outline" aria-label="Settings">
              <HugeiconsIcon icon={Settings02Icon} strokeWidth={2} />
            </Button>
          ))}
        </Example>

        <Example title="States" description="Disabled and loading">
          <Button disabled>Disabled</Button>
          <Button variant="outline" disabled>
            <HugeiconsIcon icon={Mail01Icon} strokeWidth={2} data-icon="inline-start" />
            Disabled
          </Button>
          <Button disabled>
            <Spinner data-icon="inline-start" />
            Saving…
          </Button>
        </Example>
      </Section>

      <Section name="ButtonGroup">
        <Example title="Horizontal" description="Buttons share borders and radius">
          <ButtonGroup>
            <Button variant="outline" size="icon" aria-label="Previous">
              <HugeiconsIcon icon={ArrowLeft01Icon} strokeWidth={2} />
            </Button>
            <Button variant="outline">Today</Button>
            <Button variant="outline" size="icon" aria-label="Next">
              <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} />
            </Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button>Save</Button>
            <ButtonGroupSeparator />
            <Button size="icon" aria-label="More save options">
              <HugeiconsIcon icon={ArrowDown01Icon} strokeWidth={2} />
            </Button>
          </ButtonGroup>
        </Example>

        <Example title="With input and text" description="ButtonGroupText and Input inside a group">
          <ButtonGroup>
            <ButtonGroupText>https://</ButtonGroupText>
            <Input placeholder="bof.example.com" />
          </ButtonGroup>
          <ButtonGroup>
            <Input placeholder="Search orders…" />
            <Button variant="outline" size="icon" aria-label="Search">
              <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
            </Button>
          </ButtonGroup>
        </Example>

        <Example title="Vertical" description='orientation="vertical"'>
          <ButtonGroup orientation="vertical">
            <Button variant="outline">Profile</Button>
            <Button variant="outline">Billing</Button>
            <Button variant="outline">Security</Button>
          </ButtonGroup>
        </Example>
      </Section>

      <Section name="Toggle">
        <Example title="Variants" description="variant: default, outline">
          <Toggle aria-label="Bold">
            <HugeiconsIcon icon={TextBoldIcon} strokeWidth={2} />
          </Toggle>
          <Toggle variant="outline" aria-label="Italic" defaultPressed>
            <HugeiconsIcon icon={TextItalicIcon} strokeWidth={2} />
          </Toggle>
          <Toggle variant="outline">
            <HugeiconsIcon icon={TextUnderlineIcon} strokeWidth={2} />
            Underline
          </Toggle>
          <Toggle disabled aria-label="Disabled">
            <HugeiconsIcon icon={TextBoldIcon} strokeWidth={2} />
          </Toggle>
        </Example>

        <Example title="Sizes" description="size: sm, default, lg">
          {(["sm", "default", "lg"] as const).map((size) => (
            <Toggle key={size} size={size} variant="outline" aria-label={size}>
              <HugeiconsIcon icon={TextBoldIcon} strokeWidth={2} />
            </Toggle>
          ))}
        </Example>
      </Section>

      <Section name="ToggleGroup">
        <Example title="Multiple" description="multiple — any number pressed">
          <ToggleGroup multiple variant="outline" defaultValue={["bold"]}>
            <ToggleGroupItem value="bold" aria-label="Bold">
              <HugeiconsIcon icon={TextBoldIcon} strokeWidth={2} />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Italic">
              <HugeiconsIcon icon={TextItalicIcon} strokeWidth={2} />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Underline">
              <HugeiconsIcon icon={TextUnderlineIcon} strokeWidth={2} />
            </ToggleGroupItem>
          </ToggleGroup>
        </Example>

        <Example title="Single" description="Default — one value at a time">
          <ToggleGroup defaultValue={["left"]}>
            <ToggleGroupItem value="left" aria-label="Align left">
              <HugeiconsIcon icon={TextAlignLeftIcon} strokeWidth={2} />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <HugeiconsIcon icon={TextAlignCenterIcon} strokeWidth={2} />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <HugeiconsIcon icon={TextAlignRightIcon} strokeWidth={2} />
            </ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup variant="outline" size="sm" defaultValue={["week"]}>
            <ToggleGroupItem value="day">Day</ToggleGroupItem>
            <ToggleGroupItem value="week">Week</ToggleGroupItem>
            <ToggleGroupItem value="month">Month</ToggleGroupItem>
          </ToggleGroup>
        </Example>
      </Section>
    </>
  );
}
