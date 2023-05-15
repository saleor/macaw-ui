import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles } from "~/theme";

export const button = recipe({
  base: [
    sprinkles({
      outlineStyle: "none",
      display: "flex",
      placeItems: "center",
      padding: 0,
      textDecoration: "none",
      cursor: {
        default: "pointer",
        disabled: "not-allowed",
      },
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
          default: "textNeutralContrasted",
          disabled: "textNeutralDisabled",
        },
        boxShadow: {
          default: "interactiveDefaultFocused",
          hover: "interactiveDefaultHovering",
          focusVisible: "interactiveDefaultFocused",
          active: "none",
          disabled: "none",
        },
        borderStyle: "none",
      }),
      secondary: sprinkles({
        backgroundColor: {
          default: "interactiveNeutralSecondaryDefault",
          hover: "interactiveNeutralSecondaryHovering",
          focusVisible: "interactiveNeutralSecondaryFocused",
          active: "interactiveNeutralSecondaryPressing",
          disabled: "interactiveNeutralSecondaryDisabled",
        },
        color: {
          default: "textNeutralDefault",
          disabled: "textNeutralDisabled",
        },
        boxShadow: {
          default: "interactiveDefaultFocused",
          hover: "interactiveDefaultHovering",
          focusVisible: "interactiveDefaultFocused",
          active: "none",
          disabled: "none",
        },
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: {
          default: "neutralDefault",
          hover: "neutralSubdued",
          focusVisible: "neutralDefault",
          active: "neutralSubdued",
          disabled: "neutralPlain",
        },
      }),
      tertiary: sprinkles({
        backgroundColor: {
          default: "interactiveNeutralHighlightDefault",
          hover: "interactiveNeutralHighlightHovering",
          focusVisible: "interactiveNeutralHighlightFocused",
          active: "interactiveNeutralHighlightPressing",
          disabled: "interactiveNeutralHighlightDisabled",
        },
        color: {
          default: "iconNeutralDefault",
          disabled: "iconNeutralDisabled",
        },
        borderStyle: "none",
      }),
      error: sprinkles({
        backgroundColor: {
          default: "interactiveCriticalDefault",
          hover: "interactiveCriticalHovering",
          focusVisible: "interactiveCriticalFocused",
          active: "interactiveCriticalPressing",
          disabled: "interactiveCriticalDisabled",
        },
        color: {
          default: "textNeutralContrasted",
          disabled: "textNeutralDisabled",
        },
        borderStyle: "none",
      }),
    },
    size: {
      small: {},
      medium: {},
      large: {},
    },
    fixedWidth: {
      true: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        size: "small",
        fixedWidth: true,
      },
      style: sprinkles({
        height: 9,
        width: 9,
        borderRadius: 2,
        padding: 2,
        typeSize: "buttonSmall",
        gap: 3,
      }),
    },
    {
      variants: {
        size: "medium",
        fixedWidth: true,
      },
      style: sprinkles({
        height: 11,
        width: 11,
        borderRadius: 3,
        padding: 3,
        typeSize: "buttonMedium",
        gap: 3,
      }),
    },
    {
      variants: {
        size: "large",
        fixedWidth: true,
      },
      style: sprinkles({
        height: 13,
        width: 13,
        borderRadius: 3,
        padding: 5,
        typeSize: "buttonLarge",
        gap: 5,
      }),
    },
    {
      variants: {
        size: "small",
        fixedWidth: false,
      },
      style: sprinkles({
        height: 9,
        borderRadius: 2,
        paddingX: 5,
        paddingY: 0,
        typeSize: "buttonSmall",
        gap: 3,
      }),
    },
    {
      variants: {
        size: "medium",
        fixedWidth: false,
      },
      style: sprinkles({
        height: 11,
        borderRadius: 3,
        paddingX: 6,
        paddingY: 3,
        typeSize: "buttonMedium",
        gap: 3,
      }),
    },
    {
      variants: {
        size: "large",
        fixedWidth: false,
      },
      style: sprinkles({
        height: 13,
        borderRadius: 3,
        paddingX: 7,
        paddingY: 5,
        typeSize: "buttonLarge",
        gap: 5,
      }),
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
