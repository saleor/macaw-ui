import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles } from "~/theme";

export const button = recipe({
  base: [
    sprinkles({
      fontFamily: "body",
      outlineStyle: "none",
      display: "flex",
      placeItems: "center",
      cursor: "auto",
    }),
  ],

  variants: {
    variant: {
      primary: sprinkles({
        backgroundColor: {
          default: "interactiveNeutralDefault",
          hover: "interactiveNeutralHovering",
          focusVisible: "interactiveNeutralFocused",
          active: "interactiveNeutralPressing",
          disabled: "interactiveNeutralDisabled",
        },
        color: {
          default: "iconNeutralContrasted",
          disabled: "iconNeutralDisabled",
        },
        borderStyle: "none",
      }),
      secondary: sprinkles({
        backgroundColor: {
          default: "interactiveNeutralSecondaryDefault",
          hover: "interactiveNeutralSecondaryHovering",
          focusVisible: "interactiveNeutralSecondaryFocused",
          active: "interactiveNeutralSecondaryPressing",
        },
        color: {
          default: "iconNeutralDefault",
          disabled: "iconNeutralDisabled",
        },
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "neutralDefault",
      }),
      tertiary: sprinkles({
        backgroundColor: {
          default: "interactiveNeutralHighlightDefault",
          hover: "interactiveNeutralHighlightHovering",
          focusVisible: "interactiveNeutralHighlightFocused",
          active: "interactiveNeutralHighlightPressing",
        },
        color: {
          default: "iconNeutralDefault",
          disabled: "iconNeutralDisabled",
        },
        borderStyle: "none",
      }),
    },
    size: {
      sm: sprinkles({ height: 8, borderRadius: 2, padding: 4 }),
      md: sprinkles({ height: 10, borderRadius: 3, padding: 4 }),
      lg: sprinkles({ height: 12, borderRadius: 3, padding: 4 }),
    },
    icon: {
      true: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        size: "sm",
        icon: true,
      },
      style: sprinkles({ height: 8, width: 8, borderRadius: 2, padding: 4 }),
    },
    {
      variants: {
        size: "md",
        icon: true,
      },
      style: sprinkles({ height: 10, width: 10, borderRadius: 3, padding: 4 }),
    },
    {
      variants: {
        size: "lg",
        icon: true,
      },
      style: sprinkles({ height: 12, width: 12, borderRadius: 3, padding: 4 }),
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
