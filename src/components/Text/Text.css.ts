import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

import { sprinkles } from "~/theme";

export const text = recipe({
  base: [sprinkles({ fontFamily: "body" })],

  variants: {
    variant: {
      hero: {},
      title: {},
      heading: {},
      bodyEmp: {},
      body: {},
      button: {},
      caption: {},
    },
    size: {
      small: {},
      medium: {},
      large: {},
    },
  },

  compoundVariants: [
    {
      variants: {
        variant: "hero",
        size: "large",
      },
      style: sprinkles({ typeSize: "heroLarge" }),
    },
    {
      variants: {
        variant: "hero",
        size: "medium",
      },
      style: sprinkles({ typeSize: "heroMedium" }),
    },
    {
      variants: {
        variant: "hero",
        size: "small",
      },
      style: sprinkles({ typeSize: "heroSmall" }),
    },

    {
      variants: {
        variant: "title",
        size: "large",
      },
      style: sprinkles({ typeSize: "titleLarge" }),
    },
    {
      variants: {
        variant: "title",
        size: "medium",
      },
      style: sprinkles({ typeSize: "titleMedium" }),
    },
    {
      variants: {
        variant: "title",
        size: "small",
      },
      style: sprinkles({ typeSize: "titleSmall" }),
    },

    {
      variants: {
        variant: "heading",
        size: "large",
      },
      style: sprinkles({ typeSize: "headingLarge" }),
    },
    {
      variants: {
        variant: "heading",
        size: "medium",
      },
      style: sprinkles({ typeSize: "headingMedium" }),
    },
    {
      variants: {
        variant: "heading",
        size: "small",
      },
      style: sprinkles({ typeSize: "headingSmall" }),
    },

    {
      variants: {
        variant: "bodyEmp",
        size: "large",
      },
      style: sprinkles({ typeSize: "bodyEmpLarge" }),
    },
    {
      variants: {
        variant: "bodyEmp",
        size: "medium",
      },
      style: sprinkles({ typeSize: "bodyEmpMedium" }),
    },
    {
      variants: {
        variant: "bodyEmp",
        size: "small",
      },
      style: sprinkles({ typeSize: "bodyEmpSmall" }),
    },

    {
      variants: {
        variant: "body",
        size: "large",
      },
      style: sprinkles({ typeSize: "bodyLarge" }),
    },
    {
      variants: {
        variant: "body",
        size: "medium",
      },
      style: sprinkles({ typeSize: "bodyMedium" }),
    },
    {
      variants: {
        variant: "body",
        size: "small",
      },
      style: sprinkles({ typeSize: "bodySmall" }),
    },

    {
      variants: {
        variant: "button",
        size: "large",
      },
      style: sprinkles({ typeSize: "buttonLarge" }),
    },
    {
      variants: {
        variant: "button",
        size: "medium",
      },
      style: sprinkles({ typeSize: "buttonMedium" }),
    },
    {
      variants: {
        variant: "button",
        size: "small",
      },
      style: sprinkles({ typeSize: "buttonSmall" }),
    },

    {
      variants: {
        variant: "caption",
        size: "large",
      },
      style: sprinkles({ typeSize: "captionLarge" }),
    },
    {
      variants: {
        variant: "caption",
        size: "medium",
      },
      style: sprinkles({ typeSize: "captionMedium" }),
    },
    {
      variants: {
        variant: "caption",
        size: "small",
      },
      style: sprinkles({ typeSize: "captionSmall" }),
    },
  ],

  defaultVariants: {
    variant: "body",
    size: "medium",
  },
});

export type TextVariants = RecipeVariants<typeof text>;
