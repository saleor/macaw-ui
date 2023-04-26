import { createVar, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { calc } from "@vanilla-extract/css-utils";

import { sprinkles, vars } from "~/theme";

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

export const listItem = style([
  sprinkles({
    padding: 5,
  }),
  {
    borderRadius: listItemBorderRadius,
  },
]);
