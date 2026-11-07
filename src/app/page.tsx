import { HugeiconsIcon } from "@hugeicons/react";
import {
  Add01Icon,
  ArrowRight01Icon,
  Copy01Icon,
  Delete02Icon,
  Download04Icon,
  Loading03Icon,
  Mail01Icon,
  MoreHorizontalIcon,
  Search01Icon,
  SentIcon,
  Settings02Icon,
  ViewIcon,
} from "@hugeicons/core-free-icons";

import { Button } from "@/components/ui/Button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
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
import { Textarea } from "@/components/ui/Textarea";

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
const cardSizes = ["default", "sm"] as const;
const dialogSizes = ["sm", "md", "lg", "xl"] as const;

const components = [
  { id: "button", name: "Button", description: "Actions and form submission" },
  { id: "card", name: "Card", description: "Grouped content container" },
  { id: "dialog", name: "Dialog", description: "Modal overlay window" },
  { id: "input", name: "Input", description: "Single-line text field" },
  { id: "textarea", name: "Textarea", description: "Multi-line text field" },
  {
    id: "input-group",
    name: "InputGroup",
    description: "Input with addons, text and buttons",
  },
  { id: "input-otp", name: "InputOTP", description: "One-time passcode entry" },
] as const;

function ComponentSection({
  id,
  title,
  importPath,
  children,
}: {
  id: string;
  title: string;
  importPath: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="flex scroll-mt-8 flex-col gap-4">
      <div className="flex flex-col gap-1 border-b border-border pb-3">
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        <code className="font-mono text-xs text-muted-foreground">
          import {"{ "}
          {title}
          {" }"} from &quot;{importPath}&quot;
        </code>
      </div>
      <div className="flex flex-col gap-4">{children}</div>
    </section>
  );
}

function Example({
  title,
  description,
  children,
  stack = false,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  stack?: boolean;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-border p-5">
      <div>
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      <div
        className={
          stack
            ? "grid gap-4 sm:grid-cols-2"
            : "flex flex-wrap items-center gap-2"
        }
      >
        {children}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 gap-10 px-4 py-12 sm:px-8">
      <aside className="sticky top-12 hidden h-fit w-48 shrink-0 flex-col gap-1 md:flex">
        <p className="px-2 pb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Components
        </p>
        {components.map((c) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            className="rounded-md px-2 py-1.5 text-sm hover:bg-muted"
          >
            {c.name}
          </a>
        ))}
      </aside>

      <main className="flex min-w-0 flex-1 flex-col gap-12">
        <header className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight">
            Design System
          </h1>
          <p className="text-sm text-muted-foreground">
            All components in <code className="font-mono">src/components/ui</code>{" "}
            · shadcn/ui base-mira · Base UI · Hugeicons
          </p>
          <div className="mt-2 grid gap-3 sm:grid-cols-3">
            {components.map((c) => (
              <a key={c.id} href={`#${c.id}`}>
                <Card size="sm" className="h-full transition-colors hover:bg-muted/50">
                  <CardHeader>
                    <CardTitle>{c.name}</CardTitle>
                    <CardDescription>{c.description}</CardDescription>
                  </CardHeader>
                </Card>
              </a>
            ))}
          </div>
        </header>

        {/* ───────────── Button ───────────── */}
        <ComponentSection
          id="button"
          title="Button"
          importPath="@/components/ui/Button"
        >
          <Example title="Variants" description="variant prop">
            {buttonVariants.map((variant) => (
              <Button key={variant} variant={variant}>
                {variant}
              </Button>
            ))}
          </Example>

          <Example title="Sizes" description="size prop: xs, sm, default, lg">
            {buttonSizes.map((size) => (
              <Button key={size} size={size}>
                {size}
              </Button>
            ))}
          </Example>

          <Example
            title="With icons"
            description="Icon before or after the label, marked with data-icon"
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
          </Example>

          <Example
            title="Icon only"
            description="size: icon-xs, icon-sm, icon, icon-lg"
          >
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
              <HugeiconsIcon
                icon={Loading03Icon}
                strokeWidth={2}
                data-icon="inline-start"
                className="animate-spin"
              />
              Saving…
            </Button>
          </Example>
        </ComponentSection>

        {/* ───────────── Card ───────────── */}
        <ComponentSection
          id="card"
          title="Card"
          importPath="@/components/ui/Card"
        >
          <Example
            title="Sizes"
            description="size prop: default, sm — scales padding of every slot"
            stack
          >
            {cardSizes.map((size) => (
              <Card key={size} size={size}>
                <CardHeader>
                  <CardTitle>Size: {size}</CardTitle>
                  <CardDescription>
                    Header, content and footer slots.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Cards group related information on BOF screens.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button size="sm">Action</Button>
                </CardFooter>
              </Card>
            ))}
          </Example>

          <Example
            title="With action"
            description="CardAction sits at the top-right of the header"
            stack
          >
            <Card>
              <CardHeader>
                <CardTitle>Account details</CardTitle>
                <CardDescription>Manage your profile information.</CardDescription>
                <CardAction>
                  <Button size="icon-sm" variant="ghost" aria-label="More">
                    <HugeiconsIcon icon={MoreHorizontalIcon} strokeWidth={2} />
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <dl className="grid grid-cols-2 gap-2 text-sm">
                  <dt className="text-muted-foreground">Name</dt>
                  <dd>Jane Doe</dd>
                  <dt className="text-muted-foreground">Role</dt>
                  <dd>Administrator</dd>
                </dl>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardDescription>Total revenue</CardDescription>
                <CardTitle className="text-2xl">฿1,250,000</CardTitle>
                <CardAction>
                  <Button size="xs" variant="outline">
                    View
                  </Button>
                </CardAction>
              </CardHeader>
              <CardFooter className="text-xs text-muted-foreground">
                +12.5% from last month
              </CardFooter>
            </Card>
          </Example>
        </ComponentSection>

        {/* ───────────── Dialog ───────────── */}
        <ComponentSection
          id="dialog"
          title="Dialog"
          importPath="@/components/ui/Dialog"
        >
          <Example
            title="Sizes"
            description="DialogContent size prop: sm, md, lg, xl"
          >
            {dialogSizes.map((size) => (
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
          </Example>

          <Example
            title="Custom close"
            description="DialogClose renders any element as a close control"
          >
            <Dialog>
              <DialogTrigger render={<Button />}>Edit profile</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Changes are saved to the mock session only.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose render={<Button variant="outline" />}>
                    Cancel
                  </DialogClose>
                  <DialogClose render={<Button />}>Save changes</DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </Example>
        </ComponentSection>
        {/* ───────────── Input ───────────── */}
        <ComponentSection
          id="input"
          title="Input"
          importPath="@/components/ui/Input"
        >
          <Example title="Types" description="Any native input type" stack>
            <Input placeholder="Full name" />
            <Input type="email" placeholder="name@company.com" />
            <Input type="password" placeholder="Password" />
            <Input type="file" />
          </Example>

          <Example
            title="States"
            description="disabled and aria-invalid"
            stack
          >
            <Input placeholder="Disabled" disabled />
            <Input defaultValue="not-an-email" aria-invalid />
          </Example>
        </ComponentSection>

        {/* ───────────── Textarea ───────────── */}
        <ComponentSection
          id="textarea"
          title="Textarea"
          importPath="@/components/ui/Textarea"
        >
          <Example
            title="Default"
            description="Grows with its content (field-sizing: content)"
            stack
          >
            <Textarea placeholder="Write a note…" />
            <Textarea defaultValue="Required field" aria-invalid />
          </Example>
        </ComponentSection>

        {/* ───────────── InputGroup ───────────── */}
        <ComponentSection
          id="input-group"
          title="InputGroup"
          importPath="@/components/ui/InputGroup"
        >
          <Example
            title="Inline addons"
            description="InputGroupAddon align: inline-start, inline-end"
            stack
          >
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
              <InputGroupInput placeholder="example.com" />
              <InputGroupAddon align="inline-end">
                <InputGroupText>.com</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Example>

          <Example
            title="With buttons"
            description="InputGroupButton size: xs, sm, icon-xs, icon-sm"
            stack
          >
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

            <InputGroup>
              <InputGroupInput defaultValue="invalid value" aria-invalid />
              <InputGroupAddon align="inline-end">
                <InputGroupText>Invalid</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Example>

          <Example
            title="With textarea"
            description="Block addons stack above or below the control"
            stack
          >
            <InputGroup>
              <InputGroupTextarea placeholder="Reply to customer…" />
              <InputGroupAddon align="block-end" className="border-t">
                <InputGroupText>0 / 500</InputGroupText>
                <InputGroupButton
                  size="sm"
                  variant="default"
                  className="ml-auto"
                >
                  Send
                  <HugeiconsIcon icon={SentIcon} strokeWidth={2} data-icon="inline-end" />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </Example>
        </ComponentSection>

        {/* ───────────── InputOTP ───────────── */}
        <ComponentSection
          id="input-otp"
          title="InputOTP"
          importPath="@/components/ui/InputOTP"
        >
          <Example
            title="Six digits"
            description="InputOTPGroup + InputOTPSlot, split with InputOTPSeparator"
          >
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
        </ComponentSection>
      </main>
    </div>
  );
}
