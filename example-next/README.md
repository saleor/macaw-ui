# MacawUI Next.js example

Next.js App Router app that installs the packed library like a real consumer and renders every component from a Server Component. CI builds it and runs Playwright against both `next start` and `next dev` (dev evaluates modules one at a time and shows warnings, so it catches bugs the production build hides):

- JavaScript off: the server HTML contains every component
- JavaScript on: hydration has no errors and components respond
- Next's client reference manifest doesn't list `Box` or `Text`, so they render as Server Components

Dotted parts of client components (`Popover.Trigger`) are `undefined` in a Server Component, because it can't access properties of a client module's exports, so the page uses their flat exports (`PopoverTrigger`).

```bash
pnpm install          # in the repo root
cd example-next
pnpm pack-lib         # build the library and pack it to macaw-ui.tgz
pnpm install
pnpm build && pnpm test
```
