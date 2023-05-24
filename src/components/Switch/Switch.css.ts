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
      gap: "s0.5",
      backgroundColor: "surfaceNeutralDepressed",
      borderRadius: 3,
      borderColor: "neutralHighlight",
      height: "s8",
      padding: "s0.5",
    }),
  ],
  defaultVariants: {},
});

export const switchChild = recipe({
  base: [
    sprinkles({
      height: "100%",
      padding: "s1",
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
          cursor: "not-allowed",
        },
      },
    },
  ],
});

export type SwitchVariants = RecipeVariants<typeof switchParent>;
