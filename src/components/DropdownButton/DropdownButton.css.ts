import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles } from "~/theme";

export const dropdownButton = recipe({
  base: [
    sprinkles({
      outlineStyle: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      placeItems: "center",
      padding: 0,
      cursor: "pointer",
      pointerEvents: {
        disabled: "none",
      },
      backgroundColor: {
        default: "surfaceNeutralHighlight",
        hover: "surfaceNeutralDepressed",
        focusVisible: "surfaceNeutralDepressed",
        active: "interactiveNeutralHighlightPressing",
        disabled: "interactiveNeutralHighlightDisabled",
      },
      color: {
        default: "iconNeutralDefault",
        disabled: "iconNeutralDisabled",
      },
      borderStyle: "none",
    }),
  ],
  variants: {
    size: {
      small: sprinkles({
        borderRadius: 2,
        paddingX: 5,
        paddingY: 3,
        typeSize: "buttonSmall",
        fontWeight: "bodyMedium",
        lineHeight: "captionMedium",
        gap: 3,
      }),
      medium: sprinkles({
        height: 11,
        borderRadius: 3,
        paddingX: 5,
        paddingY: 4,
        typeSize: "buttonMedium",
        fontWeight: "bodyMedium",
        gap: 3,
      }),
      large: sprinkles({
        height: 13,
        borderRadius: 3,
        paddingX: 6,
        paddingY: 5,
        typeSize: "buttonLarge",
        fontWeight: "bodyMedium",
        gap: 5,
      }),
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export type DropdownButtonVariants = RecipeVariants<typeof dropdownButton>;
