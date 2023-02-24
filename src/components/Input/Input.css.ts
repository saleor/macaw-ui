import { style } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles } from "~/theme";

export const label = recipe({
  base: [
    sprinkles({
      position: "relative",
      fontFamily: "body",
      display: "flex",
      flexWrap: "wrap",
      color: "textNeutralSubdued",
      borderRadius: 3,
      paddingY: 6,
      paddingX: 4,
    }),
  ],
  variants: {
    size: {
      small: {},
      medium: {},
      large: {},
    },
    active: {
      true: {},
    },
    typed: {
      true: {},
    },
    disabled: {
      true: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        typed: true,
        active: true,
        disabled: false,
      },
      style: sprinkles({
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "brandSubdued",
        backgroundColor: {
          default: "interactiveNeutralHighlightDefault",
          focus: "interactiveNeutralHighlightFocused",
        },
      }),
    },
    {
      variants: {
        typed: true,
        active: false,
        disabled: false,
      },
      style: sprinkles({
        backgroundColor: {
          default: "interactiveNeutralHighlightDefault",
        },
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: {
          default: "transparent",
          hover: "neutralHighlight",
        },
      }),
    },
    {
      variants: {
        typed: false,
        active: true,
      },
      style: sprinkles({
        backgroundColor: "interactiveNeutralHighlightDefault",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "transparent",
      }),
    },
    {
      variants: {
        typed: false,
        active: false,
        disabled: false,
      },
      style: sprinkles({
        backgroundColor: {
          default: "surfaceNeutralHighlight",
          focus: "interactiveNeutralHighlightDefault",
          hover: "interactiveNeutralHighlightHovering",
        },
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "transparent",
      }),
    },
    {
      variants: {
        disabled: true,
      },
      style: sprinkles({
        color: "textNeutralDisabled",
        backgroundColor: "interactiveNeutralHighlightDefault",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "neutralHighlight",
      }),
    },
  ],
});

export const span = recipe({
  base: [
    style({
      transition: "transform 0.3s",
      transform: "translate(0, 50%) scale(1)",
    }),
    sprinkles({
      color: "textNeutralSubdued",
      fontSize: "bodyLarge",
      fontWeight: "captionMedium",
      lineHeight: "captionMedium",
    }),
  ],
  variants: {
    size: {
      small: {},
      medium: {},
      large: {},
    },
    typed: {
      true: [
        sprinkles({
          fontWeight: "captionLarge",
          lineHeight: "captionMedium",
        }),
        style({
          transform: "translate(-8%, 0) scale(0.813)",
        }),
      ],
    },
  },
});

export const input = recipe({
  base: [
    sprinkles({
      width: "100%",
      backgroundColor: "transparent",
      fontSize: "bodyLarge",
      lineHeight: "bodyLarge",
      borderWidth: 0,
      outlineStyle: "none",
      color: {
        default: "textNeutralDefault",
        disabled: "textNeutralSubdued",
      },
    }),
  ],
  variants: {
    size: {
      small: {},
      medium: {},
      large: {},
    },
  },
});

export type InputVariants = RecipeVariants<typeof input>;
