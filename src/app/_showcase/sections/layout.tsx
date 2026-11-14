"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpDownIcon } from "@hugeicons/core-free-icons";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/Collapsible";
import { DirectionProvider } from "@/components/ui/Direction";
import { Field, FieldLabel } from "@/components/ui/Field";
import { Input } from "@/components/ui/Input";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/Resizable";
import { ScrollArea, ScrollBar } from "@/components/ui/ScrollArea";
import { Separator } from "@/components/ui/Separator";
import { Slider } from "@/components/ui/Slider";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/Tabs";

import { Example, Section } from "../primitives";

const faqs = [
  {
    value: "reset",
    question: "How do I reset a user's password?",
    answer: "Open the user's account details and choose Send reset link.",
  },
  {
    value: "export",
    question: "Can I export orders to CSV?",
    answer: "Yes — use File → Export on the Orders screen.",
  },
  {
    value: "roles",
    question: "What can a Viewer change?",
    answer: "Nothing. Viewers have read-only access to every screen.",
  },
];

const auditLog = Array.from({ length: 30 }, (_, i) => `v1.${30 - i}.0 — release notes`);
const branches = ["Bangkok", "Chiang Mai", "Phuket", "Khon Kaen", "Hat Yai", "Pattaya", "Udon Thani"];

export function LayoutSections() {
  return (
    <>
      <Section name="Accordion">
        <Example title="FAQ" description="defaultValue opens items; multiple allows several" layout="stack">
          <Accordion defaultValue={["reset"]} className="max-w-lg">
            {faqs.map((faq) => (
              <AccordionItem key={faq.value} value={faq.value}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Example>
      </Section>

      <Section name="Collapsible">
        <Example title="Show more" description="CollapsibleTrigger toggles CollapsibleContent" layout="stack">
          <Collapsible className="flex max-w-sm flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold">3 linked accounts</span>
              <CollapsibleTrigger render={<Button variant="ghost" size="icon-sm" aria-label="Toggle" />}>
                <HugeiconsIcon icon={ArrowUpDownIcon} strokeWidth={2} />
              </CollapsibleTrigger>
            </div>
            <div className="rounded-md border px-3 py-2 text-sm">jane@bof.test</div>
            <CollapsibleContent className="flex flex-col gap-2">
              <div className="rounded-md border px-3 py-2 text-sm">jane.doe@acme.co</div>
              <div className="rounded-md border px-3 py-2 text-sm">finance@acme.co</div>
            </CollapsibleContent>
          </Collapsible>
        </Example>
      </Section>

      <Section name="Resizable">
        <Example title="Panels" description="Drag the handles" layout="stack">
          <ResizablePanelGroup orientation="horizontal" className="min-h-56 rounded-lg border">
            <ResizablePanel defaultSize="30%">
              <div className="flex h-full items-center justify-center p-4 text-sm">Sidebar</div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize="70%">
              <ResizablePanelGroup orientation="vertical">
                <ResizablePanel defaultSize="60%">
                  <div className="flex h-full items-center justify-center p-4 text-sm">Content</div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize="40%">
                  <div className="flex h-full items-center justify-center p-4 text-sm">Console</div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>
        </Example>
      </Section>

      <Section name="ScrollArea">
        <Example title="Vertical and horizontal" description="ScrollBar orientation" layout="row">
          <ScrollArea className="h-56 w-56 rounded-md border">
            <div className="p-4">
              <h4 className="mb-3 text-sm font-medium">Releases</h4>
              {auditLog.map((entry) => (
                <div key={entry}>
                  <div className="text-sm">{entry}</div>
                  <Separator className="my-2" />
                </div>
              ))}
            </div>
          </ScrollArea>
          <ScrollArea className="w-72 rounded-md border whitespace-nowrap">
            <div className="flex w-max gap-3 p-4">
              {branches.map((branch) => (
                <div
                  key={branch}
                  className="flex h-24 w-32 items-center justify-center rounded-md bg-muted text-sm"
                >
                  {branch}
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </Example>
      </Section>

      <Section
        name="Direction"
        note={
          <>
            Exports <code className="font-mono">DirectionProvider</code> and{" "}
            <code className="font-mono">useDirection</code>. Pair it with{" "}
            <code className="font-mono">dir=&quot;rtl&quot;</code> on the container.
          </>
        }
      >
        <Example title="Right-to-left" description='direction="rtl" flips sliders, tabs and layout' layout="stack">
          <DirectionProvider direction="rtl">
            <div dir="rtl" className="flex max-w-sm flex-col gap-4">
              <Tabs defaultValue="a">
                <TabsList>
                  <TabsTrigger value="a">الحساب</TabsTrigger>
                  <TabsTrigger value="b">الفواتير</TabsTrigger>
                  <TabsTrigger value="c">الإعدادات</TabsTrigger>
                </TabsList>
              </Tabs>
              <Field>
                <FieldLabel htmlFor="rtl-name">الاسم</FieldLabel>
                <Input id="rtl-name" placeholder="جين دو" />
              </Field>
              <Slider defaultValue={[30]} />
            </div>
          </DirectionProvider>
        </Example>
      </Section>
    </>
  );
}
