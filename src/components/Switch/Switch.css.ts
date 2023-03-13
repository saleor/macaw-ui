import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles, vars } from "~/theme";

const {
  colors: {
    background: { surfaceNeutralPlain },
    foreground: { iconNeutralPlain, iconNeutralDefault },
  },
  boxShadow: { interactiveDefaultFocused },
} = vars;

export const switchParent = recipe({
  base: [
    sprinkles({
      backgroundColor: "surfaceNeutralHighlight",
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
    }),
    {
      selectors: {
        "&[data-state='checked']": {
          backgroundColor: surfaceNeutralPlain,
          borderStyle: "none",
          boxShadow: interactiveDefaultFocused,
          color: iconNeutralDefault,
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
