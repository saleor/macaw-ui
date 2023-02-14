import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles } from "~/theme";

export const chip = recipe({
  base: [
    sprinkles({
      backgroundColor: "surfaceNeutralDepressed",
      borderRadius: 2,
    }),
  ],

  variants: {
    size: {
      small: sprinkles({
        paddingX: 2,
        paddingY: 1,
      }),
      medium: sprinkles({
        paddingX: 3,
        paddingY: 2,
      }),
      large: sprinkles({
        paddingX: 4,
        paddingY: 2,
      }),
    },
  },

  defaultVariants: {
    size: "medium",
  },
});

export type ChipVariants = RecipeVariants<typeof chip>;
