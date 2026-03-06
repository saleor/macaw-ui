---
"@saleor/macaw-ui": major
---

Removed custom re-exported icons from Lucide. Now Macaw internally uses Lucide and expects it to be installed as peer dependency.

Migration:

- Upgrade to latest Macaw 1.x
- Find all imports of icons - they should be deprecated. Each icon has corresponding Lucide icon mentioned in deprecation notice
- Replace all imports from Macaw to `"lucide-react"`
- Install Macaw 2.x
