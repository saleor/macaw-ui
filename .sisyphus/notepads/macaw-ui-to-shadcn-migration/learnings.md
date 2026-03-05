# Learnings: macaw-ui → shadcn Migration

## 2026-03-05 — Atlas startup inspection

### CSS Variable Naming Convention (CRITICAL — plan had errors)

macaw-ui uses `createGlobalThemeContract` with naming formula:

```
mu-${path.map(toKebabCase).join("-")}
```

toKebabCase: camelCase → kebab-case, leaves lowercase unchanged.

**Examples of actual CSS variable names:**

- `colors.background.default1` → `--mu-colors-background-default1` (number, no change)
- `colors.background.buttonDefaultPrimary` → `--mu-colors-background-button-default-primary` (camelCase → kebab)
- `colors.background.buttonCriticalPrimary` → `--mu-colors-background-button-critical-primary`
- `colors.background.accent1` → `--mu-colors-background-accent1`
- `colors.background.info1` → `--mu-colors-background-info1`
- `colors.background.critical1` → `--mu-colors-background-critical1`
- `colors.text.default1` → `--mu-colors-text-default1`
- `colors.text.buttonDefaultPrimary` → `--mu-colors-text-button-default-primary`
- `colors.border.accent1` → `--mu-colors-border-accent1`
- `colors.border.default1` → `--mu-colors-border-default1`

**⚠️ The plan's bridge CSS used WRONG names:**

- Plan wrote `--mu-colors-foreground-*` → WRONG, should be `--mu-colors-text-*`
- Plan wrote `--mu-colors-background-buttonDefaultPrimary` → WRONG, should be `--mu-colors-background-button-default-primary`

### Corrected Bridge CSS

```css
:root {
  --background: var(--mu-colors-background-default1);
  --foreground: var(--mu-colors-text-default1);
  --primary: var(--mu-colors-background-button-default-primary);
  --primary-foreground: var(--mu-colors-text-button-default-primary);
  --destructive: var(--mu-colors-background-button-critical-primary);
  --destructive-foreground: var(--mu-colors-text-button-critical-primary);
  --muted: var(--mu-colors-background-default2);
  --muted-foreground: var(--mu-colors-text-default2);
  --accent: var(--mu-colors-background-accent1);
  --accent-foreground: var(--mu-colors-text-accent1);
  --border: var(--mu-colors-border-default1);
  --input: var(--mu-colors-border-default1);
  --ring: var(--mu-colors-border-accent1);
  --card: var(--mu-colors-background-default1);
  --card-foreground: var(--mu-colors-text-default1);
  --popover: var(--mu-colors-background-default1);
  --popover-foreground: var(--mu-colors-text-default1);
  --secondary: var(--mu-colors-background-button-default-secondary);
  --secondary-foreground: var(--mu-colors-text-button-default-secondary);

  /* Custom Saleor extensions */
  --info: var(--mu-colors-background-info1);
  --info-foreground: var(--mu-colors-text-info1);
  --success: var(--mu-colors-background-success1);
  --success-foreground: var(--mu-colors-text-success1);
  --warning: var(--mu-colors-background-warning1);
  --warning-foreground: var(--mu-colors-text-warning1);
  --surface-critical: var(--mu-colors-background-critical1);
  --surface-critical-foreground: var(--mu-colors-text-critical1);
}
```

### ThemeProvider Architecture

- macaw-ui's `ThemeContextProvider` calls `setElementVars(document.documentElement, vars, themes[theme])` → CSS vars are on `<html>`, globally available
- Dashboard wraps this via `src/theme/provider.tsx` → uses `MacawThemeProvider` from `@saleor/macaw-ui-next`
- Dashboard's `useTheme()` hook in `src/theme/hook.tsx` calls `setTheme()` which triggers the macaw-ui setElementVars
- Dark mode bridge: just add `document.documentElement.classList.toggle("dark", theme === "defaultDark")` in the dashboard's setTheme wrapper

### Package Aliases

- `@saleor/macaw-ui-next` is an alias in dashboard for `npm:@saleor/macaw-ui@1.4.1`
- Dashboard entry: `import "@saleor/macaw-ui-next/style"` (NOT `@saleor/macaw-ui/style`)
- Dashboard does NOT have tailwindcss installed (confirmed: `"tailwind": none`)

### Dashboard Structure

- NOT a monorepo — single workspace at `/Users/jonatanwitoszek/PROJECTS/saleor-dashboard/`
- Entry: `src/index.tsx` — imports style, ThemeProvider, LegacyThemeProvider
- ThemeProvider logic: `src/theme/provider.tsx`, `src/theme/hook.tsx`, `src/theme/consts.ts`
- LegacyThemeProvider is from `@saleor/macaw-ui@0.7.4` (legacy Material era)

### macaw-ui Token Structure (contract.css.ts)

Categories:

- `spacing` — 0, px, 0.5 through 52
- `colors.background` — ~35 tokens including buttons, accent, default, info, success, warning, critical
- `colors.text` — ~14 tokens (same semantic names as background)
- `colors.border` — ~10 tokens
- `fontSize`, `borderRadius`, `lineHeight`, `fontWeight`, `letterSpacing`, `boxShadow`, `borderWidth`

## 2026-03-05 — Phase 0.4 Apps Monorepo shadcn CLI Test

### smtp app framework: Next.js 15 (Pages Router, with App Router API routes)

### shadcn init result: SUCCESS — but required 3 manual prerequisites

**Prerequisites needed before `npx shadcn@latest init --defaults` works:**

1. **Add `@/*` path alias to tsconfig.json** — shadcn requires an import alias:

   ```json
   "paths": { "@/*": ["./src/*"] }
   ```

   The smtp app had `baseUrl: "."` but no `paths`. shadcn CLI fails with "No import alias found" without this.

2. **Install Tailwind CSS v3** (NOT v4) — shadcn v3.8.5 has partial v4 support but still fails validation:

   ```bash
   pnpm add tailwindcss@^3 postcss autoprefixer
   npx tailwindcss init -p  # creates tailwind.config.js + postcss.config.js
   ```

   Note: Tailwind v4 was installed first (latest), but shadcn failed with "No Tailwind CSS configuration found" even with v4. Downgrading to v3 fixed it.

3. **Add Tailwind directives to CSS file** — shadcn looks for a CSS file with `@tailwind` directives:
   Added to `src/styles/globals.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

### shadcn add button result: SUCCESS

- Created `src/components/ui/button.tsx`
- Created `src/lib/utils.ts` (during init)
- Installed `@radix-ui/react-slot`, `class-variance-authority`, `clsx`, `tailwind-merge`

### TypeScript resolution: PASS

- `pnpm check-types` (tsc) passes with zero errors
- `@/lib/utils` import in button.tsx resolves correctly via the `@/*` path alias
- No workspace-level TypeScript conflicts

### Workspace issues: Minor — pnpm workspace catalog not used for new deps

- Tailwind, postcss, autoprefixer, clsx, tailwind-merge, class-variance-authority, @radix-ui/react-slot were added directly to smtp's package.json (not via workspace catalog)
- This is acceptable for a test but production setup should add them to the catalog

### Workarounds needed:

1. Must add `@/*` path alias to tsconfig.json manually before running shadcn init
2. Must install Tailwind v3 (not v4) + create config files manually before running shadcn init
3. Must add `@tailwind` directives to an existing CSS file before running shadcn init
4. shadcn `--template next-monorepo` flag does NOT bypass these requirements — it still fails without the prerequisites

### Key finding: shadcn CLI does NOT auto-install Tailwind

Despite documentation suggesting it handles setup, the CLI only validates existing Tailwind setup. All Tailwind installation must be done manually first.

### components.json created at:

`/Users/jonatanwitoszek/PROJECTS/apps/apps/smtp/components.json`

- style: new-york
- baseColor: neutral
- cssVariables: true
- aliases: `@/components`, `@/lib/utils`, `@/components/ui`
