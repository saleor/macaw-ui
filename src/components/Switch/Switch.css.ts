import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles, vars } from "~/theme";

const {
  colors: {
    background: {
      surfaceNeutralPlain,
      interactiveBrandHighlightDefault,
      interactiveNeutralHighlightPressing,
    },
    foreground: { iconNeutralPlain, iconNeutralDefault, iconNeutralDisabled },
  },
  boxShadow: { interactiveDefaultFocused },
} = vars;

export const switchParent = recipe({
  base: [
    sprinkles({
      display: "flex",
      gap: 2,
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
        "&[data-state='unchecked']:focus-visible": {
          backgroundColor: interactiveNeutralHighlightPressing,
        },
        "&[data-state='unchecked'][disabled]": {
          color: iconNeutralDisabled,
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
