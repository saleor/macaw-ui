# 00003 - Color tokens specification

# Status

Decided

# Context

Since we develop our design system, there is a need to have tokens for colors
with clearly defined relationships between them, so the user will be able to use them accordingly to their purpose.

# Decision

We use two kind of tokens:

- design system - more generic, define rules of design system
- semantic - defines specific semantic elements (eg. button)

#### 1. We use the following structure for design system token:

`--mu-[type]-[element]-[role]-[layer]-[state?]`

where:

- `type` is color
- `element` is one of: background | text | border
- `role` is one of: default | critical | info | success | warning | accent
- `layer` is one of: 1 -> 2 -> 3 | disabled
- `state` is one of: hover | focused

#### 2. We use the following structure for semantic token:

`--mu-[type]-[element]-[component]-[role]-[variant]-[state?]`

where:

- `type` is color
- `element` is one of: background | text | border
- `component` is: button (for now we support just this one)
- `role` is one of: default | critical | info | success | warning | accent
- `variant` is one of: primary | secondary | tertiary
- `state` is one of: hover | focused

#### 3. Inputs / form elements

Inputs always have a transparent background, always.

#### 4. Buttons

We have dedicated tokens for buttons (semantic).

# Consequences

- Contrast of inputs is defined only by borders or text colors.
- Button-related tokens are a bit different than the others, they have own ones.

# Notes

- Reference RFC: https://github.com/saleor/macaw-ui/issues/594
- Button is a semantic element of the UI and it's quite difficult to style it from the token perspective. We can have a dedicated token for it.
- Semantic elements in the UI may evolve to have their own tokens (like button)
