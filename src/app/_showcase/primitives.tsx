import { toId } from "./registry";

/** One component's block: anchor, name and import line, then examples. */
export function Section({
  name,
  note,
  children,
}: {
  name: string;
  note?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={toId(name)} className="flex scroll-mt-8 flex-col gap-4">
      <div className="flex flex-col gap-1 border-b border-border pb-3">
        <h3 className="text-xl font-semibold tracking-tight">{name}</h3>
        <code className="font-mono text-xs text-muted-foreground">
          import {"{ "}
          {name}
          {" }"} from &quot;@/components/ui/{name}&quot;
        </code>
        {note ? (
          <p className="text-xs text-muted-foreground">{note}</p>
        ) : null}
      </div>
      <div className="flex flex-col gap-4">{children}</div>
    </section>
  );
}

/** A bordered demo box. `layout` picks how the children are arranged. */
export function Example({
  title,
  description,
  children,
  layout = "row",
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  layout?: "row" | "grid" | "stack";
}) {
  const layoutClass = {
    row: "flex flex-wrap items-center gap-2",
    grid: "grid gap-4 sm:grid-cols-2",
    stack: "flex flex-col gap-4",
  }[layout];

  return (
    <div className="flex min-w-0 flex-col gap-3 rounded-lg border border-border p-5">
      <div>
        <h4 className="text-sm font-semibold">{title}</h4>
        {description ? (
          <p className="text-xs text-muted-foreground">{description}</p>
        ) : null}
      </div>
      <div className={layoutClass}>{children}</div>
    </div>
  );
}
