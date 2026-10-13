---
"@saleor/macaw-ui": major
---

Added React 19 support and dropped React 16 and 17.

**Breaking:** React 16 and 17 are no longer supported. The peer dependency ranges for `react`, `react-dom` and `@types/react-dom` are now `^18.0.0 || ^19.0.0`, and `@types/react` is now `^18.3.22 || ^19.0.0`. The build now imports `react/jsx-runtime` from your app's React instead of bundling React 18's copy. React 16.8–16.13 don't ship that file, and React 17 has no `exports` map, so strict ESM resolution (e.g. webpack 5) fails. The type declarations reference React types added in `@types/react` 18.3.22, so older 18.x types fail when `skipLibCheck` is off.

Other changes:

- Fixed a crash on React 19 (`Cannot read properties of undefined (reading 'ReactCurrentDispatcher')`), caused by React 18's `react/jsx-runtime` being bundled into the build.
- Type declarations now reference `React.JSX` instead of the global `JSX` namespace, which `@types/react` 19 removed.
- Upgraded Radix UI packages to React 19-compatible versions.
