import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

import { vars } from "~/theme";

export const variants = {
  size: {
    small: {
      width: vars.space.s4,
      height: vars.space.s4,
    },
    medium: {
      width: vars.space.s5,
      height: vars.space.s5,
    },
    large: {
      width: vars.space.s6,
      height: vars.space.s6,
    },
    fill: {},
  },
} as const;

export const svgWrapper = recipe({
  variants,
  defaultVariants: {
    size: "medium",
  },
});

export type SVGWrapperVariants = RecipeVariants<typeof svgWrapper>;
