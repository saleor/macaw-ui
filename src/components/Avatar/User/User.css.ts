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
      decorative1: sprinkles({ backgroundColor: "decorativeSurfacePlain1" }),
      decorative2: sprinkles({ backgroundColor: "decorativeSurfacePlain2" }),
      decorative3: sprinkles({ backgroundColor: "decorativeSurfacePlain3" }),
    },
  },

  defaultVariants: {
    size: "medium",
    scheme: "decorative1",
  },
});

export type UserAvatarVariants = RecipeVariants<typeof userAvatar>;
