# Macaw UI

## Project Overview

MacawUI is Saleor's React component library focused on dashboard-like interfaces (admin panels, cloud consoles, apps). It's NOT designed for end-user interfaces like storefronts. The library uses Vanilla Extract for styling and Radix UI primitives for accessible component foundations.

## Essential Commands

### Development

```bash
pnpm dev              # Start Storybook on port 6006
pnpm dev:docs         # Start Storybook in docs mode
pnpm watch            # Build in watch mode (useful for Dashboard development)
```

### Testing & Quality

```bash
pnpm test             # Run Vitest tests
pnpm check-types      # Run TypeScript type checking
pnpm lint             # Lint and auto-fix TypeScript/JavaScript files
```

### Building

```bash
pnpm build            # Type check and build library for production
pnpm build-storybook  # Build Storybook static site with docs
pnpm bundle-visualizer # Build with bundle size visualization
```

### Changesets (Version Management)

```bash
pnpm change:add       # Add a changeset describing your changes
```

## Architecture

### Styling System

- **Vanilla Extract**: Type-safe CSS-in-TypeScript. All styles are in `.css.ts` files
- **Sprinkles**: Utility-first styling system defined in `src/theme/sprinkles.css.ts` providing responsive props (padding, margin, grid, etc.)
- **Theme Contract**: CSS variables defined in `src/theme/contract.css.ts`, implemented by themes in `src/theme/themes/`
- **Box Component**: Foundation component (`src/components/Box`) that accepts sprinkles props. Most components extend Box via `PropsWithBox`

### Theming

- Two built-in themes: `defaultLight` and `defaultDark` (see `src/theme/themes/`)
- Themes use CSS variables following the contract
- Users should NOT override CSS variables directly (breaks theme consistency)
- `ThemeProvider` wraps app and provides theme context
- Use `useTheme()` hook to access/change theme programmatically
- `ThemeProvider` renders the theme variables as a `<style>` (`:root{...}`), so server-rendered pages are themed before hydration; it also sets them on `<html>` after hydration

### Component Structure

Components follow this pattern:

```
ComponentName/
├── ComponentName.tsx        # Main component implementation
├── ComponentName.css.ts     # Vanilla Extract styles
├── ComponentName.stories.tsx # Storybook stories
├── index.ts                 # Exports
└── utils.ts (optional)      # Component-specific utilities
```

- Most components use Radix UI primitives (@radix-ui/react-\*)
- Components extend `Box` to inherit sprinkles styling props
- Export from component index, then from `src/components/index.ts`
- Icons use `lucide-react` (optional peer dependency)

### React Server Components

The build keeps one output file per source module, so each module is a Server or Client Component on its own.

- Start a file with `"use client";` if it uses client-only React APIs (state, effects, refs, context), Radix, downshift or floating-ui, or attaches its own event handlers
- Compound `index.ts` files (`Object.assign(Root, { Trigger, ... })`) need it too when `Root` is a client component: a server module can't assign properties onto a client reference
- Give every dotted part of a compound component a flat export too (`Popover.Trigger` → `PopoverTrigger`): Server Components can only use those
- Don't detect children by type (`child.type === NoOptions`): children passed from a Server Component arrive as lazy references
- Leave presentational components (`Box`, `Text`, `Button`, ...) without it so they render as Server Components
- `pnpm build` runs `scripts/check-dist.mjs`, which fails if a module reachable from a Server Component uses client-only APIs without the directive, or if the built modules import each other in a cycle
- `example-next/` renders every component from a Server Component and tests it with Playwright

### Path Aliases

- `~/` resolves to `src/` (configured in tsconfig and vite.config)
- Always use `~/` for internal imports (enforced by ESLint)

## Code Standards

### Import Order (ESLint enforced)

1. External packages
2. Built-in Node modules
3. Internal imports (`~/...`)
4. Parent imports (`../`)
5. Sibling imports (`./`)
6. CSS imports (last)

### TypeScript

- Strict mode enabled
- Target ES2021
- All components should use `forwardRef` where appropriate
- Use `PropsWithBox<>` for components that extend Box

### Styling

- Use Vanilla Extract recipes for component variants
- Media queries available: `tabletMediaQuery`, `desktopMediaQuery`
- Avoid inline styles; use sprinkles props or `.css.ts` files
- No `console` statements allowed (ESLint error)

### Testing

- Vitest with jsdom environment
- React Testing Library available
- Setup in `setupTest.ts` (extends expect with jest-dom matchers)
- Run tests before committing

## Key Concepts

### Dessert Box

Uses `@dessert-box/react` to merge Box-like sprinkles props with component props. This enables composition like:

```tsx
<Button padding={4} marginTop={2}>
  Click me
</Button>
```

### Component Registration

All components export from `src/components/index.ts` for single import point:

```tsx
import { Button, Input, Modal } from "@saleor/macaw-ui";
```

### Storybook

- Primary development environment
- Each component has `.stories.tsx` showing variants and use cases
- Stories are relaxed from strict TypeScript rules (see `.eslintrc.cjs` overrides)

## Dependencies Notes

- **React 18+** required (CI tests 18 and 19)
- **pnpm** is the package manager (version 10)
- **Node 20 or 22** required
- Icons from `lucide-react` are optional peer dependency

## Pre-commit Hooks

Husky runs lint-staged which:

1. Runs `eslint --fix` on TS/JS files
2. Runs `prettier --write` on all files

Ensure code passes before committing.

## Publishing Flow

Managed via Changesets:

1. Make changes
2. Run `pnpm change:add` to document changes
3. CI handles versioning and publishing to npm

## ADRs (Architecture Decision Records)

See `adr/` directory for key decisions:

- **00001**: MacawUI targets dashboard-like interfaces only
- **00002**: Theming is library-controlled; users shouldn't override tokens
- **00003**: Color token specifications
