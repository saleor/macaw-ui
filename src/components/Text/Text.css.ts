import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

import { sprinkles } from "../../theme";

export const text = recipe({
  base: [sprinkles({ fontFamily: "body" })],

  variants: {
    variant: {
      body1: sprinkles({ lineHeight: "text" }),
      body2: sprinkles({ lineHeight: "text" }),
    },
    size: {
      small: {},
      medium: {},
      large: {},
    },
    fontWeight: {
      light: sprinkles({ fontWeight: "light" }),
      regular: sprinkles({ fontWeight: "regular" }),
      medium: sprinkles({ fontWeight: "medium" }),
    },
  },

  compoundVariants: [
    {
      variants: {
        variant: "body1",
        size: "large",
      },
      style: sprinkles({ fontSize: 6 }),
    },
    {
      variants: {
        variant: "body1",
        size: "medium",
      },
      style: sprinkles({ fontSize: 5 }),
    },
    {
      variants: {
        variant: "body1",
        size: "small",
      },
      style: sprinkles({ fontSize: 4 }),
    },

    {
      variants: {
        variant: "body2",
        size: "large",
      },
      style: sprinkles({ fontSize: 4 }),
    },
    {
      variants: {
        variant: "body2",
        size: "medium",
      },
      style: sprinkles({ fontSize: 3 }),
    },
    {
      variants: {
        variant: "body2",
        size: "small",
      },
      style: sprinkles({ fontSize: 2 }),
    },
  ],

  defaultVariants: {
    variant: "body1",
    size: "medium",
    fontWeight: "regular",
  },
});

export type TextVariants = RecipeVariants<typeof text>;
