import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles, vars } from "~/theme";

const {
  colors: {
    background: {
      surfaceNeutralPlain,
      interactiveNeutralHighlightDefault,
      interactiveNeutralHighlightHovering,
      interactiveNeutralHighlightPressing,
      interactiveNeutralHighlightFocused,
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
          backgroundColor: interactiveNeutralHighlightHovering,
        },
        "&[data-state='unchecked']:active": {
          backgroundColor: interactiveNeutralHighlightPressing,
        },
        "&[data-state='unchecked']:focus-visible": {
          backgroundColor: interactiveNeutralHighlightFocused,
        },
        "&[data-state='unchecked']": {
          backgroundColor: interactiveNeutralHighlightDefault,
          borderStyle: "none",
          color: iconNeutralPlain,
        },
        "&[disabled]": {
          color: iconNeutralDisabled,
          pointerEvents: "none",
        },
      },
    },
  ],
});

export type SwitchVariants = RecipeVariants<typeof switchParent>;
