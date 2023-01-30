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
      padding: 0,
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
    },
    size: {
      sm: {},
      md: {},
      lg: {},
    },
    fixedWidth: {
      true: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        size: "sm",
        fixedWidth: true,
      },
      style: sprinkles({
        height: 8,
        width: 8,
        borderRadius: 2,
        padding: 2,
      }),
    },
    {
      variants: {
        size: "md",
        fixedWidth: true,
      },
      style: sprinkles({
        height: 10,
        width: 10,
        borderRadius: 3,
        padding: 3,
      }),
    },
    {
      variants: {
        size: "lg",
        fixedWidth: true,
      },
      style: sprinkles({
        height: 12,
        width: 12,
        borderRadius: 3,
        padding: 4,
      }),
    },
    {
      variants: {
        size: "sm",
        fixedWidth: false,
      },
      style: sprinkles({
        height: 8,
        borderRadius: 2,
        paddingX: 4,
        paddingY: 0,
      }),
    },
    {
      variants: {
        size: "md",
        fixedWidth: false,
      },
      style: sprinkles({
        height: 10,
        borderRadius: 3,
        paddingX: 5,
        paddingY: 3,
      }),
    },
    {
      variants: {
        size: "lg",
        fixedWidth: false,
      },
      style: sprinkles({
        height: 12,
        borderRadius: 3,
        paddingX: 6,
        paddingY: 4,
      }),
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
