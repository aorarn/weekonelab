import { Toaster } from "@/components/ui/Toast";
import { TooltipProvider } from "@/components/ui/Tooltip";

import { componentCount, groups, toId } from "./_showcase/registry";
import { ActionsSections } from "./_showcase/sections/actions";
import { ConversationSections } from "./_showcase/sections/conversation";
import { DisplaySections } from "./_showcase/sections/display";
import { FeedbackSections } from "./_showcase/sections/feedback";
import { FormsSections } from "./_showcase/sections/forms";
import { LayoutSections } from "./_showcase/sections/layout";
import { NavigationSections } from "./_showcase/sections/navigation";
import { OverlaysSections } from "./_showcase/sections/overlays";

const groupSections: Record<string, React.ComponentType> = {
  actions: ActionsSections,
  forms: FormsSections,
  "data-display": DisplaySections,
  feedback: FeedbackSections,
  overlays: OverlaysSections,
  navigation: NavigationSections,
  layout: LayoutSections,
  conversation: ConversationSections,
};

export default function ComponentShowcase() {
  return (
    <TooltipProvider>
      <div className="mx-auto flex w-full max-w-6xl flex-1 gap-10 px-4 py-12 sm:px-8">
        <aside className="sticky top-8 hidden max-h-[calc(100svh-4rem)] w-52 shrink-0 flex-col gap-4 overflow-y-auto pb-8 md:flex">
          {groups.map((group) => (
            <nav key={group.id} className="flex flex-col gap-0.5">
              <a
                href={`#${group.id}`}
                className="px-2 pb-1 text-xs font-medium tracking-wide text-muted-foreground uppercase hover:text-foreground"
              >
                {group.title}
              </a>
              {group.entries.map((entry) => (
                <a
                  key={entry.name}
                  href={`#${toId(entry.name)}`}
                  className="rounded-md px-2 py-1 text-sm hover:bg-muted"
                >
                  {entry.name}
                </a>
              ))}
            </nav>
          ))}
        </aside>

        <main className="flex min-w-0 flex-1 flex-col gap-16">
          <header className="flex flex-col gap-2">
            <h1 className="text-3xl font-semibold tracking-tight">Design System</h1>
            <p className="text-sm text-muted-foreground">
              {componentCount} components in{" "}
              <code className="font-mono">src/components/ui</code> · shadcn/ui base-vega · Base UI ·
              Hugeicons
            </p>
            <div className="mt-4 flex flex-col gap-6">
              {groups.map((group) => (
                <div key={group.id} className="flex flex-col gap-2">
                  <h2 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    {group.title}
                  </h2>
                  <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                    {group.entries.map((entry) => (
                      <a
                        key={entry.name}
                        href={`#${toId(entry.name)}`}
                        className="flex flex-col gap-0.5 rounded-lg border border-border px-3 py-2 transition-colors hover:bg-muted/50"
                      >
                        <span className="text-sm font-medium">{entry.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {entry.description}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </header>

          {groups.map((group) => {
            const Sections = groupSections[group.id];
            return (
              <div key={group.id} className="flex flex-col gap-12">
                <h2
                  id={group.id}
                  className="scroll-mt-8 border-b-2 border-foreground pb-2 text-2xl font-semibold tracking-tight"
                >
                  {group.title}
                </h2>
                <Sections />
              </div>
            );
          })}
        </main>
      </div>
      <Toaster />
    </TooltipProvider>
  );
}
