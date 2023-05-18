import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles } from "~/theme";

export const chip = recipe({
  base: [
    sprinkles({
      backgroundColor: "surfaceNeutralDepressed",
      borderRadius: 2,
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      lineHeight: 1,
      borderColor: "neutralHighlight",
      borderWidth: 1,
      borderStyle: "solid",
    }),
  ],

  variants: {
    size: {
      small: sprinkles({
        paddingX: "s1",
        height: "s4",
      }),
      medium: sprinkles({
        paddingX: "s1",
        height: "s5",
      }),
      large: sprinkles({
        paddingX: "s1.5",
        height: "s6",
      }),
    },
  },

  defaultVariants: {
    size: "medium",
  },
});

export type ChipVariants = RecipeVariants<typeof chip>;
