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
        paddingY: "s1.5",
        paddingX: "s2",
      }),
      medium: sprinkles({
        paddingY: "s2",
        paddingX: "s2",
      }),
      large: sprinkles({
        paddingY: "s3",
        paddingX: "s3",
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
      padding: "s0",
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
      marginRight: "s2",
    }),
  ],
});

export type InputContainerVariants = RecipeVariants<typeof inputContainer>;
