import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

import { sprinkles, vars } from "~/theme";

export const svgWrapper = recipe({
  base: [sprinkles({ color: "neutralTextPrimary" })],
  variants: {
    size: {
      small: {
        width: vars.space[6],
        height: vars.space[6],
      },
      medium: {
        width: vars.space[8],
        height: vars.space[8],
      },
      large: {
        width: vars.space[10],
        height: vars.space[10],
      },
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export type SCVWrapperVaraints = RecipeVariants<typeof svgWrapper>;
