import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

import { vars } from "~/theme";

export const svgWrapper = recipe({
  variants: {
    size: {
      small: {
        width: vars.space[7],
        height: vars.space[7],
      },
      medium: {
        width: vars.space[8],
        height: vars.space[8],
      },
      large: {
        width: vars.space[9],
        height: vars.space[9],
      },
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export type SCVWrapperVaraints = RecipeVariants<typeof svgWrapper>;
