"use client";

import * as React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Cancel01Icon,
  CheckmarkCircle02Icon,
  Database01Icon,
  File01Icon,
  Image01Icon,
  Search01Icon,
} from "@hugeicons/core-free-icons";

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/Attachment";
import { Avatar, AvatarFallback } from "@/components/ui/Avatar";
import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
} from "@/components/ui/Bubble";
import { Button } from "@/components/ui/Button";
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
} from "@/components/ui/Message";
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/MessageScroller";
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceDescription,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSkip,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/Questionnaire";
import {
  Trace,
  TraceCollapsible,
  TraceCollapsibleContent,
  TraceCollapsibleTrigger,
  TraceDescription,
  TraceIcon,
  TraceLine,
  TraceTitle,
} from "@/components/ui/Trace";

import { Example, Section } from "../primitives";

const bubbleVariants = [
  "default",
  "secondary",
  "muted",
  "tinted",
  "outline",
  "ghost",
  "destructive",
] as const;

const seedMessages = [
  { id: "1", from: "customer", text: "Hi, my order INV-1043 hasn't arrived yet." },
  { id: "2", from: "agent", text: "Sorry about that! Let me check the shipment." },
  { id: "3", from: "agent", text: "It left the Bangkok hub this morning." },
  { id: "4", from: "customer", text: "Great, when should I expect it?" },
  { id: "5", from: "agent", text: "Tomorrow before 6 PM." },
  { id: "6", from: "customer", text: "Perfect, thank you!" },
];

function MessageScrollerDemo() {
  const [messages, setMessages] = React.useState(seedMessages);

  return (
    <Example title="Chat log" description="Sticks to the bottom; the button appears when scrolled up" layout="stack">
      <MessageScrollerProvider>
        <MessageScroller className="h-72 rounded-lg border">
          <MessageScrollerViewport>
            <MessageScrollerContent className="flex flex-col gap-3 p-4">
              {messages.map((message) => (
                <MessageScrollerItem key={message.id} messageId={message.id}>
                  <Bubble
                    align={message.from === "agent" ? "end" : "start"}
                    variant={message.from === "agent" ? "default" : "muted"}
                  >
                    <BubbleContent>{message.text}</BubbleContent>
                  </Bubble>
                </MessageScrollerItem>
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
      </MessageScrollerProvider>
      <Button
        variant="outline"
        className="self-start"
        onClick={() =>
          setMessages((list) => [
            ...list,
            {
              id: String(list.length + 1),
              from: list.length % 2 ? "agent" : "customer",
              text: `New message #${list.length + 1}`,
            },
          ])
        }
      >
        Add message
      </Button>
    </Example>
  );
}

export function ConversationSections() {
  return (
    <>
      <Section name="Message">
        <Example title="Thread" description='Message align: "start" | "end"' layout="stack">
          <MessageGroup className="max-w-lg">
            <Message>
              <MessageAvatar>
                <Avatar size="sm">
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
              </MessageAvatar>
              <MessageContent>
                <MessageHeader>Acme Co. · 10:24</MessageHeader>
                <Bubble variant="muted">
                  <BubbleContent>Can you resend last month&apos;s invoice?</BubbleContent>
                </Bubble>
              </MessageContent>
            </Message>
            <Message align="end">
              <MessageContent>
                <Bubble>
                  <BubbleContent>Sure — sent to finance@acme.co just now.</BubbleContent>
                </Bubble>
                <MessageFooter>Seen</MessageFooter>
              </MessageContent>
            </Message>
          </MessageGroup>
        </Example>
      </Section>

      <Section name="Bubble">
        <Example title="Variants" description="variant prop" layout="stack">
          <BubbleGroup className="max-w-md">
            {bubbleVariants.map((variant, index) => (
              <Bubble key={variant} variant={variant} align={index % 2 ? "end" : "start"}>
                <BubbleContent>{variant}</BubbleContent>
              </Bubble>
            ))}
          </BubbleGroup>
        </Example>
        <Example title="Reactions" description="BubbleReactions side / align" layout="stack">
          <div className="flex max-w-md flex-col gap-8 py-4">
            <Bubble variant="muted">
              <BubbleContent>Shipment confirmed for tomorrow.</BubbleContent>
              <BubbleReactions>👍 2</BubbleReactions>
            </Bubble>
            <Bubble align="end">
              <BubbleContent>Thanks for the quick reply!</BubbleContent>
              <BubbleReactions align="start">❤️</BubbleReactions>
            </Bubble>
          </div>
        </Example>
      </Section>

      <Section name="MessageScroller">
        <MessageScrollerDemo />
      </Section>

      <Section name="Attachment">
        <Example title="States" description='state: "done" | "uploading" | "processing" | "error"' layout="stack">
          <AttachmentGroup>
            <Attachment>
              <AttachmentMedia>
                <HugeiconsIcon icon={File01Icon} strokeWidth={2} />
              </AttachmentMedia>
              <AttachmentContent>
                <AttachmentTitle>contract.pdf</AttachmentTitle>
                <AttachmentDescription>2.4 MB</AttachmentDescription>
              </AttachmentContent>
              <AttachmentActions>
                <AttachmentAction aria-label="Remove">
                  <HugeiconsIcon icon={Cancel01Icon} strokeWidth={2} />
                </AttachmentAction>
              </AttachmentActions>
            </Attachment>
            <Attachment state="uploading">
              <AttachmentMedia>
                <HugeiconsIcon icon={Image01Icon} strokeWidth={2} />
              </AttachmentMedia>
              <AttachmentContent>
                <AttachmentTitle>receipt.png</AttachmentTitle>
                <AttachmentDescription>Uploading… 45%</AttachmentDescription>
              </AttachmentContent>
            </Attachment>
            <Attachment state="error">
              <AttachmentMedia>
                <HugeiconsIcon icon={File01Icon} strokeWidth={2} />
              </AttachmentMedia>
              <AttachmentContent>
                <AttachmentTitle>backup.zip</AttachmentTitle>
                <AttachmentDescription>File too large</AttachmentDescription>
              </AttachmentContent>
            </Attachment>
          </AttachmentGroup>
        </Example>
        <Example title="Sizes" description="size: default, sm, xs" layout="row">
          {(["default", "sm", "xs"] as const).map((size) => (
            <Attachment key={size} size={size}>
              <AttachmentMedia>
                <HugeiconsIcon icon={File01Icon} strokeWidth={2} />
              </AttachmentMedia>
              <AttachmentContent>
                <AttachmentTitle>report-{size}.pdf</AttachmentTitle>
              </AttachmentContent>
            </Attachment>
          ))}
        </Example>
      </Section>

      <Section name="Trace">
        <Example title="Agent steps" description='TraceLine status: "running" | "error" | "pending"' layout="stack">
          <Trace className="max-w-md">
            <div>
              <TraceLine>
                <TraceIcon>
                  <HugeiconsIcon icon={CheckmarkCircle02Icon} strokeWidth={2} />
                </TraceIcon>
                <TraceTitle>Looked up customer Acme Co.</TraceTitle>
                <TraceDescription>0.4s</TraceDescription>
              </TraceLine>
            </div>
            <TraceCollapsible>
              <TraceCollapsibleTrigger>
                <TraceLine>
                  <TraceIcon>
                    <HugeiconsIcon icon={Database01Icon} strokeWidth={2} />
                  </TraceIcon>
                  <TraceTitle>Queried 3 invoices</TraceTitle>
                  <TraceDescription>1.2s</TraceDescription>
                </TraceLine>
              </TraceCollapsibleTrigger>
              <TraceCollapsibleContent>
                INV-1042 (paid), INV-1043 (pending), INV-1044 (overdue)
              </TraceCollapsibleContent>
            </TraceCollapsible>
            <div>
              <TraceLine status="running">
                <TraceIcon>
                  <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
                </TraceIcon>
                <TraceTitle>Checking shipment status…</TraceTitle>
              </TraceLine>
            </div>
            <div>
              <TraceLine status="error">
                <TraceIcon>
                  <HugeiconsIcon icon={Cancel01Icon} strokeWidth={2} />
                </TraceIcon>
                <TraceTitle>Carrier API timed out</TraceTitle>
              </TraceLine>
            </div>
            <div>
              <TraceLine status="pending">
                <TraceTitle>Draft reply to customer</TraceTitle>
              </TraceLine>
            </div>
          </Trace>
        </Example>
      </Section>

      <Section name="Questionnaire">
        <Example title="Onboarding survey" description="One question per step; A/B/C keyboard shortcuts" layout="stack">
          <Questionnaire
            shortcuts="letters"
            className="max-w-lg"
            onSubmit={(event) => event.preventDefault()}
          >
            <QuestionnaireProgress />
            <QuestionnaireItem name="role" required>
              <QuestionnaireTitle>What is your role?</QuestionnaireTitle>
              <QuestionnaireDescription>We tailor the dashboard to it.</QuestionnaireDescription>
              <QuestionnaireChoices>
                <QuestionnaireChoice value="admin">
                  Administrator
                  <QuestionnaireChoiceDescription>Full access</QuestionnaireChoiceDescription>
                </QuestionnaireChoice>
                <QuestionnaireChoice value="manager">Manager</QuestionnaireChoice>
                <QuestionnaireChoice value="support">Support agent</QuestionnaireChoice>
              </QuestionnaireChoices>
              <QuestionnaireError>Pick a role to continue.</QuestionnaireError>
            </QuestionnaireItem>
            <QuestionnaireItem name="tools" multiple>
              <QuestionnaireTitle>Which modules will you use?</QuestionnaireTitle>
              <QuestionnaireChoices>
                <QuestionnaireChoice value="orders">Orders</QuestionnaireChoice>
                <QuestionnaireChoice value="invoices">Invoices</QuestionnaireChoice>
                <QuestionnaireChoice value="reports">Reports</QuestionnaireChoice>
              </QuestionnaireChoices>
            </QuestionnaireItem>
            <QuestionnaireItem name="company">
              <QuestionnaireTitle>Company name</QuestionnaireTitle>
              <QuestionnaireInput placeholder="Acme Co." />
            </QuestionnaireItem>
            <QuestionnaireActions>
              <QuestionnairePrevious />
              <QuestionnaireSkip />
              <QuestionnaireNext />
              <QuestionnaireSubmit />
            </QuestionnaireActions>
          </Questionnaire>
        </Example>
      </Section>
    </>
  );
}
