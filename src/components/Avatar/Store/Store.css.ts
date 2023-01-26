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
      decorative1: sprinkles({
        backgroundColor: "decorativeSurfaceSubdued1",
        color: "text1Decorative",
      }),
      decorative2: sprinkles({
        backgroundColor: "decorativeSurfaceSubdued2",
        color: "text2Decorative",
      }),
      decorative3: sprinkles({
        backgroundColor: "decorativeSurfaceSubdued3",
        color: "text3Decorative",
      }),
    },
  },

  defaultVariants: {
    size: "medium",
    scheme: "decorative1",
  },
});

export type StoreAvatarVariants = RecipeVariants<typeof storeAvatar>;
