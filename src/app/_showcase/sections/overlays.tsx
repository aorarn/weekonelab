"use client";

import * as React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Calendar03Icon,
  Delete02Icon,
  DashboardSquare01Icon,
  Invoice01Icon,
  Settings02Icon,
  UserIcon,
} from "@hugeicons/core-free-icons";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/AlertDialog";
import { Button } from "@/components/ui/Button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/Command";
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
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/Drawer";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/Field";
import { Input } from "@/components/ui/Input";
import { Kbd, KbdGroup } from "@/components/ui/Kbd";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/Sheet";

import { Example, Section } from "../primitives";

function CommandItems() {
  return (
    <>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Pages">
        <CommandItem>
          <HugeiconsIcon icon={DashboardSquare01Icon} strokeWidth={2} />
          Dashboard
        </CommandItem>
        <CommandItem>
          <HugeiconsIcon icon={Invoice01Icon} strokeWidth={2} />
          Invoices
        </CommandItem>
        <CommandItem>
          <HugeiconsIcon icon={Calendar03Icon} strokeWidth={2} />
          Calendar
        </CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="Settings">
        <CommandItem>
          <HugeiconsIcon icon={UserIcon} strokeWidth={2} />
          Profile
          <CommandShortcut>⌘P</CommandShortcut>
        </CommandItem>
        <CommandItem>
          <HugeiconsIcon icon={Settings02Icon} strokeWidth={2} />
          Settings
          <CommandShortcut>⌘S</CommandShortcut>
        </CommandItem>
      </CommandGroup>
    </>
  );
}

function CommandDemos() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "j" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen((value) => !value);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <Example title="Inline" description="Command, CommandInput, CommandList" layout="stack">
        <Command className="max-w-md rounded-lg border">
          <CommandInput placeholder="Type a command or search…" />
          <CommandList>
            <CommandItems />
          </CommandList>
        </Command>
      </Example>
      <Example title="Dialog" description="CommandDialog — also opens with ⌘J / Ctrl+J">
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open palette
          <KbdGroup data-icon="inline-end">
            <Kbd>⌘</Kbd>
            <Kbd>J</Kbd>
          </KbdGroup>
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <Command>
            <CommandInput placeholder="Type a command or search…" />
            <CommandList>
              <CommandItems />
            </CommandList>
          </Command>
        </CommandDialog>
      </Example>
    </>
  );
}

export function OverlaysSections() {
  return (
    <>
      <Section name="Dialog">
        <Example title="Sizes" description="DialogContent size: sm, md, lg, xl">
          {(["sm", "md", "lg", "xl"] as const).map((size) => (
            <Dialog key={size}>
              <DialogTrigger render={<Button variant="outline" />}>Open {size}</DialogTrigger>
              <DialogContent size={size}>
                <DialogHeader>
                  <DialogTitle>Archive account</DialogTitle>
                  <DialogDescription>
                    Archived accounts can be restored from Settings later.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter showCloseButton>
                  <Button>Archive</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ))}
        </Example>
        <Example title="With form" description="DialogClose renders any element as a close control">
          <Dialog>
            <DialogTrigger render={<Button />}>Edit profile</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>Changes are saved to the mock session only.</DialogDescription>
              </DialogHeader>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="dialog-name">Name</FieldLabel>
                  <Input id="dialog-name" defaultValue="Jane Doe" />
                </Field>
                <Field>
                  <FieldLabel htmlFor="dialog-email">Email</FieldLabel>
                  <Input id="dialog-email" defaultValue="jane@bof.test" />
                </Field>
              </FieldGroup>
              <DialogFooter>
                <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
                <DialogClose render={<Button />}>Save changes</DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Example>
      </Section>

      <Section name="AlertDialog">
        <Example title="Sizes" description="AlertDialogContent size: default, sm">
          <AlertDialog>
            <AlertDialogTrigger render={<Button variant="outline" />}>Sign out</AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Sign out of Back Office?</AlertDialogTitle>
                <AlertDialogDescription>
                  Unsaved changes in open forms will be lost.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogCancel variant="default">Sign out</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <AlertDialog>
            <AlertDialogTrigger render={<Button variant="destructive" />}>
              Delete invoice
            </AlertDialogTrigger>
            <AlertDialogContent size="sm">
              <AlertDialogHeader>
                <AlertDialogMedia className="bg-destructive/10 text-destructive">
                  <HugeiconsIcon icon={Delete02Icon} strokeWidth={2} />
                </AlertDialogMedia>
                <AlertDialogTitle>Delete INV-1044?</AlertDialogTitle>
                <AlertDialogDescription>This cannot be undone.</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </Example>
      </Section>

      <Section name="Sheet">
        <Example title="Sides" description="SheetContent side: top, right, bottom, left">
          {(["top", "right", "bottom", "left"] as const).map((side) => (
            <Sheet key={side}>
              <SheetTrigger render={<Button variant="outline" />}>{side}</SheetTrigger>
              <SheetContent side={side}>
                <SheetHeader>
                  <SheetTitle>Filter orders</SheetTitle>
                  <SheetDescription>Narrow the order list by customer or date.</SheetDescription>
                </SheetHeader>
                <div className="px-4">
                  <Field>
                    <FieldLabel htmlFor={`sheet-customer-${side}`}>Customer</FieldLabel>
                    <Input id={`sheet-customer-${side}`} placeholder="Acme Co." />
                  </Field>
                </div>
                <SheetFooter>
                  <SheetClose render={<Button />}>Apply filters</SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          ))}
        </Example>
      </Section>

      <Section name="Drawer">
        <Example title="Bottom drawer" description="Swipe down or press Esc to close">
          <Drawer>
            <DrawerTrigger render={<Button variant="outline" />}>Open drawer</DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle>Daily target</DrawerTitle>
                  <DrawerDescription>Set how many orders the team should close today.</DrawerDescription>
                </DrawerHeader>
                <div className="flex items-center justify-center p-4">
                  <span className="text-6xl font-semibold tabular-nums">350</span>
                </div>
                <DrawerFooter>
                  <DrawerClose render={<Button />}>Save target</DrawerClose>
                  <DrawerClose render={<Button variant="outline" />}>Cancel</DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
          <Drawer swipeDirection="right">
            <DrawerTrigger render={<Button variant="outline" />}>From the right</DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Activity</DrawerTitle>
                <DrawerDescription>swipeDirection=&quot;right&quot;</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose render={<Button variant="outline" />}>Close</DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Example>
      </Section>

      <Section name="Command">
        <CommandDemos />
      </Section>
    </>
  );
}
