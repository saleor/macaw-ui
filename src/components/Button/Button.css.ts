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
          default: "buttonDefaultPrimary",
          // TODO: do we need all those states?
          // hover: "interactiveNeutralHovering",
          // focusVisible: "interactiveNeutralFocused",
          // active: "interactiveNeutralPressing",
          disabled: "buttonDefaultDisabled",
        },
        color: {
          default: "buttonDefaultPrimary",
          disabled: "defaultDisabled",
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
          default: "buttonDefaultSecondary",
          // hover: "interactiveNeutralSecondaryHovering",
          // focusVisible: "interactiveNeutralSecondaryFocused",
          // active: "interactiveNeutralSecondaryPressing",
          disabled: "buttonDefaultDisabled",
        },
        color: {
          default: "buttonDefaultSecondary",
          disabled: "defaultDisabled",
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
          default: "default1",
          hover: "default1Hovered",
          focusVisible: "default1Focused",
          active: "default2",
          disabled: "defaultDisabled",
        },
      }),
      tertiary: sprinkles({
        backgroundColor: {
          default: "buttonDefaultTertiary",
          // hover: "interactiveNeutralHighlightHovering",
          // focusVisible: "interactiveNeutralHighlightFocused",
          // active: "interactiveNeutralHighlightPressing",
          disabled: "buttonDefaultDisabled",
        },
        color: {
          default: "default1",
          disabled: "defaultDisabled",
        },
        borderStyle: "none",
      }),
      error: sprinkles({
        backgroundColor: {
          default: "buttonCriticalPrimary",
          // hover: "interactiveCriticalHovering",
          // focusVisible: "interactiveCriticalFocused",
          // active: "interactiveCriticalPressing",
          disabled: "buttonCriticalDisabled",
        },
        color: {
          default: "buttonCriticalPrimary",
          disabled: "buttonCriticalDisabled",
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
        height: 6,
        width: 6,
        borderRadius: 2,
        padding: 0.5,
        typeSize: "buttonSmall",
        gap: 1,
      }),
    },
    {
      variants: {
        size: "medium",
        fixedWidth: true,
      },
      style: sprinkles({
        height: 8,
        width: 8,
        borderRadius: 3,
        padding: 1,
        typeSize: "buttonMedium",
        gap: 1,
      }),
    },
    {
      variants: {
        size: "large",
        fixedWidth: true,
      },
      style: sprinkles({
        height: 10,
        width: 10,
        borderRadius: 3,
        padding: 2,
        typeSize: "buttonLarge",
        gap: 2,
      }),
    },
    {
      variants: {
        size: "small",
        fixedWidth: false,
      },
      style: sprinkles({
        height: 6,
        borderRadius: 2,
        paddingX: 2,
        paddingY: 0,
        typeSize: "buttonSmall",
        gap: 1,
      }),
    },
    {
      variants: {
        size: "medium",
        fixedWidth: false,
      },
      style: sprinkles({
        height: 8,
        borderRadius: 3,
        paddingX: 3,
        paddingY: 1,
        typeSize: "buttonMedium",
        gap: 1,
      }),
    },
    {
      variants: {
        size: "large",
        fixedWidth: false,
      },
      style: sprinkles({
        height: 10,
        borderRadius: 3,
        paddingX: 4,
        paddingY: 2,
        typeSize: "buttonLarge",
        gap: 2,
      }),
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
