"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  Alert02Icon,
  Calendar03Icon,
  InformationCircleIcon,
} from "@hugeicons/core-free-icons";

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/Alert";
import { Avatar, AvatarFallback } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/Field";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/HoverCard";
import { Input } from "@/components/ui/Input";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/Popover";
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/Progress";
import { Skeleton } from "@/components/ui/Skeleton";
import { Spinner } from "@/components/ui/Spinner";
import { toast } from "@/components/ui/Toast";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/Tooltip";

import { Example, Section } from "../primitives";

const toastTypes = [
  { type: "success", label: "Success", title: "Account saved", description: "Changes are stored in the mock session." },
  { type: "info", label: "Info", title: "New version", description: "Reload to get the latest Back Office." },
  { type: "warning", label: "Warning", title: "Session expiring", description: "You will be signed out in 5 minutes." },
  { type: "error", label: "Error", title: "Upload failed", description: "The file is larger than 10 MB." },
] as const;

export function FeedbackSections() {
  return (
    <>
      <Section name="Alert">
        <Example title="Variants" description="variant: default, destructive" layout="stack">
          <Alert>
            <HugeiconsIcon icon={InformationCircleIcon} strokeWidth={2} />
            <AlertTitle>Scheduled maintenance</AlertTitle>
            <AlertDescription>
              Back Office will be read-only on Sunday 02:00–04:00.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <HugeiconsIcon icon={Alert02Icon} strokeWidth={2} />
            <AlertTitle>Payment failed</AlertTitle>
            <AlertDescription>
              The card on file was declined. Update billing to keep access.
            </AlertDescription>
            <AlertAction>
              <Button size="xs" variant="outline">
                Update
              </Button>
            </AlertAction>
          </Alert>
        </Example>
      </Section>

      <Section
        name="Toast"
        note={
          <>
            Needs one <code className="font-mono">&lt;Toaster /&gt;</code> mounted (this page
            mounts it); call <code className="font-mono">toast.add()</code> from anywhere.
          </>
        }
      >
        <Example title="Types" description="type: success, info, warning, error, loading">
          {toastTypes.map((t) => (
            <Button
              key={t.type}
              variant="outline"
              onClick={() =>
                toast.add({ type: t.type, title: t.title, description: t.description })
              }
            >
              {t.label}
            </Button>
          ))}
          <Button
            variant="outline"
            onClick={() => {
              const id = toast.add({
                type: "loading",
                title: "Exporting report…",
                timeout: 0,
              });
              setTimeout(
                () =>
                  toast.update(id, {
                    type: "success",
                    title: "Report exported",
                    timeout: 4000,
                  }),
                1500,
              );
            }}
          >
            Loading → success
          </Button>
          <Button
            onClick={() =>
              toast.add({
                title: "Invoice deleted",
                description: "INV-1044 was moved to trash.",
                actionProps: { children: "Undo" },
              })
            }
          >
            With action
          </Button>
        </Example>
      </Section>

      <Section name="Progress">
        <Example title="Default" description="ProgressLabel and ProgressValue are optional" layout="grid">
          <Progress value={64}>
            <ProgressLabel>Uploading files</ProgressLabel>
            <ProgressValue />
          </Progress>
          <Progress value={25} />
        </Example>
      </Section>

      <Section name="Spinner">
        <Example title="Sizes" description="Size and color via className">
          <Spinner className="size-3" />
          <Spinner />
          <Spinner className="size-6" />
          <Spinner className="size-8 text-primary" />
          <Button disabled size="sm">
            <Spinner data-icon="inline-start" />
            Loading
          </Button>
        </Example>
      </Section>

      <Section name="Skeleton">
        <Example title="Placeholders" description="Shape with width/height utilities" layout="grid">
          <div className="flex items-center gap-3">
            <Skeleton className="size-10 rounded-full" />
            <div className="flex flex-1 flex-col gap-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-28 w-full rounded-lg" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </Example>
      </Section>

      <Section name="Tooltip">
        <Example title="Sides" description="side: top, right, bottom, left">
          {(["top", "right", "bottom", "left"] as const).map((side) => (
            <Tooltip key={side}>
              <TooltipTrigger render={<Button variant="outline" />}>{side}</TooltipTrigger>
              <TooltipContent side={side}>Tooltip on the {side}</TooltipContent>
            </Tooltip>
          ))}
        </Example>
      </Section>

      <Section name="HoverCard">
        <Example title="User preview" description="Hover the link">
          <HoverCard>
            <HoverCardTrigger href="#hover-card" className="text-sm font-medium underline underline-offset-4">
              @jane.doe
            </HoverCardTrigger>
            <HoverCardContent className="w-72">
              <div className="flex gap-3">
                <Avatar>
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-semibold">Jane Doe</p>
                  <p className="text-xs text-muted-foreground">
                    Administrator · Finance team
                  </p>
                  <p className="flex items-center gap-1 text-xs text-muted-foreground">
                    <HugeiconsIcon icon={Calendar03Icon} strokeWidth={2} className="size-3" />
                    Joined March 2024
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </Example>
      </Section>

      <Section name="Popover">
        <Example title="With form" description="PopoverHeader, PopoverTitle, PopoverDescription">
          <Popover>
            <PopoverTrigger render={<Button variant="outline" />}>Set limits</PopoverTrigger>
            <PopoverContent className="w-72">
              <PopoverHeader>
                <PopoverTitle>Spending limits</PopoverTitle>
                <PopoverDescription>Applies to every card in this account.</PopoverDescription>
              </PopoverHeader>
              <FieldGroup className="gap-3">
                <Field orientation="horizontal">
                  <FieldLabel htmlFor="limit-daily" className="w-20">
                    Daily
                  </FieldLabel>
                  <Input id="limit-daily" defaultValue="50,000" />
                </Field>
                <Field orientation="horizontal">
                  <FieldLabel htmlFor="limit-monthly" className="w-20">
                    Monthly
                  </FieldLabel>
                  <Input id="limit-monthly" defaultValue="500,000" />
                </Field>
              </FieldGroup>
            </PopoverContent>
          </Popover>
        </Example>
      </Section>
    </>
  );
}
