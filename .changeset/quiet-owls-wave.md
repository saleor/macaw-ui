---
"@saleor/macaw-ui": minor
---

Added React 19 support. React 18's `react/jsx-runtime` is no longer bundled into the build (it crashed on React 19 with `Cannot read properties of undefined (reading 'ReactCurrentDispatcher')`), type declarations now reference `React.JSX` instead of the global `JSX` namespace, peer dependency ranges include React 19, and Radix UI packages are upgraded to React 19-compatible versions.
