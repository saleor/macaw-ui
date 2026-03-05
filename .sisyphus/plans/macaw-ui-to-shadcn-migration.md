# Plan: macaw-ui → shadcn Registry-Only Migration

> **Status**: READY FOR EXECUTION
> **Research**: `.sisyphus/drafts/shadcn-migration-research.md` > **Scope**: macaw-ui library (freeze) + new registry repo + saleor-dashboard + apps monorepo
> **Approach**: Registry-only. No npm package. Incremental, backwards-compatible.
> **Team**: 1-2 frontend developers
> **Deferred**: klaviyo app, segment app (maintenance-only)

---

## Context

macaw-ui is a 31-component React library using Vanilla Extract + Radix UI. Usage audit shows:

- **Only 2 components** need custom Saleor implementations (DynamicCombobox, DynamicMultiselect)
- **28 components** map directly to standard shadcn primitives
- **Box** (463 files in dashboard) needs a codemod to `<div className="...">` with Tailwind
- **Token mapping** is clean: 13 unique colors → shadcn standard + 8 custom extensions

Consumers:

- **saleor-dashboard**: Single workspace. 855 files import macaw-ui-next. Legacy Material UI ~50% migrated.
- **apps monorepo**: Turborepo. 9 apps + `@saleor/apps-ui` (65 files) + `@saleor/react-hook-form-macaw` (29 files).

The registry approach means: **no macaw-ui npm package**. Saleor ships a custom shadcn registry with:

1. `registry:style` — CSS variables (Saleor theme)
2. `registry:ui` — 2 custom components (DynamicCombobox, DynamicMultiselect)
3. `registry:block` — page patterns (ConfigPage, ListPage, Layout, etc.)

---

## Risk Matrix (from Metis review)

| #   | Risk                                                                          | Severity    | Mitigation                                                  |
| --- | ----------------------------------------------------------------------------- | ----------- | ----------------------------------------------------------- |
| 1   | CSS variable bridge unproven (macaw-ui vars ↔ shadcn vars)                   | 🔴 Critical | Phase 0 PoC validates this FIRST                            |
| 2   | Reset CSS conflicts (macaw-ui reset vs Tailwind Preflight)                    | 🟡 High     | Audit in Phase 0; disable Preflight or scope it             |
| 3   | Dark mode dual-mechanism (macaw-ui `setElementVars` vs shadcn `class="dark"`) | 🟡 High     | Bridge utility syncs both in Phase 0                        |
| 4   | State-based sprinkles un-codemod-able (~20% of Box usages)                    | 🟡 High     | Budget manual migration time; codemod inserts TODO comments |
| 5   | Cross-consumer divergence (shadcn copy-paste model)                           | 🟡 High     | Registry + CI hash comparison or thin shared package        |
| 6   | shadcn CLI workspace issues in apps monorepo                                  | 🟢 Medium   | Test in Phase 0 with one app                                |
| 7   | Tailwind v3 vs v4 decision                                                    | 🟢 Medium   | Decision: use v4 (latest, CSS-first config)                 |
| 8   | Opportunistic migration never reaches 100%                                    | 🟢 Medium   | Set hard deadline + cleanup sprint after Phase 3            |

---

## Acceptance Criteria (Overall)

1. macaw-ui npm package receives NO new releases after Phase 1 starts
2. `npx shadcn add @saleor/style` works and applies Saleor theme to all standard shadcn components
3. `npx shadcn add @saleor/dynamic-combobox` installs a working async combobox with infinite scroll
4. saleor-dashboard renders identically with mixed old (macaw-ui) + new (shadcn) components on the same page
5. All existing Playwright/Chromatic visual tests pass throughout migration
6. No new styling system is introduced beyond: Tailwind classes + shadcn components + CSS modules (existing)

---

## Phase 0: Proof of Concept (Decision Gate)

**Goal**: Validate the 3 critical risks before committing to migration. If any PoC fails → re-evaluate approach.
**Duration**: 1-2 days
**Scope**: saleor-dashboard only (simpler workspace structure)

### Task 0.1: CSS Variable Bridge PoC

**What**: Prove macaw-ui components and shadcn components can coexist on the same page, reading from the same CSS variables.

**Steps**:

1. In saleor-dashboard, install Tailwind CSS v4 and `@shadcn/ui` CLI:
   ```bash
   # In saleor-dashboard root
   pnpm add -D tailwindcss @tailwindcss/postcss postcss
   npx shadcn@latest init
   ```
2. When shadcn init asks for style/color/CSS variables — accept defaults. This creates:
   - `components.json` at root
   - `src/components/ui/` directory (empty)
   - CSS variable definitions in the app's global CSS
3. Create a bridge CSS file `src/styles/theme-bridge.css` that maps macaw-ui CSS variables to shadcn CSS variables:

   ```css
   :root {
     /* Map macaw-ui tokens → shadcn tokens */
     --background: var(--mu-colors-background-default1);
     --foreground: var(--mu-colors-foreground-default1);
     --primary: var(--mu-colors-background-buttonDefaultPrimary);
     --primary-foreground: var(--mu-colors-foreground-buttonDefaultPrimary);
     --destructive: var(--mu-colors-background-buttonCriticalPrimary);
     --destructive-foreground: var(
       --mu-colors-foreground-buttonCriticalPrimary
     );
     --muted: var(--mu-colors-background-default2);
     --muted-foreground: var(--mu-colors-foreground-default2);
     --accent: var(--mu-colors-background-accent1);
     --accent-foreground: var(--mu-colors-foreground-accent1);
     --border: var(--mu-colors-border-default1);
     --input: var(--mu-colors-border-default1);
     --ring: var(--mu-colors-border-accent1);
     --card: var(--mu-colors-background-default1);
     --card-foreground: var(--mu-colors-foreground-default1);
     --popover: var(--mu-colors-background-default1);
     --popover-foreground: var(--mu-colors-foreground-default1);
     --secondary: var(--mu-colors-background-default2);
     --secondary-foreground: var(--mu-colors-foreground-default2);

     /* Custom Saleor extensions */
     --info: var(--mu-colors-background-info1);
     --info-foreground: var(--mu-colors-foreground-info1);
     --success: var(--mu-colors-background-success1);
     --success-foreground: var(--mu-colors-foreground-success1);
     --warning: var(--mu-colors-background-warning1);
     --warning-foreground: var(--mu-colors-foreground-warning1);
     --surface-critical: var(--mu-colors-background-critical1);
     --surface-critical-foreground: var(--mu-colors-foreground-critical1);
   }
   ```

4. Import the bridge CSS AFTER macaw-ui's style import in `src/index.tsx`:
   ```tsx
   import "@saleor/macaw-ui/style";
   import "./styles/theme-bridge.css";
   ```
5. Install a standard shadcn Button: `npx shadcn@latest add button`
6. Render the shadcn Button alongside a macaw-ui Button on any dashboard page (e.g., the product list page's header). Compare visually.

**QA Scenarios**:

- [ ] Both buttons render with the same primary color
- [ ] Switching dark/light theme updates both buttons
- [ ] No CSS conflicts or layout shifts
- [ ] Build completes without errors
- [ ] All existing tests pass

**Acceptance**: Both buttons look identical. Dark mode works for both. No visual regression.

**If this fails**: The token naming in macaw-ui may not be what we expect. Check the actual CSS custom property names by inspecting `<main id="macaw-ui-root">` in browser DevTools. The variable names come from Vanilla Extract's `createGlobalThemeContract()` — they may be hashed. If hashed, the bridge approach won't work and we need to emit explicit CSS variables in the ThemeProvider instead.

### Task 0.2: Dark Mode Bridge

**What**: Ensure dark mode switches work for both macaw-ui and shadcn simultaneously.

**Steps**:

1. macaw-ui switches dark mode via `setElementVars()` on `#macaw-ui-root`. shadcn uses `class="dark"` on `<html>`.
2. In `src/theme/` (or wherever macaw-ui's ThemeProvider is configured), after the macaw-ui theme change callback, also toggle the `dark` class on `document.documentElement`:
   ```tsx
   // In the existing theme toggle handler
   const handleThemeChange = (theme: "defaultLight" | "defaultDark") => {
     // existing macaw-ui logic...
     // ADD: sync shadcn dark mode
     if (theme === "defaultDark") {
       document.documentElement.classList.add("dark");
     } else {
       document.documentElement.classList.remove("dark");
     }
   };
   ```
3. The bridge CSS from Task 0.1 handles the variable mapping for both light and dark — macaw-ui's `setElementVars` updates the `--mu-*` vars, and the bridge's `var()` references follow automatically.

**QA Scenarios**:

- [ ] Toggle theme → both macaw-ui and shadcn components switch together
- [ ] Page refresh preserves theme for both systems
- [ ] No flash of wrong theme on load

**Acceptance**: Dark mode toggle is instantaneous and synchronized for both component systems.

### Task 0.3: Reset CSS Conflict Audit

**What**: Identify and resolve CSS reset conflicts between macaw-ui and Tailwind Preflight.

**Steps**:

1. macaw-ui applies its own CSS reset (check `@saleor/macaw-ui/style` import). Tailwind Preflight applies its own.
2. With both active, inspect the dashboard for visual regressions:
   - Typography: headings, paragraphs, links
   - Form elements: inputs, buttons, selects
   - Lists: ul/ol rendering
   - Images: sizing behavior
3. If conflicts exist, disable Tailwind Preflight in the Tailwind config:
   ```css
   /* In your main CSS file, use Tailwind v4 syntax */
   @import "tailwindcss" layer(utilities);
   /* This imports only utilities, skipping base/preflight */
   ```
   OR scope Preflight to only new components using `@layer`.

**QA Scenarios**:

- [ ] All existing pages render identically after adding Tailwind
- [ ] Form elements maintain current styling
- [ ] Chromatic/visual diff shows zero regressions (or only expected areas)

**Acceptance**: Zero visual regressions from adding Tailwind to the dashboard.

### Task 0.4: Apps Monorepo shadcn CLI Test

**What**: Verify `npx shadcn init` works in the Turborepo workspace.

**Steps**:

1. Pick one non-deferred app (e.g., `apps/smtp`)
2. Run `npx shadcn@latest init` in that app's directory
3. Verify it creates `components.json` and `components/ui/` correctly
4. Install one component: `npx shadcn@latest add button`
5. Verify the component imports resolve correctly with the monorepo's TypeScript paths

**QA Scenarios**:

- [ ] `npx shadcn init` completes without errors
- [ ] Installed component builds successfully
- [ ] No workspace resolution errors

**Acceptance**: shadcn CLI works in the monorepo. If workspace issues occur (known shadcn issue #9239), document the workaround.

### Phase 0 Decision Gate

After all 4 tasks:

- **ALL PASS** → Proceed to Phase 1
- **0.1 FAILS** (bridge doesn't work) → Investigate CSS variable names. May need ThemeProvider patch in macaw-ui first (one final npm release).
- **0.3 FAILS** (reset conflicts too severe) → Evaluate Tailwind v4's `@layer` scoping
- **0.4 FAILS** (monorepo issues) → Plan shared `packages/shadcn-ui` approach for apps

---

## Phase 1: Registry Repository Setup

**Goal**: Create the Saleor shadcn registry repo. Ship the style, 2 custom components, and first block components.
**Duration**: 3-5 days
**Dependencies**: Phase 0 passes decision gate

### Task 1.1: Create Registry Repository

**What**: Set up a new repo `saleor/saleor-ui-registry` using Vercel's registry-starter template.

**Steps**:

1. Use the Vercel registry starter as base: `https://github.com/vercel/registry-starter`
2. Create repo at `github.com/saleor/saleor-ui-registry` (or chosen name)
3. Structure:
   ```
   saleor-ui-registry/
   ├── registry/                    # All registry items
   │   ├── styles/
   │   │   └── saleor-style.json    # registry:style — CSS vars + theme
   │   ├── ui/
   │   │   ├── dynamic-combobox.json    # registry:ui
   │   │   └── dynamic-multiselect.json # registry:ui
   │   └── blocks/
   │       ├── config-page.json     # registry:block
   │       ├── list-page.json       # registry:block
   │       ├── detail-page.json     # registry:block
   │       ├── layout.json          # registry:block (replaces @saleor/apps-ui Layout)
   │       ├── text-link.json       # registry:block (replaces @saleor/apps-ui TextLink)
   │       └── breadcrumbs.json     # registry:block (replaces @saleor/apps-ui Breadcrumbs)
   ├── src/
   │   ├── components/              # Source code for custom components
   │   │   ├── dynamic-combobox.tsx
   │   │   └── dynamic-multiselect.tsx
   │   └── blocks/                  # Source code for blocks
   │       ├── config-page.tsx
   │       └── ...
   ├── public/
   │   └── r/                       # Built registry JSON (served statically)
   │       ├── styles/saleor-style.json
   │       ├── ui/dynamic-combobox.json
   │       └── blocks/config-page.json
   ├── components.json              # shadcn config for the registry itself
   └── package.json
   ```
4. Deploy to Vercel. The public URL becomes the registry endpoint.

**QA Scenarios**:

- [ ] `curl https://registry.saleor.com/r/styles/saleor-style.json` returns valid registry:style JSON
- [ ] Repo builds and deploys to Vercel without errors

**Acceptance**: Registry is live and returns valid JSON at its public URL.

### Task 1.2: Create Saleor Style Registry Item

**What**: Define the `registry:style` item with Saleor's CSS variables for both light and dark themes.

**Steps**:

1. Create `registry/styles/saleor-style.json`:

   ```json
   {
     "$schema": "https://ui.shadcn.com/schema/registry-item.json",
     "name": "saleor-style",
     "type": "registry:style",
     "dependencies": ["lucide-react"],
     "registryDependencies": [],
     "cssVars": {
       "theme": {
         "font-sans": "Inter, sans-serif",
         "radius": "0.5rem"
       },
       "light": {
         "background": "0 0% 100%",
         "foreground": "180 4% 15%",
         "primary": "211 45% 13%",
         "primary-foreground": "0 0% 100%",
         "destructive": "11 100% 46%",
         "destructive-foreground": "0 0% 100%",
         "muted": "210 18% 96%",
         "muted-foreground": "180 3% 35%",
         "accent": "215 93% 95%",
         "accent-foreground": "211 45% 13%",
         "border": "210 15% 85%",
         "input": "210 15% 85%",
         "ring": "215 93% 59%",
         "card": "0 0% 100%",
         "card-foreground": "180 4% 15%",
         "popover": "0 0% 100%",
         "popover-foreground": "180 4% 15%",
         "secondary": "210 18% 96%",
         "secondary-foreground": "180 4% 15%",
         "info": "233 100% 91%",
         "info-foreground": "233 100% 25%",
         "success": "173 43% 80%",
         "success-foreground": "173 43% 20%",
         "warning": "42 100% 84%",
         "warning-foreground": "42 100% 20%",
         "surface-critical": "11 100% 93%",
         "surface-critical-foreground": "11 100% 30%"
       },
       "dark": {
         "background": "200 6% 10%",
         "foreground": "210 12% 87%",
         "primary": "0 0% 100%",
         "primary-foreground": "200 6% 10%",
         "destructive": "7 100% 64%",
         "destructive-foreground": "0 0% 100%",
         "muted": "200 4% 16%",
         "muted-foreground": "210 8% 55%",
         "accent": "215 50% 23%",
         "accent-foreground": "215 93% 77%",
         "border": "200 4% 24%",
         "input": "200 4% 24%",
         "ring": "215 70% 50%",
         "card": "200 6% 10%",
         "card-foreground": "210 12% 87%",
         "popover": "200 4% 16%",
         "popover-foreground": "210 12% 87%",
         "secondary": "200 4% 16%",
         "secondary-foreground": "210 12% 87%",
         "info": "233 50% 30%",
         "info-foreground": "233 100% 85%",
         "success": "173 30% 25%",
         "success-foreground": "173 43% 85%",
         "warning": "42 60% 30%",
         "warning-foreground": "42 100% 85%",
         "surface-critical": "11 50% 20%",
         "surface-critical-foreground": "11 100% 85%"
       }
     }
   }
   ```

   **Note**: The exact HSL values above are placeholders derived from the macaw-ui theme files. The implementer MUST extract exact values from `src/theme/themes/defaultLight.ts` and `src/theme/themes/defaultDark.ts` (paths relative to macaw-ui repo root) by converting hex → HSL. Use a tool like `color-convert` or manual inspection.

2. Verify by running `npx shadcn add` with the style in a test project.

**QA Scenarios**:

- [ ] Installing the style applies correct colors to standard shadcn Button, Input, Dialog
- [ ] Light and dark mode both apply correct Saleor colors
- [ ] Custom tokens (info, success, warning, surface-critical) are available as CSS variables
- [ ] Font is Inter

**Acceptance**: Standard shadcn components look like Saleor components when using this style.

### Task 1.3: Port DynamicCombobox to Registry

**What**: Create a shadcn-compatible DynamicCombobox that preserves async loading + infinite scroll functionality.

**Steps**:

1. Read the current implementation: `src/components/Combobox/Dynamic/DynamicCombobox.tsx`
2. Read the current styling sources: `src/components/BaseInput/BaseInput.css.ts`, `src/components/BaseSelect/BaseSelect.css.ts`, and `src/components/Combobox/Common/ComboboxWrapper.tsx` (DynamicCombobox does NOT have its own `.css.ts` — it uses shared BaseInput/BaseSelect recipes)
3. Read actual usage in dashboard (25 files) and apps (2 files) to understand which props are actually used
4. Build the new component using:
   - shadcn's Popover + Command pattern as base (this is how shadcn's own Combobox works)
   - Tailwind classes for styling (referencing Saleor CSS vars from the style)
   - Same async API: `onInputValueChange`, `onScrollEnd`, `loading` props
   - `@tanstack/react-virtual` for virtualized lists (if current impl uses it)
5. Create `registry/ui/dynamic-combobox.json`:
   ```json
   {
     "$schema": "https://ui.shadcn.com/schema/registry-item.json",
     "name": "dynamic-combobox",
     "type": "registry:ui",
     "dependencies": ["@radix-ui/react-popover", "cmdk"],
     "registryDependencies": ["popover", "command"],
     "files": [{ "path": "ui/dynamic-combobox.tsx", "type": "registry:ui" }]
   }
   ```
6. The component source file at `src/components/dynamic-combobox.tsx` should:
   - Accept the same props interface as current macaw-ui DynamicCombobox (or a simplified version based on actual usage)
   - Use `Popover` and `Command` from shadcn as registryDependencies
   - Handle `onScrollEnd` for infinite scroll
   - Handle `loading` state with Spinner
   - Support single selection with search

**Props interface (based on usage audit)**:

```typescript
interface DynamicComboboxProps<T> {
  value: Option | null;
  onChange: (value: Option | null) => void;
  options: Option[];
  loading?: boolean;
  locale?: { loadingText?: string; noResultsText?: string };
  onInputValueChange?: (value: string) => void;
  onScrollEnd?: () => void;
  onFocus?: () => void;
  label?: string;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  required?: boolean;
  size?: "small" | "medium" | "large";
}

interface Option {
  label: string;
  value: string;
}
```

**QA Scenarios**:

- [ ] Typing in the input triggers `onInputValueChange`
- [ ] Scrolling to bottom triggers `onScrollEnd`
- [ ] `loading` shows a spinner
- [ ] Selecting an option calls `onChange`
- [ ] Clearing the selection works
- [ ] Keyboard navigation works (up/down/enter/escape)
- [ ] Component renders with Saleor theme colors
- [ ] Props interface is backwards-compatible with current usage

**Acceptance**: DynamicCombobox works identically to the macaw-ui version in all 27 usage locations.

### Task 1.4: Port DynamicMultiselect to Registry

**What**: Create a shadcn-compatible DynamicMultiselect with async loading + infinite scroll + multi-value selection.

**Steps**:

1. Read the current implementation: `src/components/Multiselect/Dynamic/DynamicMultiselect.tsx`
   1b. Read the current styling sources: `src/components/Multiselect/Common/Multiselect.css.ts`, `src/components/BaseSelect/BaseSelect.css.ts`, and `src/components/BaseInput/BaseInput.css.ts` (DynamicMultiselect uses shared styling from these files)
2. Build using shadcn Popover + Command + Badge pattern
3. Same approach as Task 1.3 but with multi-value:
   - Chips/badges for selected values
   - Remove on click or backspace
   - Same async API as DynamicCombobox

**Props interface (based on usage audit)**:

```typescript
interface DynamicMultiselectProps<T> {
  value: Option[];
  onChange: (value: Option[]) => void;
  options: Option[];
  loading?: boolean;
  onInputValueChange?: (value: string) => void;
  onScrollEnd?: () => void;
  onFocus?: () => void;
  label?: string;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  required?: boolean;
}
```

4. Create registry JSON similar to Task 1.3.

**QA Scenarios**:

- [ ] Multiple items can be selected (shown as badges)
- [ ] Items can be removed individually
- [ ] Async search + infinite scroll work
- [ ] Selected items are excluded from dropdown
- [ ] Keyboard navigation works

**Acceptance**: DynamicMultiselect works identically to the macaw-ui version in all 10 usage locations.

### Task 1.5: Create First Block Components

**What**: Create registry:block items for the highest-priority page patterns.

**Priority order** (from user decision):

1. **ConfigPage** — Settings/Configuration page layout used across dashboard
2. **ListPage** — List view with filters, search, pagination
3. **DetailPage** — Detail/edit view with form sections

**Steps**:

1. Audit actual ConfigPage usage in saleor-dashboard to understand the exact layout pattern
2. Build as a shadcn block using Card, Table, and other standard shadcn components
3. Style with Tailwind + Saleor CSS vars
4. Create registry JSON with `type: "registry:block"` and list all `registryDependencies`

**Note**: Block components are lower priority than the core registry setup (Tasks 1.1-1.4). They can be added incrementally after the registry is live.

**QA Scenarios**:

- [ ] ConfigPage block renders identically to current dashboard configuration pages
- [ ] Block uses standard shadcn components internally
- [ ] `npx shadcn add @saleor/config-page` installs the block and all its dependencies

**Acceptance**: Block components are visually identical to current dashboard patterns.

### Task 1.6: Set Up Registry CI/CD

**What**: Automate registry building and deployment.

**Steps**:

1. GitHub Actions workflow that:
   - Validates all registry JSON files against shadcn schema
   - Builds the registry (generates `public/r/` directory)
   - Deploys to Vercel (or GitHub Pages)
   - Runs a smoke test: `npx shadcn add @saleor/style` in a fresh project
2. Add a visual comparison test: install standard shadcn Button with Saleor style → screenshot → compare against reference

**QA Scenarios**:

- [ ] Push to main triggers automatic deployment
- [ ] Registry JSON validation catches schema errors before deploy
- [ ] Smoke test catches breaking changes

**Acceptance**: Registry auto-deploys on push. Broken items are caught by CI.

---

## Phase 2: Consumer Bootstrap (Dashboard + Apps)

**Goal**: Add Tailwind + shadcn + Saleor registry to consumers. Zero component migration yet — just infrastructure.
**Duration**: 2-3 days per consumer
**Dependencies**: Phase 1 complete (registry is live)

### Task 2.1: Bootstrap Saleor Dashboard

**What**: Add Tailwind, shadcn, and the Saleor registry to saleor-dashboard.

**Steps**:

1. If not already done in Phase 0, install Tailwind CSS v4:
   ```bash
   pnpm add -D tailwindcss @tailwindcss/postcss
   ```
2. Configure PostCSS (add `@tailwindcss/postcss` plugin)
3. Add Tailwind import to the main CSS file:
   ```css
   @import "tailwindcss";
   ```
4. Handle Preflight conflicts (per Phase 0 findings — likely disable Preflight):
   ```css
   @import "tailwindcss" layer(utilities);
   ```
5. Initialize shadcn:
   ```bash
   npx shadcn@latest init
   ```
6. Configure the Saleor registry in `components.json`:
   ```json
   {
     "$schema": "https://ui.shadcn.com/schema.json",
     "style": "new-york",
     "rsc": false,
     "tsx": true,
     "tailwind": {
       "config": "",
       "css": "src/styles/globals.css",
       "prefix": ""
     },
     "aliases": {
       "components": "@/components",
       "utils": "@/lib/utils",
       "ui": "@/components/ui"
     },
     "registries": {
       "@saleor": "https://registry.saleor.com/r"
     }
   }
   ```
7. Install the Saleor style:
   ```bash
   npx shadcn@latest add @saleor/style
   ```
8. Install the CSS variable bridge (from Phase 0, now formalized):
   - If Phase 0 proved `var()` references work → use bridge CSS
   - If Phase 0 proved we need explicit values → use the style's `cssVars` directly
9. Sync the dark mode bridge (from Phase 0 Task 0.2)
10. Verify: run `pnpm build` + `pnpm test` + visual check

**QA Scenarios**:

- [ ] `pnpm build` succeeds
- [ ] All existing tests pass
- [ ] No visual regressions (run Chromatic if available)
- [ ] Dark mode still works
- [ ] `npx shadcn add button` installs a Saleor-themed button

**Acceptance**: Dashboard builds and runs with zero visual changes. shadcn components are available but not yet used.

### Task 2.2: Bootstrap Apps Monorepo

**What**: Add Tailwind + shadcn to the apps monorepo.

**Approach decision (based on Phase 0 Task 0.4 results)**:

- **If shadcn CLI works per-app**: Initialize in each non-deferred app individually
- **If workspace issues**: Create `packages/shadcn-ui` shared package that all apps import from

**Steps** (per-app approach):

1. For each non-deferred app (smtp, avatax, cms, etc.):
   ```bash
   cd apps/{app-name}
   pnpm add -D tailwindcss @tailwindcss/postcss
   npx shadcn@latest init
   ```
2. Configure Saleor registry in each app's `components.json`
3. Install Saleor style: `npx shadcn@latest add @saleor/style`
4. Verify build for each app

**Steps** (shared package approach — if per-app fails):

1. Create `packages/shadcn-ui/`:
   ```
   packages/shadcn-ui/
   ├── package.json          # @saleor/shadcn-ui
   ├── components.json       # shadcn config with Saleor registry
   ├── src/
   │   └── components/
   │       └── ui/           # shadcn components installed here
   ├── tsconfig.json
   └── index.ts              # Re-exports all components
   ```
2. Apps import from `@saleor/shadcn-ui` instead of local `./components/ui`

**QA Scenarios**:

- [ ] Each bootstrapped app builds successfully
- [ ] No visual regressions in any app
- [ ] shadcn components are available in each app

**Acceptance**: All non-deferred apps have Tailwind + shadcn + Saleor registry configured.

### Task 2.3: Create Box→div Codemod

**What**: Build a jscodeshift codemod that transforms `<Box>` with sprinkles props to `<div className="...">` with Tailwind classes.

**Steps**:

1. Create codemod in a separate directory (or in the registry repo under `tools/codemods/`):
   ```
   tools/codemods/
   ├── box-to-div/
   │   ├── transform.ts          # jscodeshift transform
   │   ├── mappings.ts           # sprinkles → Tailwind mapping tables
   │   ├── __tests__/
   │   │   ├── transform.test.ts
   │   │   └── fixtures/         # Before/after test fixtures
   │   └── README.md
   ```
2. Implement tiered transformation:

   **Tier 1 — Static literals (target: ~60% of usages)**:

   ```tsx
   // Before
   <Box padding={4} display="flex" gap={2}>
   // After
   <div className="p-4 flex gap-2">
   ```

   **Tier 2 — Responsive props (target: ~20% of usages)**:

   ```tsx
   // Before
   <Box display={{ mobile: "none", desktop: "flex" }}>
   // After
   <div className="hidden lg:flex">
   ```

   Breakpoint mapping: `mobile` → (default), `tablet` → `md:`, `desktop` → `lg:`

   **Tier 3 — Cannot auto-transform (target: ~20% of usages)**:

   ```tsx
   // Before
   <Box color={{ default: "default1", hover: "accent1" }}>
   // After (codemod output)
   {/* TODO: manual migration - original: color={{ default: "default1", hover: "accent1" }} */}
   <Box color={{ default: "default1", hover: "accent1" }}>
   ```

3. Handle `as` prop:

   ```tsx
   // Before
   <Box as="section" padding={4}>
   // After
   <section className="p-4">
   ```

4. Handle existing `className` merging:

   ```tsx
   // Before
   <Box className={styles.container} padding={4}>
   // After
   <div className={cn(styles.container, "p-4")}>
   ```

   Import `cn` from `@/lib/utils` (shadcn's clsx/twMerge utility)

5. Handle `__` escape hatch props:

   ```tsx
   // Before
   <Box __margin="42px">
   // After
   <div style={{ margin: "42px" }}>
   ```

6. **Sprinkles → Tailwind mapping table** (key mappings):
   | Sprinkles prop | Tailwind class pattern |
   |---|---|
   | `padding={N}` | `p-{N}` |
   | `paddingX={N}` | `px-{N}` |
   | `paddingY={N}` | `py-{N}` |
   | `margin={N}` | `m-{N}` |
   | `gap={N}` | `gap-{N}` |
   | `display="flex"` | `flex` |
   | `display="grid"` | `grid` |
   | `display="none"` | `hidden` |
   | `flexDirection="column"` | `flex-col` |
   | `alignItems="center"` | `items-center` |
   | `justifyContent="center"` | `justify-center` |
   | `width="100%"` | `w-full` |
   | `height="100%"` | `h-full` |
   | `overflow="hidden"` | `overflow-hidden` |
   | `position="relative"` | `relative` |
   | `position="absolute"` | `absolute` |
   | `borderRadius={N}` | `rounded-{mapping}` |
   | `gridTemplateColumns={N}` | `grid-cols-{N}` |

   Note: The full mapping table must be derived from `macaw-ui/src/theme/sprinkles.css.ts` which defines all available sprinkles properties and their values.

7. Write comprehensive tests with before/after fixtures covering all tiers.
8. Run `--dry-run` on dashboard to categorize output.

**QA Scenarios**:

- [ ] Tier 1 transforms produce correct Tailwind classes
- [ ] Tier 2 responsive transforms use correct breakpoint prefixes
- [ ] Tier 3 cases get TODO comments with original props preserved
- [ ] `as` prop correctly changes the element tag
- [ ] Existing `className` is merged with `cn()`
- [ ] `__` escape hatches become `style` props
- [ ] Codemod is idempotent (running twice produces same result)
- [ ] Dry run on dashboard reports: X auto-transformed, Y need manual work

**Acceptance**: Codemod transforms ≥70% of Box usages automatically. Remaining cases have clear TODO comments.

---

## Phase 3: Opportunistic Component Migration

**Goal**: Migrate components from macaw-ui to shadcn, file by file, prioritizing new features and active development areas.
**Duration**: Ongoing (weeks to months, integrated with normal development)
**Dependencies**: Phase 2 complete (infrastructure in place)

### Migration Strategy

**NOT a big-bang migration.** Each PR that touches a file can optionally migrate that file's macaw-ui components to shadcn. This is exactly how the Material UI → macaw-ui migration is already happening.

**Priority order for migration**:

1. **New features** — always use shadcn from the start
2. **Active bug fixes** — migrate touched files opportunistically
3. **Config/Settings pages** — highest value blocks (user requested)
4. **List/Detail pages** — second highest value blocks
5. **Shared wrapper packages** — `@saleor/react-hook-form-macaw` and `@saleor/apps-ui`
6. **Remaining files** — cleanup sprint at the end

### Task 3.1: Establish Migration Conventions

**What**: Document the migration pattern so all developers follow the same approach.

**Create a `MIGRATION.md` in saleor-dashboard** (and link from apps repo):

````markdown
# macaw-ui → shadcn Migration Guide

## How to migrate a file

1. Replace macaw-ui imports with shadcn imports:
   ```tsx
   // Before
   import { Button, Text, Input } from "@saleor/macaw-ui";
   // After
   import { Button } from "@/components/ui/button";
   import { Input } from "@/components/ui/input";
   import { Label } from "@/components/ui/label";
   ```
````

2. For Input, split into composition:

   ```tsx
   // Before
   <Input label="Name" error={true} helperText="Required" value={v} onChange={onChange} />
   // After
   <div className="space-y-2">
     <Label htmlFor="name">Name</Label>
     <Input id="name" value={v} onChange={onChange} aria-invalid={true} />
     <p className="text-sm text-destructive">Required</p>
   </div>
   ```

3. For Text, use native HTML with Tailwind:

   ```tsx
   // Before
   <Text variant="heading" size="large">Title</Text>
   // After
   <h2 className="text-2xl font-semibold tracking-tight">Title</h2>
   ```

4. For Box, run the codemod OR manually convert:

   ```tsx
   // Before
   <Box display="flex" gap={4} padding={2}>
   // After
   <div className="flex gap-4 p-2">
   ```

5. For DynamicCombobox/DynamicMultiselect, use registry versions:
   ```tsx
   // Before
   import { DynamicCombobox } from "@saleor/macaw-ui";
   // After
   import { DynamicCombobox } from "@/components/ui/dynamic-combobox";
   ```
   Props interface is the same — no changes needed.

## Component mapping cheat sheet

| macaw-ui                       | shadcn                                | Notes                      |
| ------------------------------ | ------------------------------------- | -------------------------- |
| `<Button variant="primary">`   | `<Button>`                            | Default is primary         |
| `<Button variant="secondary">` | `<Button variant="secondary">`        | Direct                     |
| `<Button variant="tertiary">`  | `<Button variant="ghost">`            | Rename                     |
| `<Button variant="error">`     | `<Button variant="destructive">`      | Rename                     |
| `<Modal.Root>`                 | `<Dialog>`                            | Different compound pattern |
| `<Drawer.Root>`                | `<Sheet>`                             | Different compound pattern |
| `<Chip>`                       | `<Badge>`                             | Direct                     |
| `<Tooltip>`                    | `<Tooltip>`                           | Same (both use Radix)      |
| `<Checkbox>`                   | `<Checkbox>`                          | Same                       |
| `<Switch>`                     | `<Switch>`                            | Same                       |
| `<RadioGroup>`                 | `<RadioGroup>`                        | Same                       |
| `<Toggle>`                     | `<Toggle>`                            | Same                       |
| `<Accordion>`                  | `<Accordion>`                         | Same                       |
| `<Popover>`                    | `<Popover>`                           | Same                       |
| `<Skeleton>`                   | `<Skeleton>`                          | Same                       |
| `<Separator>`                  | `<Separator>`                         | Same                       |
| `<Spinner>`                    | `<Spinner>` (custom) or loading state | shadcn uses loading states |

````

**QA Scenarios**:
- [ ] Migration guide covers all 31 macaw-ui components
- [ ] At least 2 developers can follow the guide independently and produce consistent results
- [ ] Guide includes before/after code examples for every component

**Acceptance**: Migration guide is reviewed by team and approved.

### Task 3.2: Replace @saleor/react-hook-form-macaw

**What**: Replace the react-hook-form wrapper package (29 files in apps) with shadcn Form pattern.

**Steps**:
1. Read current wrappers: `packages/react-hook-form-macaw/src/components/*.tsx`
2. shadcn has a built-in Form pattern using react-hook-form + zod:
   ```tsx
   import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
````

3. Install shadcn form in apps: `npx shadcn add form`
4. For each file using `@saleor/react-hook-form-macaw`:
   - Replace `<InputControl>` with `<FormField>` + `<FormControl>` + `<Input>`
   - Replace `<SelectControl>` with `<FormField>` + `<FormControl>` + `<Select>`
   - etc.
5. After all 29 files migrated, remove `@saleor/react-hook-form-macaw` from workspace

**Breakdown by component (from usage audit)**:

- Input wrappers: 18 files → shadcn `<FormField>` + `<Input>`
- Select wrappers: 3 files → shadcn `<FormField>` + `<Select>`
- Multiselect wrappers: 2 files → shadcn `<FormField>` + custom or standard select
- Combobox wrappers: 1 file → shadcn `<FormField>` + `@saleor/dynamic-combobox`
- Toggle wrappers: 1 file → shadcn `<FormField>` + `<Switch>`

**QA Scenarios**:

- [ ] All forms in affected apps still submit correctly
- [ ] Validation errors display correctly
- [ ] No visual regression in form layouts
- [ ] `@saleor/react-hook-form-macaw` is removed from package.json

**Acceptance**: All 29 files migrated. Package removed. All app tests pass.

### Task 3.3: Replace @saleor/apps-ui

**What**: Replace the apps-ui shared package (65 files) with Saleor registry blocks.

**Steps**:

1. Read current components: `packages/ui/src/*.tsx`
2. For each component:
   - **Layout** (30+ files) → `@saleor/layout` registry block
   - **TextLink** (14 files) → `@saleor/text-link` registry block (or just `<a>` with Tailwind)
   - **Breadcrumbs** (5 files) → `@saleor/breadcrumbs` registry block (or shadcn Breadcrumb)
   - **Other** (remaining) → evaluate: standard shadcn or registry block
3. Install blocks: `npx shadcn add @saleor/layout @saleor/text-link @saleor/breadcrumbs`
4. Migrate files to use local components instead of `@saleor/apps-ui`
5. Remove `@saleor/apps-ui` from workspace

**QA Scenarios**:

- [ ] All app layouts render correctly
- [ ] Navigation links work
- [ ] Breadcrumbs show correct hierarchy
- [ ] `@saleor/apps-ui` removed from package.json

**Acceptance**: All 65 files migrated. Package removed. All app tests pass.

### Task 3.4: Run Box Codemod in Dashboard

**What**: Apply the Box→div codemod to saleor-dashboard.

**Steps**:

1. Run codemod in dry-run mode first:
   ```bash
   npx jscodeshift --dry --print -t tools/codemods/box-to-div/transform.ts src/
   ```
2. Review dry-run output. Categorize:
   - Auto-transformed (Tier 1+2): expect ~350 of 463 files
   - Manual TODO (Tier 3): expect ~110 files
3. Run codemod for real:
   ```bash
   npx jscodeshift -t tools/codemods/box-to-div/transform.ts src/
   ```
4. Run `pnpm lint --fix` to clean up formatting
5. Run `pnpm check-types` to catch any type errors
6. Manually review a sample of transformed files (at least 20)
7. Create a tracking issue for remaining TODO files

**QA Scenarios**:

- [ ] Codemod runs without crashing
- [ ] Auto-transformed files build correctly
- [ ] Visual spot-check: 5 random pages look correct
- [ ] Type checking passes
- [ ] TODO comments are present in Tier 3 files

**Acceptance**: ≥70% of Box usages auto-migrated. Remaining files have TODO comments and a tracking issue.

### Task 3.5: Run Box Codemod in Apps

**What**: Apply the Box→div codemod to the apps monorepo.

**Steps**: Same as Task 3.4 but scoped to apps monorepo. Smaller scope (fewer Box usages in apps).

**QA Scenarios**: Same as Task 3.4.

**Acceptance**: ≥70% of Box usages in apps auto-migrated.

### Task 3.6: Migrate Dashboard High-Value Pages

**What**: Migrate the configuration/settings pages and list pages in saleor-dashboard to shadcn.

**Steps**:

1. Identify all configuration pages (search for ConfigurationPage component usage)
2. For each page:
   - Replace macaw-ui components with shadcn equivalents
   - Use `@saleor/config-page` block for layout
   - Follow the migration guide (Task 3.1)
3. Repeat for list pages using `@saleor/list-page` block

**QA Scenarios**:

- [ ] Each migrated page looks identical to before
- [ ] All page functionality works (forms, navigation, actions)
- [ ] Playwright tests pass for migrated pages

**Acceptance**: All configuration and list pages migrated and visually identical.

---

## Phase 4: Sunset macaw-ui

**Goal**: Remove macaw-ui dependency from all consumers.
**Duration**: 1-2 days (after Phase 3 reaches 100% migration)
**Dependencies**: All macaw-ui imports removed from all consumers

### Task 4.1: Verify Zero macaw-ui Imports

**What**: Confirm no consumer still imports from macaw-ui.

**Steps**:

1. In saleor-dashboard:
   ```bash
   grep -r "@saleor/macaw-ui" src/ --include="*.tsx" --include="*.ts" | wc -l
   ```
   Expected: 0
2. In apps monorepo:
   ```bash
   grep -r "@saleor/macaw-ui" apps/ packages/ --include="*.tsx" --include="*.ts" | wc -l
   ```
   Expected: 0
3. If any remain, create tracking issues for the remaining files.

**QA Scenarios**:

- [ ] Zero macaw-ui imports in dashboard
- [ ] Zero macaw-ui imports in apps
- [ ] No runtime references to macaw-ui CSS variables (check for `--mu-` in browser DevTools)

**Acceptance**: Grep returns 0 results in all consumers.

### Task 4.2: Remove macaw-ui Dependencies

**What**: Uninstall macaw-ui from all consumers.

**Steps**:

1. In saleor-dashboard:
   ```bash
   pnpm remove @saleor/macaw-ui
   ```
   Also check for `@saleor/macaw-ui-next` (the dual-package situation):
   ```bash
   pnpm remove @saleor/macaw-ui-next
   ```
2. Remove the CSS variable bridge file (`src/styles/theme-bridge.css`) — no longer needed
3. Remove the dark mode bridge code
4. Remove `import "@saleor/macaw-ui/style"` from entry point
5. Remove `<ThemeProvider>` from macaw-ui (keep only the app's own theme logic)
6. In apps monorepo: same removals per app
7. Run full build + test suite for all consumers

**QA Scenarios**:

- [ ] `pnpm build` succeeds in all consumers
- [ ] All tests pass
- [ ] No runtime errors about missing macaw-ui modules
- [ ] Bundle size decreased (macaw-ui + Vanilla Extract removed)

**Acceptance**: macaw-ui is fully removed. All consumers build and pass tests.

### Task 4.3: Archive macaw-ui Repository

**What**: Mark macaw-ui as archived/deprecated.

**Steps**:

1. Update macaw-ui `README.md`:

   ```markdown
   # ⚠️ DEPRECATED — Use [Saleor UI Registry](https://github.com/saleor/saleor-ui-registry) instead

   This package is no longer maintained. Saleor's design system is now distributed
   via a shadcn-compatible registry.

   ## Migration Guide

   See [Migration Guide](link-to-guide)
   ```

2. Publish a final npm release with the deprecation notice:
   ```bash
   npm deprecate @saleor/macaw-ui "Use @saleor shadcn registry instead. See https://..."
   ```
3. Archive the GitHub repo (Settings → Archive)

**QA Scenarios**:

- [ ] `npm info @saleor/macaw-ui` shows deprecation message
- [ ] GitHub repo is archived (read-only)
- [ ] Registry repo README links back to migration guide

**Acceptance**: macaw-ui is formally deprecated and archived. Registry is the sole source of truth.

---

## Final Verification Wave

After all phases complete:

1. **Full build verification**: All consumers build from clean install
2. **Full test suite**: All unit + integration + E2E tests pass
3. **Visual regression**: Full Chromatic/Playwright visual comparison against pre-migration baseline
4. **Bundle size audit**: Confirm macaw-ui + Vanilla Extract removed from bundles
5. **Performance check**: No regression in Lighthouse/Core Web Vitals scores
6. **Developer experience**: Run through the "new developer" flow — clone, install, add component, style it

---

## Appendix A: Token Mapping Reference

### Standard shadcn tokens (from Saleor theme)

| shadcn token               | macaw-ui source                           | Used for               |
| -------------------------- | ----------------------------------------- | ---------------------- |
| `--background`             | `colors.background.default1`              | Page background        |
| `--foreground`             | `colors.foreground.default1`              | Default text           |
| `--primary`                | `colors.background.buttonDefaultPrimary`  | Primary buttons, links |
| `--primary-foreground`     | `colors.foreground.buttonDefaultPrimary`  | Text on primary        |
| `--destructive`            | `colors.background.buttonCriticalPrimary` | Destructive actions    |
| `--destructive-foreground` | `colors.foreground.buttonCriticalPrimary` | Text on destructive    |
| `--muted`                  | `colors.background.default2`              | Muted backgrounds      |
| `--muted-foreground`       | `colors.foreground.default2`              | Muted text             |
| `--accent`                 | `colors.background.accent1`               | Highlighted items      |
| `--accent-foreground`      | `colors.foreground.accent1`               | Text on accent         |
| `--border`                 | `colors.border.default1`                  | Borders                |
| `--input`                  | `colors.border.default1`                  | Input borders          |
| `--ring`                   | `colors.border.accent1`                   | Focus rings            |
| `--card`                   | `colors.background.default1`              | Card backgrounds       |
| `--card-foreground`        | `colors.foreground.default1`              | Card text              |
| `--popover`                | `colors.background.default1`              | Popover backgrounds    |
| `--popover-foreground`     | `colors.foreground.default1`              | Popover text           |
| `--secondary`              | `colors.background.default2`              | Secondary buttons      |
| `--secondary-foreground`   | `colors.foreground.default2`              | Secondary button text  |

### Custom Saleor extensions

| Custom token                    | macaw-ui source               | Used for              |
| ------------------------------- | ----------------------------- | --------------------- |
| `--info`                        | `colors.background.info1`     | Info alerts/badges    |
| `--info-foreground`             | `colors.foreground.info1`     | Info text             |
| `--success`                     | `colors.background.success1`  | Success alerts/badges |
| `--success-foreground`          | `colors.foreground.success1`  | Success text          |
| `--warning`                     | `colors.background.warning1`  | Warning alerts/badges |
| `--warning-foreground`          | `colors.foreground.warning1`  | Warning text          |
| `--surface-critical`            | `colors.background.critical1` | Critical surfaces     |
| `--surface-critical-foreground` | `colors.foreground.critical1` | Critical text         |

### Spacing scale mapping (macaw-ui → Tailwind)

Both use 4px base. Direct 1:1 mapping:

| macaw-ui key | Value | Tailwind class |
| ------------ | ----- | -------------- |
| `0.5`        | 2px   | `0.5`          |
| `1`          | 4px   | `1`            |
| `1.5`        | 6px   | `1.5`          |
| `2`          | 8px   | `2`            |
| `3`          | 12px  | `3`            |
| `4`          | 16px  | `4`            |
| `5`          | 20px  | `5`            |
| `6`          | 24px  | `6`            |
| `8`          | 32px  | `8`            |
| `10`         | 40px  | `10`           |
| `12`         | 48px  | `12`           |

### Breakpoint mapping (sprinkles → Tailwind)

| Sprinkles key | macaw-ui breakpoint | Tailwind prefix               |
| ------------- | ------------------- | ----------------------------- |
| `mobile`      | default (0px)       | (none — mobile-first default) |
| `tablet`      | `768px`             | `md:`                         |
| `desktop`     | `1024px`            | `lg:`                         |

---

## Appendix B: Codemod Tier Examples

### Tier 1 — Static Literals (auto-transform ✅)

```tsx
// Before
<Box display="flex" flexDirection="column" gap={4} padding={2}>
  <Box as="span" color="default1">Hello</Box>
</Box>

// After
<div className="flex flex-col gap-4 p-2">
  <span className="text-foreground">Hello</span>
</div>
```

### Tier 2 — Responsive Props (auto-transform ✅)

```tsx
// Before
<Box
  display={{ mobile: "none", desktop: "flex" }}
  padding={{ mobile: 2, tablet: 4, desktop: 6 }}
>

// After
<div className="hidden lg:flex p-2 md:p-4 lg:p-6">
```

### Tier 3 — State Props (manual migration ❌)

```tsx
// Before
<Box
  color={{ default: "default1", hover: "accent1" }}
  borderColor={{ default: "default1", focused: "accent1" }}
>

// After (codemod output — needs manual work)
{/* TODO: manual migration needed
  Original props:
    color={{ default: "default1", hover: "accent1" }}
    borderColor={{ default: "default1", focused: "accent1" }}
  Suggested Tailwind:
    className="text-foreground hover:text-accent-foreground border-border focus:border-ring"
*/}
<Box color={{ default: "default1", hover: "accent1" }} borderColor={{ default: "default1", focused: "accent1" }}>
```

---

## Appendix C: shadcn Registry JSON Reference

### Custom Registry URL

Consumer `components.json`:

```json
{
  "registries": {
    "@saleor": "https://registry.saleor.com/r"
  }
}
```

### Install commands

```bash
# Standard shadcn components (styled by Saleor theme via CSS vars)
npx shadcn add button input select dialog sheet badge tooltip checkbox switch radio-group toggle accordion popover skeleton separator

# Saleor custom components
npx shadcn add @saleor/dynamic-combobox
npx shadcn add @saleor/dynamic-multiselect

# Saleor block components
npx shadcn add @saleor/config-page
npx shadcn add @saleor/list-page
npx shadcn add @saleor/detail-page
npx shadcn add @saleor/layout
npx shadcn add @saleor/breadcrumbs

# Saleor theme
npx shadcn add @saleor/style
```
