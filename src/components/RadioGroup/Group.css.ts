import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "~/theme";

export const fieldset = sprinkles({
  padding: "s0",
  margin: "s0",
  borderWidth: 0,
});

export const groupLabelRecipe = recipe({
  base: [
    sprinkles({
      padding: "s0",
      margin: "s0",
      color: "textNeutralSubdued",
    }),
  ],
  variants: {
    size: {
      small: sprinkles({
        typeSize: "captionSmall",
      }),
      medium: sprinkles({
        typeSize: "captionMedium",
      }),
      large: sprinkles({
        typeSize: "captionLarge",
      }),
    },
    disabled: {
      true: sprinkles({
        color: "textNeutralDisabled",
      }),
    },
    error: {
      true: sprinkles({
        color: "textCriticalSubdued",
      }),
    },
  },
  defaultVariants: {
    size: "medium",
  },
});
export type RadioGroupVariants = RecipeVariants<typeof groupLabelRecipe>;
