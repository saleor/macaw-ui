import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "~/theme";

export const appLayoutBoxRecipe = recipe({
  base: {
    gridTemplateColumns: "5fr 9fr",
    columnGap: "7%",
  },
  variants: {
    disabled: {
      true: {
        opacity: 0.6,
        cursor: "not-allowed",
      },
      false: {
        opacity: 1,
      },
    },
    error: { true: {}, false: {} },
  },
});

export const appLayoutTextRecipe = recipe({
  variants: {
    disabled: { true: {}, false: {} },
    error: { true: {}, false: {} },
  },
  compoundVariants: [
    {
      variants: {
        disabled: false,
        error: false,
      },
      style: sprinkles({
        color: "textNeutralDefault",
      }),
    },
    {
      variants: {
        disabled: true,
        error: false,
      },
      style: sprinkles({
        color: "textNeutralDisabled",
      }),
    },
    {
      variants: {
        disabled: false,
        error: true,
      },
      style: sprinkles({
        color: "textCriticalSubdued",
      }),
    },
    {
      variants: {
        disabled: true,
        error: true,
      },
      style: sprinkles({
        color: "textCriticalDisabled",
      }),
    },
  ],
});
