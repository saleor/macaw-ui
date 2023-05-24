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
    backgroundColor: "surfaceNeutralPlain",
    boxShadow: "overlay",
    borderColor: "neutralHighlight",
    width: "100%",
    padding: 3,
    marginTop: 3,
    maxHeight: "s52",
    overflowY: "auto",
  }),
  {
    borderRadius: calc.add(listItemBorderRadius, spaceBetweenListItemAndBorder),
    vars: {
      [spaceBetweenListItemAndBorder]: vars.space[3],
    },
  },
]);

export const listItemStyle = style([
  sprinkles({
    padding: 5,
  }),
  {
    borderRadius: listItemBorderRadius,
  },
]);
