import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "~/theme";

export const roundedActionBoxRecipe = recipe({
  variants: {
    error: {
      true: {},
      false: {},
    },
    disabled: { true: {}, false: {} },
  },
  compoundVariants: [
    {
      variants: {
        disabled: false,
        error: false,
      },
      style: sprinkles({
        borderColor: "neutralPlain",
      }),
    },
    {
      variants: {
        disabled: true,
        error: false,
      },
      style: sprinkles({
        borderColor: "neutralHighlight",
      }),
    },
    {
      variants: {
        disabled: false,
        error: true,
      },
      style: sprinkles({
        backgroundColor: "surfaceCriticalHighlight",
        borderColor: "criticalDefault",
      }),
    },
    {
      variants: {
        disabled: true,
        error: true,
      },
      style: sprinkles({
        backgroundColor: "surfaceCriticalSubdued",
        borderColor: "criticalHighlight",
      }),
    },
  ],
});
