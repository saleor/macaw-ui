import { style } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

import { sprinkles, vars } from "~/theme";

export const labelRecipe = recipe({
  base: [
    sprinkles({
      position: "relative",
      display: "flex",
      flexWrap: "wrap",
      color: "textNeutralSubdued",
      borderRadius: 3,
      paddingY: 3,
    }),
  ],
  variants: {
    size: {
      small: [
        sprinkles({
          paddingX: 5,
        }),
        {
          height: "48px",
        },
      ],
      medium: [
        sprinkles({
          paddingX: 5,
        }),
        {
          height: "52px",
        },
      ],
      large: [
        sprinkles({
          paddingX: 6,
        }),
        {
          height: "64px",
        },
      ],
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
    error: {
      true: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        typed: true,
        active: true,
        disabled: false,
        error: false,
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
        error: false,
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
        error: false,
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
        error: false,
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
    {
      variants: {
        error: true,
        typed: false,
      },
      style: sprinkles({
        backgroundColor: {
          default: "surfaceCriticalSubdued",
          hover: "surfaceCriticalSubdued",
        },
      }),
    },
  ],
});

export const spanRecipe = recipe({
  base: [
    style({
      transition: "transform 0.3s",
      transformOrigin: "left",
      transform: "translate(0, 50%) scale(1)",
    }),
    sprinkles({
      color: "textNeutralSubdued",
    }),
  ],
  variants: {
    size: {
      small: sprinkles({
        typeSize: "bodySmall",
      }),
      medium: sprinkles({
        typeSize: "bodyMedium",
      }),
      large: sprinkles({
        typeSize: "bodyLarge",
      }),
    },
    disabled: {
      true: sprinkles({ color: "textNeutralDisabled" }),
    },
    typed: {
      true: [
        {
          transform: "translate(0, 0) scale(0.84)",
        },
      ],
    },
    error: {
      true: sprinkles({
        color: "textCriticalSubdued",
      }),
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export const inputRecipe = recipe({
  base: [
    sprinkles({
      width: "100%",
      backgroundColor: "transparent",
      fontSize: "bodyLarge",
      lineHeight: "bodyLarge",
      borderWidth: 0,
      outlineStyle: "none",
      padding: 0,
      color: {
        default: "textNeutralDefault",
        disabled: "textNeutralSubdued",
      },
    }),
    {
      selectors: {
        "&::-webkit-input-placeholder": {
          color: "transparent",
        },
        "&::-moz-placeholder": {
          color: "transparent",
        },
        "&:focus::-webkit-input-placeholder": {
          color: vars.colors.foreground.textNeutralSubdued,
        },
        "&:focus::-moz-placeholder": {
          color: vars.colors.foreground.textNeutralSubdued,
        },
      },
    },
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
    error: {
      true: sprinkles({
        color: "textCriticalDefault",
      }),
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export type LabelVariants = RecipeVariants<typeof labelRecipe>;
export type InputVariants = RecipeVariants<typeof inputRecipe>;
