import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "~/theme";

export const fieldset = sprinkles({
  padding: 0,
  margin: 0,
  borderWidth: 0,
});

export const groupLabelRecipe = recipe({
  base: [
    sprinkles({
      padding: 0,
      margin: 0,
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
        color: "defaultDisabled",
      }),
    },
    error: {
      true: sprinkles({
        color: "critical2",
      }),
      false: sprinkles({
        color: "default2",
      }),
    },
  },
  defaultVariants: {
    size: "medium",
  },
});
export type RadioGroupVariants = RecipeVariants<typeof groupLabelRecipe>;
