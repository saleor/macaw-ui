import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles } from "~/theme";

export const inputContainer = recipe({
  base: [
    sprinkles({
      position: "relative",
      display: "flex",
      alignItems: "center",
      color: "textNeutralDefault",
      width: "100%",
      borderRadius: 3,
      transition: "all",
      backgroundColor: {
        default: "interactiveNeutralHighlightDefault",
        hover: "interactiveNeutralHighlightFocused",
        focusWithin: "interactiveBrandHighlightFocused",
      },
    }),
  ],
  variants: {
    size: {
      small: sprinkles({
        paddingY: 4,
        paddingX: 5,
      }),
      medium: sprinkles({
        paddingY: 5,
        paddingX: 5,
      }),
      large: sprinkles({
        paddingY: 6,
        paddingX: 6,
      }),
    },
  },
});

export const input = recipe({
  base: [
    sprinkles({
      width: "100%",
      backgroundColor: "transparent",
      borderWidth: 0,
      outlineStyle: "none",
      padding: 0,
      color: {
        default: "textNeutralDefault",
        disabled: "textNeutralSubdued",
        placeholder: "textNeutralSubdued",
      },
    }),
  ],
});

export const searchIcon = recipe({
  base: [
    sprinkles({
      color: "textNeutralSubdued",
      marginRight: 5,
    }),
  ],
});

export type InputContainerVariants = RecipeVariants<typeof inputContainer>;
