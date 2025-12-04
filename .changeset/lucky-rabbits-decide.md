---
"@saleor/macaw-ui": patch
---

CSS Variables from macaw-ui are now set in useLayoutEffect hook, instead of render function, which should resolve issues with React timing. Previously macaw-ui was breaking React contract by making updates in render function, making it not pure.
