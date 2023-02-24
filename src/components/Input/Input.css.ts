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
      paddingX: 4,
    }),
  ],
  variants: {
    size: {
      small: sprinkles({
        paddingY: 5,
      }),
      medium: sprinkles({
        paddingY: 5,
      }),
      large: sprinkles({
        paddingY: 6,
      }),
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
    }),
  ],
  variants: {
    size: {
      small: sprinkles({
        fontSize: "captionLarge",
        lineHeight: "captionMedium",
      }),
      medium: sprinkles({
        fontSize: "bodyMedium",
        lineHeight: "captionLarge",
      }),
      large: sprinkles({
        fontSize: "bodyLarge",
        lineHeight: "bodyLarge",
      }),
    },
    disabled: {
      true: sprinkles({ color: "textNeutralDisabled" }),
    },
    typed: {
      true: [
        style({
          transform: "translate(-3%, 0) scale(0.813)",
        }),
      ],
    },
  },
  defaultVariants: {
    size: "medium",
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
      small: sprinkles({
        fontSize: "bodySmall",
        lineHeight: "captionMedium",
      }),
      medium: sprinkles({
        fontSize: "bodyMedium",
        lineHeight: "bodySmall",
      }),
      large: sprinkles({
        fontSize: "bodyLarge",
        lineHeight: "bodyLarge",
      }),
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export type InputVariants = RecipeVariants<typeof input>;
