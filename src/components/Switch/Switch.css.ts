import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles, vars } from "~/theme";

const {
  colors: {
    background: {
      surfaceNeutralPlain,
      interactiveBrandHighlightDefault,
      interactiveNeutralHighlightPressing,
    },
    foreground: { iconNeutralPlain, iconNeutralDefault },
  },
  boxShadow: { interactiveDefaultFocused },
} = vars;

export const switchParent = recipe({
  base: [
    sprinkles({
      backgroundColor: "surfaceNeutralDepressed",
      borderRadius: 3,
      borderColor: "neutralHighlight",
      height: 11,
      padding: 2,
      cursor: "pointer",
    }),
  ],
  defaultVariants: {},
});

export const switchChild = recipe({
  base: [
    sprinkles({
      height: "100%",
      padding: 3,
      borderRadius: 2,
      cursor: "pointer",
      outlineStyle: "none",
    }),
    {
      selectors: {
        "&[data-state='checked']": {
          backgroundColor: surfaceNeutralPlain,
          borderStyle: "none",
          boxShadow: interactiveDefaultFocused,
          color: iconNeutralDefault,
        },

        "&[data-state='unchecked']:hover": {
          backgroundColor: interactiveBrandHighlightDefault,
        },
        "&[data-state='unchecked']:active": {
          backgroundColor: interactiveNeutralHighlightPressing,
        },
        "&[data-state='unchecked']:focus": {
          backgroundColor: interactiveNeutralHighlightPressing,
        },
        "&[data-state='unchecked']": {
          backgroundColor: "transparent",
          borderStyle: "none",
          color: iconNeutralPlain,
        },
      },
    },
  ],
});

export type SwitchVariants = RecipeVariants<typeof switchParent>;
