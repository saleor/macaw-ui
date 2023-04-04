import { createVar, style } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { calc } from "@vanilla-extract/css-utils";

import { sprinkles, vars } from "~/theme";

export const label = recipe({
  base: [
    sprinkles({
      position: "relative",
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

export const span = recipe({
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
          transform: "translate(0, 0) scale(0.813)",
        }),
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

export const input = recipe({
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

export type LabelVariants = RecipeVariants<typeof label>;
export type InputVariants = RecipeVariants<typeof input>;

export const trigger = style({});

export const button = style({
  transition: "transform 300ms",
  selectors: {
    [`${trigger}[aria-expanded="true"] &`]: {
      transform: "rotate(180deg)",
    },
  },
});

const listItemBorderRadius = createVar();
const spaceBetweenListItemAndBorder = createVar();

export const setupRecipe = recipe({
  base: [
    {
      borderRadius: listItemBorderRadius,
    },
  ],

  variants: {
    size: {
      small: {
        vars: {
          [listItemBorderRadius]: vars.borderRadius[1],
        },
      },
      medium: {
        vars: {
          [listItemBorderRadius]: vars.borderRadius[2],
        },
      },
      large: {
        vars: {
          [listItemBorderRadius]: vars.borderRadius[2],
        },
      },
    },
  },

  defaultVariants: {
    size: "medium",
  },
});

export const list = style([
  sprinkles({
    position: "absolute",
    backgroundColor: "surfaceNeutralPlain",
    boxShadow: "overlay",
    borderColor: "neutralHighlight",
    width: "100%",
    padding: 3,
    left: 0,
    zIndex: "3",
  }),
  {
    borderRadius: calc.add(listItemBorderRadius, spaceBetweenListItemAndBorder),
    vars: {
      [spaceBetweenListItemAndBorder]: vars.space[3],
    },
  },
]);

export const listItemRecipe = recipe({
  base: [
    sprinkles({
      padding: 5,
    }),
    {
      borderRadius: listItemBorderRadius,
    },
  ],

  variants: {
    highlighted: {
      true: sprinkles({ backgroundColor: "surfaceNeutralHighlight" }),
      false: sprinkles({ backgroundColor: "surfaceNeutralPlain" }),
    },
  },

  defaultVariants: {
    highlighted: false,
  },
});
