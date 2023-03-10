import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles } from "~/theme";

export const inputContainer = recipe({
  base: [
    sprinkles({
      position: "relative",
      display: "flex",
      alignItems: "center",
      color: "textNeutralDefault",
      borderRadius: 3,
      paddingX: 4,
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
        paddingY: 5,
      }),
      medium: sprinkles({
        paddingY: 5,
      }),
      large: sprinkles({
        paddingY: 6,
      }),
    },
    active: {
      true: sprinkles({
        backgroundColor: "interactiveBrandHighlightFocused",
      }),
    },
  },
});

export const input = recipe({
  base: [
    sprinkles({
      width: "100%",
      backgroundColor: "transparent",
      fontSize: "bodyMedium",
      lineHeight: "bodyMedium",
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
      width: 7,
      height: 7,
      marginRight: 5,
    }),
  ],
});

export type InputContainerVariants = RecipeVariants<typeof inputContainer>;
