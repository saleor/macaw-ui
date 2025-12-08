---
"@saleor/macaw-ui": patch
---

Fixed crashes caused by `useAutoHeightTextarea` used by Textarea component. It now makes calculations in `useLayoutEffect`, which should prevent timing issues with React 18+
