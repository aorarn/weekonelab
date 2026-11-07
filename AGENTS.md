<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->


# Project overview

Prototype for building a **custom design system on top of shadcn/ui**, demonstrated through a mocked **Back Office (BOF) dashboard** with Login, Register, Account details and similar screens. Frontend only — there is no backend.

## Commands

```bash
npm run dev      # dev server on http://localhost:3000 (Turbopack)
npm run build    # production build — also the type-check gate
npm run lint     # ESLint (flat config, next core-web-vitals + typescript)
npx shadcn@latest add <component>   # add a shadcn component into src/components/ui
```

There is no test runner configured.

## Stack (non-default choices to be aware of)

- **Next.js 16 App Router** under `src/app/`, with `cacheComponents: true` and `partialPrefetching: true` in `next.config.ts`. Read `node_modules/next/dist/docs/01-app/` before using routing, caching, or data APIs — e.g. `02-guides/authentication-with-cache-components.md` is relevant for the auth screens. Typed route helpers like `LayoutProps<"/">` are global.
- **React 19**, TypeScript strict, path alias `@/*` → `src/*`.
- **shadcn/ui style `base-mira`** (see `components.json`): components are built on **Base UI (`@base-ui/react`)**, not Radix. Props/composition follow Base UI (e.g. `ButtonPrimitive.Props`, `render` prop instead of Radix `asChild`) — check the primitive's API rather than assuming Radix patterns.
- **Icons: Hugeicons** — `<HugeiconsIcon icon={XxxIcon} strokeWidth={2} />` from `@hugeicons/react` + `@hugeicons/core-free-icons`. Don't add lucide-react. Inside buttons, mark icons with `data-icon="inline-start" | "inline-end"` so padding adjusts.
- **Tailwind CSS v4**, CSS-first config — there is no `tailwind.config.*`. Tailwind is wired through `@tailwindcss/turbopack` in `next.config.ts`.
- `cn()` in `src/lib/utils.ts` re-exports the `cn` package (shadcn's drop-in for clsx + tailwind-merge).

## Design system architecture

- **Tokens live in `src/app/globals.css`**: semantic CSS variables (`--primary`, `--card`, `--sidebar-*`, `--chart-*`, `--radius`, …) in OKLCH under `:root` and `.dark`, mapped to Tailwind utilities via `@theme inline` (`--color-primary: var(--primary)` → `bg-primary`). Radius scale is derived from `--radius`. Dark mode is class-based (`.dark` ancestor).
- Change the brand look by editing tokens first; components should only reference semantic utilities (`bg-primary`, `text-muted-foreground`, `border-border`), not raw colors.
- **Components in `src/components/ui/` are owned code — customize them in place.** Each lives in its own PascalCase folder: `Button/Button.tsx` (markup + typed semantic props), `Button/Button.module.css` (all styling), `Button/index.ts` (public exports). Import from the folder: `@/components/ui/Button`.
  - TSX holds no Tailwind classes. It maps props to module classes (``styles[`variant-${variant}`]``) and merges the consumer `className` last via `mergeClassName()` from `@/lib/utils`, which also handles Base UI's function-form `className`.
  - CSS modules start with `@reference "../../../app/globals.css";` (to use tokens and `@apply`) and keep all rules inside `@layer components`, so Tailwind utilities passed via `className` always override them.
  - `next.config.ts` has a separate Turbopack rule for `*.module.css`. Without it, module files are treated as global CSS and `styles.*` comes back empty.
  - Each root element carries `data-slot` (plus `data-variant` / `data-size` where relevant) for styling hooks.
  - `npx shadcn add <component>` still writes a flat lowercase `.tsx` with inline classes; move it into this folder structure after adding. Re-adding an existing component overwrites local customizations.
- Fonts are loaded in `src/app/layout.tsx` via `next/font` (Outfit → `--font-sans`, Geist Mono → `--font-mono`).
- `src/app/page.tsx` is currently a component showcase page for Button variants/sizes and Dialog sizes.

## Mock app conventions

- Auth and data are **UI-only mocks**: client-side form validation, fake session/data via in-code mock data and/or `localStorage`, used only to navigate between screens. Don't add API routes, databases, or auth providers unless asked.
- Because `cacheComponents` is on, anything reading `localStorage`/browser state must be in a Client Component (`"use client"`), and dynamic reads need a `<Suspense>` boundary.
