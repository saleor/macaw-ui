# MacawUI example

Vite app that installs the packed library like a real consumer. CI builds it and runs Playwright against React 18 and 19.

```bash
pnpm install          # in the repo root
cd example
pnpm pack-lib         # build the library and pack it to macaw-ui.tgz
pnpm install
pnpm build && pnpm test
```
