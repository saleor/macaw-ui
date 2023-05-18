import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles } from "~/theme";

export const button = recipe({
  base: [
    sprinkles({
      outlineStyle: "none",
      display: "flex",
      placeItems: "center",
      padding: "s0",
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
        height: "s6",
        width: "s6",
        borderRadius: 2,
        padding: "s0.5",
        typeSize: "buttonSmall",
        gap: "s1",
      }),
    },
    {
      variants: {
        size: "medium",
        fixedWidth: true,
      },
      style: sprinkles({
        height: "s8",
        width: "s8",
        borderRadius: 3,
        padding: "s1",
        typeSize: "buttonMedium",
        gap: "s1",
      }),
    },
    {
      variants: {
        size: "large",
        fixedWidth: true,
      },
      style: sprinkles({
        height: "s10",
        width: "s10",
        borderRadius: 3,
        padding: "s2",
        typeSize: "buttonLarge",
        gap: "s2",
      }),
    },
    {
      variants: {
        size: "small",
        fixedWidth: false,
      },
      style: sprinkles({
        height: "s6",
        borderRadius: 2,
        paddingX: "s2",
        paddingY: "s0",
        typeSize: "buttonSmall",
        gap: "s1",
      }),
    },
    {
      variants: {
        size: "medium",
        fixedWidth: false,
      },
      style: sprinkles({
        height: "s8",
        borderRadius: 3,
        paddingX: "s3",
        paddingY: "s1",
        typeSize: "buttonMedium",
        gap: "s1",
      }),
    },
    {
      variants: {
        size: "large",
        fixedWidth: false,
      },
      style: sprinkles({
        height: "s10",
        borderRadius: 3,
        paddingX: "s4",
        paddingY: "s2",
        typeSize: "buttonLarge",
        gap: "s2",
      }),
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
