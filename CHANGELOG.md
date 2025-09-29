# @saleor/macaw-ui

## 1.3.4

### Patch Changes

- 994b5d3: Doubled the padding on the tooltip component

## 1.3.3

### Patch Changes

- 0ccafa0: Fix Radio indicator for very long content

## 1.3.2

### Patch Changes

- be00c9f: Add Geist Mono font

## 1.3.1

### Patch Changes

- 7bc384c: Fix Geist font imports

## 1.3.0

### Minor Changes

- 2d146f6: **Icons deprecation and migration to Lucide React**

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

- 2d146f6: Update Node.js version to 22.14. Drop support for Node.js 18. Update pnpm to 10.

### Patch Changes

- 2d146f6: Add new font - Geist

## 1.2.0

### Minor Changes

- 0e5554a: Update Node.js version to 22.14. Drop support for Node.js 18. Update pnpm to 10.

### Patch Changes

- 9bfac8b: Add new font - Geist
- eca6ef8: Icons now accept all `<svg>` element props, instead of limited set of properties (viewBox, className, size, disabled) as previously.

## 1.1.20

### Patch Changes

- b688072: All dropdowns in macaw now uses properly floating ui

## 1.1.19

### Patch Changes

- 5d424d2: You can now pass "multiple" as type to the Accordion component.

## 1.1.18

### Patch Changes

- 84e01e3: Temporary revert fix for floating ui due to failing e2e test on dashboard on React v17

## 1.1.17

### Patch Changes

- ae5605c: Now refs from floating-ui are properly set.
  Now useCombobox properly handles input value change
- 20ab9eb: Added `data-macaw-ui-component` attribute to: `Icon`, `Paragraph`, `RangeInput`, `Skeleton`, `Spinner` components

## 1.1.16

### Patch Changes

- c6175e3: Add workflow to check licenses and add missing LICENSE file (copy of CC-BY-4.0)
- 6f4b741: Modal.Content now accepts `dialogContentProps` that allows passing props to Radix `Dialog.Content` component

## 1.1.15

### Patch Changes

- 13af63b: Custom logic for highlighting index in Combobox and Select no more cause an error when used in datagrid cell

## 1.1.14

### Patch Changes

- ecffb8c: Macaw-ui now exports new Paragraph component that is Text displayed as block.

## 1.1.13

### Patch Changes

- e7b919c: Macaw-ui now exports Dashboard and GraphQL icons.

## 1.1.12

### Patch Changes

- 26d98e6: Help icon now has now light color applied when using dark mode and dark color applied when using light mode.

## 1.1.11

### Patch Changes

- 406af8d: Macaw-ui now exports a new Help icon.

## 1.1.10

### Patch Changes

- d8516d5: MacawUI engine has been changed to support Node 18. This means that MacawUI no longer throws an error when being installed in Dashboard.

## 1.1.9

### Patch Changes

- 6a51f52: You can now see ellipses in select when text width is too long.

## 1.1.8

### Patch Changes

- c89d56e: Checkboxes now have a semi-transparent background color on focus state, meaning that it is easier to differentiate states when using keyboard navigation.
- e577c41: You can now navigate on dropdown list. Dropdown stays close on focus.

## 1.1.7

### Patch Changes

- df82ca9: You can now see selected option in combobox dropdown when provided value does not match same referance with options
- 36a05eb: Skeleton component now by default has same height as text

## 1.1.6

### Patch Changes

- 9c969e2: You can now see start and end adornment in select input options

## 1.1.5

### Patch Changes

- 65a8f3f: ID passed to comobobox will now be passed as an attribute to dropdown list wrapper box

## 1.1.4

### Patch Changes

- c7b7d19: This change adds border-collapse to sprinkles as well as child selectors

## 1.1.3

### Patch Changes

- 52642a5: Prevent Tooltip to show empty content tooltip when there is no children or empty string

## 1.1.2

### Patch Changes

- 604c7a0: This change adds bold font weight to button component and lowers bold font weight from 700 to 600.

## 1.1.1

### Patch Changes

- f4443be: Fix empty build on npm

## 1.1.0

### Minor Changes

- fa11d14: Removed `typeSize` from `Box` and `sprinkles`. You should use `fontSize`, `letterSpacing` & `lineHeight` directly instead.

### Patch Changes

- 512c39b: Export radio group indicator
