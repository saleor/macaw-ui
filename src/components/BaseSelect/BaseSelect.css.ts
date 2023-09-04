import { createVar, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";

import { sprinkles, vars } from "~/theme";

export const toggleIconStyle = style({
  transition: "transform 300ms",
  selectors: {
    '&[aria-expanded="true"]': {
      transform: "rotate(180deg)",
    },
  },
});

const listItemBorderRadius = createVar();
const spaceBetweenListItemAndBorder = createVar();

export const listWrapperRecipe = recipe({
  base: [
    {
      borderRadius: listItemBorderRadius,
      padding: "4px",
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

export const listStyle = style([
  sprinkles({
    position: "absolute",
    backgroundColor: "surfaceNeutralPlain",
    boxShadow: "overlay",
    borderColor: "neutralPlain",
    borderStyle: "solid",
    borderWidth: 1,
    width: "100%",
    padding: 1,
    left: 0,
    maxHeight: 52,
    overflowY: "auto",
    zIndex: "3",
  }),
  {
    borderRadius: calc.add(listItemBorderRadius, spaceBetweenListItemAndBorder),
    scrollbarGutter: "stable",
    vars: {
      [spaceBetweenListItemAndBorder]: vars.spacing[1],
    },
    "::-webkit-scrollbar": {
      width: "16px",
    },
    "::-webkit-scrollbar-thumb": {
      backgroundColor: vars.colors.border.neutralPlain,
      border: "4px solid transparent",
      borderRadius: "8px",
      backgroundClip: "padding-box",
    },
  },
]);

export const listItemStyle = style([
  sprinkles({
    padding: 2,
  }),
  {
    borderRadius: listItemBorderRadius,
  },
]);
