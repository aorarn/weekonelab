"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  Add01Icon,
  ArrowRight01Icon,
  CheckmarkCircle02Icon,
  Clock01Icon,
  File01Icon,
  Folder01Icon,
  MoreHorizontalIcon,
  ShieldUserIcon,
  UserIcon,
} from "@hugeicons/core-free-icons";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
} from "recharts";

import { AspectRatio } from "@/components/ui/AspectRatio";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
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
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/Chart";
import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockLine,
  CodeBlockTitle,
} from "@/components/ui/CodeBlock";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/Empty";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/Item";
import { Kbd, KbdGroup } from "@/components/ui/Kbd";
import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/Marker";
import { Separator } from "@/components/ui/Separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";

import { Example, Section } from "../primitives";

const invoices = [
  { id: "INV-1042", customer: "Acme Co.", status: "Paid", amount: 12500 },
  { id: "INV-1043", customer: "Globex", status: "Pending", amount: 8200 },
  { id: "INV-1044", customer: "Initech", status: "Overdue", amount: 4300 },
  { id: "INV-1045", customer: "Umbrella", status: "Paid", amount: 15900 },
];

const statusVariant = {
  Paid: "secondary",
  Pending: "outline",
  Overdue: "destructive",
} as const;

const baht = new Intl.NumberFormat("th-TH", {
  style: "currency",
  currency: "THB",
  maximumFractionDigits: 0,
});

const revenue = [
  { month: "Jun", online: 186, branch: 80 },
  { month: "Jul", online: 305, branch: 200 },
  { month: "Aug", online: 237, branch: 120 },
  { month: "Sep", online: 273, branch: 190 },
  { month: "Oct", online: 209, branch: 130 },
  { month: "Nov", online: 314, branch: 140 },
];

const chartConfig = {
  online: { label: "Online", color: "var(--chart-1)" },
  branch: { label: "Branch", color: "var(--chart-2)" },
} satisfies ChartConfig;

const loginCode = `export function validate(email: string, password: string) {
  if (!email.includes("@")) return "Enter a valid email"
  if (password.length < 8) return "Password is too short"
  return null
}
`;

export function DisplaySections() {
  return (
    <>
      <Section name="Card">
        <Example title="Sizes" description="size: default, sm" layout="grid">
          {(["default", "sm"] as const).map((size) => (
            <Card key={size} size={size}>
              <CardHeader>
                <CardTitle>Size: {size}</CardTitle>
                <CardDescription>Header, content and footer slots.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Cards group related information on BOF screens.</p>
              </CardContent>
              <CardFooter>
                <Button size="sm">Action</Button>
              </CardFooter>
            </Card>
          ))}
        </Example>
        <Example title="With action" description="CardAction sits top-right" layout="grid">
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
                <Badge variant="secondary">+12.5%</Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className="text-xs text-muted-foreground">
              Compared with last month
            </CardFooter>
          </Card>
        </Example>
      </Section>

      <Section name="Badge">
        <Example title="Variants" description="variant prop">
          {(["default", "secondary", "outline", "destructive", "ghost", "link"] as const).map(
            (variant) => (
              <Badge key={variant} variant={variant}>
                {variant}
              </Badge>
            ),
          )}
        </Example>
        <Example title="With icon" description="Icons inside a badge">
          <Badge variant="secondary">
            <HugeiconsIcon icon={CheckmarkCircle02Icon} strokeWidth={2} data-icon="inline-start" />
            Verified
          </Badge>
          <Badge variant="outline">
            <HugeiconsIcon icon={Clock01Icon} strokeWidth={2} data-icon="inline-start" />
            Pending
          </Badge>
          <Badge className="min-w-5 rounded-full px-1 tabular-nums">8</Badge>
        </Example>
      </Section>

      <Section name="Avatar">
        <Example title="Sizes" description="size: sm, default, lg — fallback shows when the image fails">
          {(["sm", "default", "lg"] as const).map((size) => (
            <Avatar key={size} size={size}>
              <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          ))}
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>AD</AvatarFallback>
            <AvatarBadge />
          </Avatar>
        </Example>
        <Example title="Group" description="AvatarGroup + AvatarGroupCount">
          <AvatarGroup>
            {["JD", "AK", "PS", "MT"].map((initials) => (
              <Avatar key={initials}>
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
            ))}
            <AvatarGroupCount>+5</AvatarGroupCount>
          </AvatarGroup>
        </Example>
      </Section>

      <Section name="Table">
        <Example title="Invoices" description="Header, body, footer and caption" layout="stack">
          <Table>
            <TableCaption>Recent invoices (mock data)</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-medium">{invoice.id}</TableCell>
                  <TableCell>{invoice.customer}</TableCell>
                  <TableCell>
                    <Badge variant={statusVariant[invoice.status as keyof typeof statusVariant]}>
                      {invoice.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right tabular-nums">
                    {baht.format(invoice.amount)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right tabular-nums">
                  {baht.format(invoices.reduce((sum, i) => sum + i.amount, 0))}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </Example>
      </Section>

      <Section name="Item">
        <Example title="Variants" description="variant: default, outline, muted" layout="stack">
          <Item variant="outline">
            <ItemMedia variant="icon">
              <HugeiconsIcon icon={ShieldUserIcon} strokeWidth={2} />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Two-factor authentication</ItemTitle>
              <ItemDescription>Require a code from an authenticator app at sign-in.</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button size="sm" variant="outline">
                Enable
              </Button>
            </ItemActions>
          </Item>
          <Item variant="muted" size="sm">
            <ItemMedia variant="icon">
              <HugeiconsIcon icon={File01Icon} strokeWidth={2} />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Quarterly report.pdf</ItemTitle>
            </ItemContent>
            <ItemActions>
              <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-4" />
            </ItemActions>
          </Item>
        </Example>
        <Example title="Group" description="ItemGroup + ItemSeparator" layout="stack">
          <ItemGroup className="rounded-lg border">
            {[
              ["Jane Doe", "jane@bof.test", "JD"],
              ["Arun K.", "arun@bof.test", "AK"],
            ].map(([name, email, initials], index) => (
              <div key={email}>
                {index > 0 ? <ItemSeparator /> : null}
                <Item>
                  <ItemMedia>
                    <Avatar>
                      <AvatarFallback>{initials}</AvatarFallback>
                    </Avatar>
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>{name}</ItemTitle>
                    <ItemDescription>{email}</ItemDescription>
                  </ItemContent>
                  <ItemActions>
                    <Button size="icon-sm" variant="ghost" aria-label="Invite">
                      <HugeiconsIcon icon={Add01Icon} strokeWidth={2} />
                    </Button>
                  </ItemActions>
                </Item>
              </div>
            ))}
          </ItemGroup>
        </Example>
      </Section>

      <Section name="Empty">
        <Example title="No data" description="EmptyMedia variant icon" layout="stack">
          <Empty className="border border-dashed">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <HugeiconsIcon icon={Folder01Icon} strokeWidth={2} />
              </EmptyMedia>
              <EmptyTitle>No projects yet</EmptyTitle>
              <EmptyDescription>
                Create your first project to start tracking orders.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <div className="flex gap-2">
                <Button>Create project</Button>
                <Button variant="outline">Import</Button>
              </div>
            </EmptyContent>
          </Empty>
        </Example>
      </Section>

      <Section name="Kbd">
        <Example title="Keys and groups" description="Kbd and KbdGroup">
          <Kbd>Esc</Kbd>
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <span>+</span>
            <Kbd>Shift</Kbd>
            <span>+</span>
            <Kbd>P</Kbd>
          </KbdGroup>
        </Example>
      </Section>

      <Section name="Marker">
        <Example title="Variants" description="variant: default, separator, border" layout="stack">
          <Marker>
            <MarkerIcon>
              <HugeiconsIcon icon={UserIcon} strokeWidth={2} />
            </MarkerIcon>
            <MarkerContent>Jane Doe joined the workspace</MarkerContent>
          </Marker>
          <Marker variant="separator">
            <MarkerContent>Today</MarkerContent>
          </Marker>
          <Marker variant="border">
            <MarkerContent>Unread messages</MarkerContent>
          </Marker>
        </Example>
      </Section>

      <Section name="Separator">
        <Example title="Orientation" description="horizontal and vertical" layout="stack">
          <div className="flex max-w-sm flex-col gap-3">
            <div>
              <p className="text-sm font-medium">Back Office</p>
              <p className="text-xs text-muted-foreground">Admin console</p>
            </div>
            <Separator />
            <div className="flex h-5 items-center gap-3 text-sm">
              <span>Orders</span>
              <Separator orientation="vertical" />
              <span>Customers</span>
              <Separator orientation="vertical" />
              <span>Reports</span>
            </div>
          </div>
        </Example>
      </Section>

      <Section name="AspectRatio">
        <Example title="Ratios" description="ratio={16 / 9} and ratio={1}" layout="grid">
          <AspectRatio ratio={16 / 9} className="rounded-lg bg-muted">
            <div className="flex size-full items-center justify-center text-sm text-muted-foreground">
              16 : 9
            </div>
          </AspectRatio>
          <div className="w-40">
            <AspectRatio ratio={1} className="rounded-lg bg-primary/10">
              <div className="flex size-full items-center justify-center text-sm text-primary">
                1 : 1
              </div>
            </AspectRatio>
          </div>
        </Example>
      </Section>

      <Section name="Chart">
        <Example title="Bar and area" description="Colors come from --chart-* tokens via ChartConfig" layout="grid">
          <ChartContainer config={chartConfig} className="h-60 w-full">
            <BarChart accessibilityLayer data={revenue}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="online" fill="var(--color-online)" radius={4} />
              <Bar dataKey="branch" fill="var(--color-branch)" radius={4} />
            </BarChart>
          </ChartContainer>
          <ChartContainer config={chartConfig} className="h-60 w-full">
            <AreaChart accessibilityLayer data={revenue}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
              <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
              <Area
                dataKey="branch"
                type="natural"
                fill="var(--color-branch)"
                fillOpacity={0.4}
                stroke="var(--color-branch)"
                stackId="a"
              />
              <Area
                dataKey="online"
                type="natural"
                fill="var(--color-online)"
                fillOpacity={0.4}
                stroke="var(--color-online)"
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </Example>
      </Section>

      <Section name="Carousel">
        <Example title="Default" description="Arrow buttons or ←/→ keys">
          <Carousel className="mx-12 w-full max-w-xs">
            <CarouselContent>
              {[1, 2, 3, 4, 5].map((n) => (
                <CarouselItem key={n}>
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center">
                      <span className="text-4xl font-semibold">{n}</span>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Example>
      </Section>

      <Section name="CodeBlock">
        <Example title="With line numbers" description="Header, title and copy button" layout="stack">
          <CodeBlock>
            <CodeBlockHeader>
              <CodeBlockTitle>validate.ts</CodeBlockTitle>
              <CodeBlockActions>
                <CodeBlockCopyButton value={loginCode} />
              </CodeBlockActions>
            </CodeBlockHeader>
            <CodeBlockContent lineNumbers>{loginCode}</CodeBlockContent>
          </CodeBlock>
        </Example>
        <Example title="Diff" description="CodeBlockLine variant: added, removed, highlighted" layout="stack">
          <CodeBlock size="sm">
            <CodeBlockContent>
              <CodeBlockLine>{"const session = getSession()"}</CodeBlockLine>
              <CodeBlockLine variant="removed">{'if (!session) redirect("/")'}</CodeBlockLine>
              <CodeBlockLine variant="added">{'if (!session) redirect("/login")'}</CodeBlockLine>
              <CodeBlockLine variant="highlighted">{"return <Dashboard user={session.user} />"}</CodeBlockLine>
            </CodeBlockContent>
          </CodeBlock>
        </Example>
      </Section>
    </>
  );
}
