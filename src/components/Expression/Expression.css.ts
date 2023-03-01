import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles } from "~/theme";

export const dropdownContent = sprinkles({
  paddingX: 4,
  paddingTop: 5,
  paddingBottom: 4,
  color: "textNeutralDefault",
  fontSize: "bodySmall",
  fontFamily: "body",
  backgroundColor: "surfaceNeutralPlain",
  borderWidth: 1,
  borderTopWidth: 0,
  borderStyle: "solid",
  borderColor: "neutralPlain",
  boxShadow: "interactiveDefaultFocused",
});

export const dropdownItem = sprinkles({
  paddingY: 3,
  outlineStyle: "none",
  cursor: "pointer",
});

export const dropdownTrigger = recipe({
  base: [
    sprinkles({
      fontSize: "bodySmall",
      backgroundColor: "transparent",
      borderWidth: 0,
      outlineStyle: "none",
      cursor: "pointer",
    }),
  ],
  variants: {
    variant: {
      operand: sprinkles({ color: "textNeutralDefault" }),
      condition: sprinkles({ color: "textBrandSubdued" }),
    },
  },
});

export const input = recipe({
  base: [
    sprinkles({
      borderWidth: 0,
      padding: 0,
      color: "textNeutralDefault",
      fontSize: "bodySmall"
    })
  ]
})

export type DropdownTriggerVariants = RecipeVariants<typeof dropdownTrigger>;
