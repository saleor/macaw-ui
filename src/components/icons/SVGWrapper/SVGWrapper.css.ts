import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

import { sprinkles } from "~/theme";

export const svgWrapper = recipe({
  base: [sprinkles({ color: "neutralTextPrimary" })],
  variants: {
    size: {
      small: {
        width: 20,
        height: 20,
      },
      medium: {
        width: 24,
        height: 24,
      },
      large: {
        width: 32,
        height: 32,
      },
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export type SCVWrapperVaraints = RecipeVariants<typeof svgWrapper>;
