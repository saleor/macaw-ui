# @saleor/macaw-ui

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
