import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

import { sprinkles } from "~/theme";

import { base, sizeVariants } from "../common.css";

export const userAvatar = recipe({
  base: [
    base,
    sprinkles({
      borderRadius: "50%",
    }),
  ],

  variants: {
    size: sizeVariants,
    scheme: {
      accent1: sprinkles({ backgroundColor: "accent1" }),
    },
  },

  defaultVariants: {
    size: "medium",
    scheme: "accent1",
  },
});

export type UserAvatarVariants = RecipeVariants<typeof userAvatar>;
