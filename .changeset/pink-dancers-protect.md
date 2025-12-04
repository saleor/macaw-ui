---
"@saleor/macaw-ui": patch
---

React Strict mode was enabled in Storybook for development to detect possible issues earlier. This might mean some components might have "bugs" in development, but not in production build due to additional rendering done in Strict mode. Refer to React docs for more details
