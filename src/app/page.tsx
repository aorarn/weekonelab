import { HugeiconsIcon } from "@hugeicons/react";
import {
  Add01Icon,
  ArrowRight01Icon,
  Delete02Icon,
  Download04Icon,
  Loading03Icon,
  Mail01Icon,
  Settings02Icon,
} from "@hugeicons/core-free-icons";

import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";

const variants = [
  "default",
  "secondary",
  "outline",
  "ghost",
  "destructive",
  "link",
] as const;

const sizes = ["xs", "sm", "default", "lg"] as const;

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-3 rounded-lg border border-border bg-card p-5">
      <div>
        <h2 className="text-sm font-semibold text-card-foreground">{title}</h2>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      <div className="flex flex-wrap items-center gap-2">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-4 py-12 sm:px-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight">Button</h1>
        <p className="text-sm text-muted-foreground">
          shadcn/ui preset b1D43Pu4 · base-mira · Base UI · Hugeicons
        </p>
      </header>

      <Section title="Variants" description="variant prop">
        {variants.map((variant) => (
          <Button key={variant} variant={variant}>
            {variant}
          </Button>
        ))}
      </Section>

      <Section title="Sizes" description="size prop: xs, sm, default, lg">
        {sizes.map((size) => (
          <Button key={size} size={size}>
            {size}
          </Button>
        ))}
      </Section>

      <Section
        title="With icons"
        description='Icon before or after the label, marked with data-icon'
      >
        <Button>
          <HugeiconsIcon icon={Add01Icon} strokeWidth={2} data-icon="inline-start" />
          New project
        </Button>
        <Button variant="outline">
          <HugeiconsIcon icon={Download04Icon} strokeWidth={2} data-icon="inline-start" />
          Download
        </Button>
        <Button variant="secondary">
          Continue
          <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} data-icon="inline-end" />
        </Button>
        <Button variant="destructive">
          <HugeiconsIcon icon={Delete02Icon} strokeWidth={2} data-icon="inline-start" />
          Delete
        </Button>
      </Section>

      <Section title="Icon only" description="size: icon-xs, icon-sm, icon, icon-lg">
        <Button size="icon-xs" variant="outline" aria-label="Settings">
          <HugeiconsIcon icon={Settings02Icon} strokeWidth={2} />
        </Button>
        <Button size="icon-sm" variant="outline" aria-label="Settings">
          <HugeiconsIcon icon={Settings02Icon} strokeWidth={2} />
        </Button>
        <Button size="icon" variant="outline" aria-label="Settings">
          <HugeiconsIcon icon={Settings02Icon} strokeWidth={2} />
        </Button>
        <Button size="icon-lg" variant="outline" aria-label="Settings">
          <HugeiconsIcon icon={Settings02Icon} strokeWidth={2} />
        </Button>
      </Section>

      <Section title="States" description="Disabled and loading">
        <Button disabled>Disabled</Button>
        <Button variant="outline" disabled>
          <HugeiconsIcon icon={Mail01Icon} strokeWidth={2} data-icon="inline-start" />
          Disabled
        </Button>
        <Button disabled>
          <HugeiconsIcon
            icon={Loading03Icon}
            strokeWidth={2}
            data-icon="inline-start"
            className="animate-spin"
          />
          Saving…
        </Button>
      </Section>
      <Section title="Dialog" description="DialogContent size prop: sm, md, lg, xl">
        {(["sm", "md", "lg", "xl"] as const).map((size) => (
          <Dialog key={size}>
            <DialogTrigger render={<Button variant="outline" />}>
              Open {size}
            </DialogTrigger>
            <DialogContent size={size}>
              <DialogHeader>
                <DialogTitle>Delete account</DialogTitle>
                <DialogDescription>
                  This permanently removes the account and its data.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter showCloseButton>
                <Button variant="destructive">Delete</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        ))}
      </Section>
    </main>
  );
}
