---
"@saleor/macaw-ui": minor
---

Fixed importing macaw-ui from React Server Components (e.g. Next.js App Router). Before, importing anything from the package in a Server Component, even `Box`, crashed with `TypeError: createContext is not a function`, because the bundle calls `React.createContext` when it loads. You can remove any patch that adds `"use client"` to `dist/index.mjs`.

The build now ships one file per module, and only interactive components are marked `"use client"`:

- Presentational components (`Box`, `Text`, `Paragraph`, `Button`, `Chip`, `Divider`, `Skeleton`, `Spinner`, `Avatar`, `List`, `List.Item`, `SearchInput`, `DropdownButton`, `ThemeProvider`) render as Server Components and add no JavaScript to the page.
- Interactive components (`Input`, `Select`, `Combobox`, `Modal`, `Popover`, ...) are Client Components. They can be rendered from Server Components and are still server-side rendered.
- Compound parts now also have flat exports: `PopoverTrigger` for `Popover.Trigger`, `ModalContent` for `Modal.Content`, and so on for every `X.Y`. Use them in Server Components: there, the dotted parts of client components are `undefined`, because React doesn't allow accessing properties of a client module's exports. The dotted API is unchanged.
- `Select`, `Combobox`, `DynamicCombobox`, `Multiselect` and `DynamicMultiselect` now show their empty state for any children, not only `NoOptions`. Children passed from a Server Component arrive as lazy references, so checking for the `NoOptions` type never matched there.

The package now declares `"sideEffects": ["*.css"]`, so bundlers drop the components you don't use. An app that renders only `Box` ships about 24 KB gzipped of macaw instead of about 90 KB, and a Next.js (Turbopack) page ships only the client components it renders, not the whole library.

`ThemeProvider` now renders the theme's CSS variables, so server-rendered pages paint in the right theme (including `defaultTheme="defaultDark"`) before hydration instead of unstyled. Setting them yourself with `getCSSVariables` is no longer needed; existing setups keep working. It also no longer logs React 18's "useLayoutEffect does nothing on the server" warning.

Also fixed the `downshift: The ref prop "ref" from getMenuProps was not applied correctly` dev warning logged by `Select`, `Combobox`, `DynamicCombobox`, `Multiselect` and `DynamicMultiselect`.

The public entry points (`@saleor/macaw-ui`, `@saleor/macaw-ui/style`) are unchanged.
