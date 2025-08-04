---
"@saleor/macaw-ui": minor
---

**BREAKING CHANGE: Icons deprecation and migration to Lucide React**

We are beginning the migration process from our custom icon set to Lucide React icons. This change improves maintainability and provides access to a more comprehensive, well-maintained icon library.

## What's Changed

### Phase 1 (This Release)

- **All 41 custom icons are now marked as deprecated** with JSDoc `@deprecated` comments
- Each deprecated icon includes:
  - Clear deprecation notice
  - Link to https://lucide.dev/ for finding replacements
  - Example showing the recommended Lucide React icon to use instead
- **Added `lucide-react` as an optional peer dependency**

### Migration Process

This is a **two-phase deprecation process**:

1. **Phase 1 (Current)**: Icons are deprecated but still functional

   - All existing code continues to work
   - Developers receive deprecation warnings in IDEs
   - `lucide-react` is an optional peer dependency

2. **Phase 2 (Next Major Version)**: Complete removal
   - All deprecated icons will be removed
   - `lucide-react` will become a required peer dependency
   - Breaking change for any code still using deprecated icons

### Migration Guide

Replace deprecated icons with their Lucide React equivalents:

```typescript
// Before (deprecated)
import { SearchIcon, CloseIcon, PlusIcon } from "@saleor/macaw-ui";

// After (recommended)
import { Search, X, Plus } from "lucide-react";
```

### Example Mappings

| Deprecated Icon     | Lucide React Replacement |
| ------------------- | ------------------------ |
| `ArrowDownIcon`     | `ChevronDown`            |
| `CloseIcon`         | `X`                      |
| `SearchIcon`        | `Search`                 |
| `PlusIcon`          | `Plus`                   |
| `EditIcon`          | `Edit`                   |
| `TrashBinIcon`      | `Trash2`                 |
| `ConfigurationIcon` | `Settings`               |

For a complete list of available icons, visit https://lucide.dev/

### Action Required

1. **Install lucide-react**: `npm install lucide-react`
2. **Update your imports** to use Lucide React icons
3. **Test your application** to ensure icons display correctly
4. **Remove deprecated icon usage** before the next major version

This migration ensures better long-term maintainability and access to a more comprehensive icon set.
