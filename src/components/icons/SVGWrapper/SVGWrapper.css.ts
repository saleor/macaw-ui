import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

import { sprinkles } from "~/theme";

const svgWrapper = recipe({
  varaints: {
    base: [sprinkles({ fontFamily: "body" })],

    size: {
      small: {},
      medium: {},
      large: {},
    },
  },
});
