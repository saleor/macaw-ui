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
        paddingY: 1.5,
        paddingX: 2,
      }),
      medium: sprinkles({
        paddingY: 2,
        paddingX: 2,
      }),
      large: sprinkles({
        paddingY: 3,
        paddingX: 3,
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
      marginRight: 2,
    }),
  ],
});

export type InputContainerVariants = RecipeVariants<typeof inputContainer>;
