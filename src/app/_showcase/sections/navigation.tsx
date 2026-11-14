"use client";

import * as React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  DashboardSquare01Icon,
  Invoice01Icon,
  Logout01Icon,
  MoreHorizontalIcon,
  Settings02Icon,
  ShoppingBag01Icon,
  UserGroupIcon,
  UserIcon,
} from "@hugeicons/core-free-icons";

import { Avatar, AvatarFallback } from "@/components/ui/Avatar";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/ContextMenu";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/Menubar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/NavigationMenu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/Pagination";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
} from "@/components/ui/Sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";

import { Example, Section } from "../primitives";

const reportLinks = [
  { title: "Sales", description: "Revenue by channel and branch." },
  { title: "Customers", description: "New, active and churned accounts." },
  { title: "Inventory", description: "Stock levels and reorder alerts." },
  { title: "Audit log", description: "Who changed what, and when." },
];

function DropdownMenuDemo() {
  const [showStatus, setShowStatus] = React.useState(true);
  const [density, setDensity] = React.useState("comfortable");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        <Avatar size="sm">
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        Jane Doe
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuLabel>My account</DropdownMenuLabel>
          <DropdownMenuItem>
            <HugeiconsIcon icon={UserIcon} strokeWidth={2} />
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <HugeiconsIcon icon={Settings02Icon} strokeWidth={2} />
            Settings
            <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <HugeiconsIcon icon={UserGroupIcon} strokeWidth={2} />
              Switch team
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Finance</DropdownMenuItem>
              <DropdownMenuItem>Operations</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>View</DropdownMenuLabel>
          <DropdownMenuCheckboxItem checked={showStatus} onCheckedChange={setShowStatus}>
            Show status bar
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={density} onValueChange={setDensity}>
          <DropdownMenuLabel>Density</DropdownMenuLabel>
          <DropdownMenuRadioItem value="comfortable">Comfortable</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="compact">Compact</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <HugeiconsIcon icon={Logout01Icon} strokeWidth={2} />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function SidebarDemo() {
  const [active, setActive] = React.useState("Dashboard");
  const items = [
    { title: "Dashboard", icon: DashboardSquare01Icon },
    { title: "Orders", icon: ShoppingBag01Icon, badge: "12" },
    { title: "Invoices", icon: Invoice01Icon },
    { title: "Customers", icon: UserGroupIcon },
  ];

  return (
    <SidebarProvider className="h-[420px] min-h-0 overflow-hidden rounded-lg border">
      <Sidebar collapsible="none">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg">
                <div className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <HugeiconsIcon icon={DashboardSquare01Icon} strokeWidth={2} className="size-4" />
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <span className="font-semibold">Back Office</span>
                  <span className="text-xs text-muted-foreground">Acme Co.</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Workspace</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      isActive={active === item.title}
                      onClick={() => setActive(item.title)}
                    >
                      <HugeiconsIcon icon={item.icon} strokeWidth={2} />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                    {item.badge ? <SidebarMenuBadge>{item.badge}</SidebarMenuBadge> : null}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Settings</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <HugeiconsIcon icon={Settings02Icon} strokeWidth={2} />
                    <span>Account</span>
                  </SidebarMenuButton>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton href="#sidebar" isActive>
                        Profile
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton href="#sidebar">Security</SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Avatar size="sm">
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span>Jane Doe</span>
                <HugeiconsIcon icon={MoreHorizontalIcon} strokeWidth={2} className="ml-auto" />
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset className="p-6">
        <h4 className="text-lg font-semibold">{active}</h4>
        <p className="text-sm text-muted-foreground">
          Page content sits in SidebarInset.
        </p>
      </SidebarInset>
    </SidebarProvider>
  );
}

export function NavigationSections() {
  return (
    <>
      <Section name="DropdownMenu">
        <Example title="Account menu" description="Items, shortcuts, submenu, checkbox and radio items">
          <DropdownMenuDemo />
        </Example>
      </Section>

      <Section name="ContextMenu">
        <Example title="Right-click area" description="Right-click (or long-press) inside the box" layout="stack">
          <ContextMenu>
            <ContextMenuTrigger className="flex h-36 items-center justify-center rounded-lg border border-dashed text-sm text-muted-foreground">
              Right-click here
            </ContextMenuTrigger>
            <ContextMenuContent className="w-52">
              <ContextMenuGroup>
                <ContextMenuLabel>Order INV-1042</ContextMenuLabel>
                <ContextMenuItem>
                  Open
                  <ContextMenuShortcut>↵</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  Duplicate
                  <ContextMenuShortcut>⌘D</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSub>
                  <ContextMenuSubTrigger>Move to</ContextMenuSubTrigger>
                  <ContextMenuSubContent>
                    <ContextMenuItem>Pending</ContextMenuItem>
                    <ContextMenuItem>Archived</ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuCheckboxItem defaultChecked>Pin to top</ContextMenuCheckboxItem>
              <ContextMenuSeparator />
              <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </Example>
      </Section>

      <Section name="Menubar">
        <Example title="App menu" description="MenubarMenu per top-level item">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarGroup>
                  <MenubarItem>
                    New order <MenubarShortcut>⌘N</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Import CSV <MenubarShortcut>⌘I</MenubarShortcut>
                  </MenubarItem>
                </MenubarGroup>
                <MenubarSeparator />
                <MenubarItem>Print</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>View</MenubarTrigger>
              <MenubarContent>
                <MenubarCheckboxItem defaultChecked>Show sidebar</MenubarCheckboxItem>
                <MenubarCheckboxItem>Show status bar</MenubarCheckboxItem>
                <MenubarSeparator />
                <MenubarRadioGroup defaultValue="table">
                  <MenubarRadioItem value="table">Table</MenubarRadioItem>
                  <MenubarRadioItem value="board">Board</MenubarRadioItem>
                </MenubarRadioGroup>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Help</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Documentation</MenubarItem>
                <MenubarItem>Contact support</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </Example>
      </Section>

      <Section name="NavigationMenu">
        <Example title="With flyout" description="Hover or focus Reports">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Reports</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[420px] grid-cols-2 gap-1 p-1">
                    {reportLinks.map((link) => (
                      <li key={link.title}>
                        <NavigationMenuLink href="#navigation-menu">
                          <div className="flex flex-col gap-1">
                            <span className="text-sm font-medium">{link.title}</span>
                            <span className="text-xs text-muted-foreground">
                              {link.description}
                            </span>
                          </div>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#navigation-menu" className={navigationMenuTriggerStyle()}>
                  Orders
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#navigation-menu" className={navigationMenuTriggerStyle()}>
                  Customers
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </Example>
      </Section>

      <Section name="Breadcrumb">
        <Example title="Default" description="Links, ellipsis and current page">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#breadcrumb">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbEllipsis />
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#breadcrumb">Customers</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Account details</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Example>
      </Section>

      <Section name="Pagination">
        <Example title="Default" description="isActive marks the current page">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#pagination" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pagination">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pagination" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pagination">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#pagination" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </Example>
      </Section>

      <Section name="Tabs">
        <Example title="Variants" description="TabsList variant: default, line" layout="stack">
          {(["default", "line"] as const).map((variant) => (
            <Tabs key={variant} defaultValue="overview" className="max-w-md">
              <TabsList variant={variant}>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <Card size="sm">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                    <CardDescription>variant=&quot;{variant}&quot;</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm">42 open orders this week.</CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="orders" className="text-sm text-muted-foreground">
                Orders table goes here.
              </TabsContent>
              <TabsContent value="settings" className="text-sm text-muted-foreground">
                Settings form goes here.
              </TabsContent>
            </Tabs>
          ))}
        </Example>
        <Example title="Vertical" description='orientation="vertical"'>
          <Tabs defaultValue="profile" orientation="vertical">
            <TabsList>
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
            </TabsList>
            <TabsContent value="profile" className="text-sm">Profile settings</TabsContent>
            <TabsContent value="security" className="text-sm">Security settings</TabsContent>
            <TabsContent value="billing" className="text-sm">Billing settings</TabsContent>
          </Tabs>
        </Example>
      </Section>

      <Section
        name="Sidebar"
        note={
          <>
            Shown with <code className="font-mono">collapsible=&quot;none&quot;</code> inside a box. In
            the real app shell use the default offcanvas mode with{" "}
            <code className="font-mono">SidebarTrigger</code>.
          </>
        }
      >
        <Example title="App shell" description="Header, groups, badge, submenu and footer" layout="stack">
          <SidebarDemo />
        </Example>
      </Section>
    </>
  );
}
