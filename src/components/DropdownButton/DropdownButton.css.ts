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
      cursor: {
        default: "pointer",
        disabled: "not-allowed",
      },
      borderColor: {
        default: "transparent",
        focus: "accent1",
        active: "accent1",
      },
      borderStyle: "solid",
      borderWidth: 1,
      color: {
        default: "default1",
        disabled: "defaultDisabled",
      },
    }),
  ],
  variants: {
    variant: {
      contained: sprinkles({
        backgroundColor: {
          default: "default2",
          hover: "default1Hovered",
          focusVisible: "default1Focused",
          active: "default1Pressed",
          disabled: "defaultDisabled",
        },
      }),
      text: sprinkles({
        backgroundColor: {
          default: "default2",
          // TODO: do we need this?
          hover: "default1Hovered",
          focusVisible: "default1Focused",
          active: "default1Pressed",
          disabled: "defaultDisabled",
        },
      }),
    },
    size: {
      small: sprinkles({
        borderRadius: 2,
        paddingX: 2,
        paddingY: 1,
        typeSize: "buttonSmall",
        fontWeight: "bodyMedium",
        lineHeight: "captionMedium",
        gap: 3,
      }),
      medium: sprinkles({
        height: 8,
        borderRadius: 3,
        paddingX: 2,
        paddingY: 1.5,
        typeSize: "buttonMedium",
        fontWeight: "bodyMedium",
        gap: 1,
      }),
      large: sprinkles({
        height: 10,
        borderRadius: 3,
        paddingX: 3,
        paddingY: 2,
        typeSize: "buttonLarge",
        fontWeight: "bodyMedium",
        gap: 2,
      }),
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export type DropdownButtonVariants = RecipeVariants<typeof dropdownButton>;
