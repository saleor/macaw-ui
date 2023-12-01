import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

import { sprinkles } from "~/theme";

import { base, sizeVariants } from "../common.css";

export const storeAvatar = recipe({
  base: [
    base,
    sprinkles({
      borderRadius: 3,
    }),
  ],

  variants: {
    size: sizeVariants,
    scheme: {
      accent1: sprinkles({
        backgroundColor: "accent1",
        color: "accent1",
      }),
    },
  },

  defaultVariants: {
    size: "medium",
    scheme: "accent1",
  },
});

export type StoreAvatarVariants = RecipeVariants<typeof storeAvatar>;
