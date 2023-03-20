import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "~/theme";

export const dropdownContent = sprinkles({
  padding: 4,
  paddingBottom: 4,
  color: "textNeutralDefault",
  fontSize: "bodySmall",
  borderWidth: 1,
  borderTopWidth: 0,
  borderStyle: "solid",
  borderRadius: 3,
  backgroundColor: "surfaceNeutralPlain",
  borderColor: "neutralHighlight",
  boxShadow: "interactiveDefaultFocused",
  overflowY: "scroll",
});

export const dropdownItem = recipe({
  base: [
    sprinkles({
      paddingY: 3,
      paddingX: 4,
      outlineStyle: "none",
      cursor: "pointer",
      fontSize: "bodySmall",
      fontWeight: "bodySmall",
      lineHeight: "captionMedium",
      borderRadius: 3,
      backgroundColor: {
        default: "surfaceNeutralPlain",
        hover: "interactiveNeutralHighlightHovering",
      },
    }),
  ],
  variants: {
    condition: {
      true: sprinkles({
        color: "textBrandSubdued",
      }),
      false: sprinkles({
        color: "textNeutralDefault",
      }),
    },
  },
});

export const dropdownTrigger = recipe({
  base: [
    sprinkles({
      backgroundColor: {
        default: "surfaceNeutralPlain",
        hover: "interactiveNeutralHighlightHovering",
      },
      borderWidth: 0,
      outlineStyle: "none",
      cursor: "pointer",
      paddingX: 4,
      paddingY: 3,
    }),
  ],
  variants: {
    variant: {
      operand: sprinkles({
        color: "textNeutralDefault",
        fontSize: "bodySmall",
        fontWeight: "bodySmall",
      }),
      condition: sprinkles({
        color: "textBrandSubdued",
        fontSize: "bodyStrongSmall",
        fontWeight: "bodyStrongSmall",
      }),
    },
    opened: {
      true: sprinkles({
        backgroundColor: "interactiveBrandHighlightFocused",
      }),
    },
  },
});

export const inputContainer = recipe({
  base: [
    sprinkles({
      borderWidth: 0,
      padding: 0,
      fontSize: "bodySmall",
      display: "flex",
      alignItems: "center",
      backgroundColor: {
        default: "surfaceNeutralPlain",
        hover: "interactiveNeutralHighlightHovering",
        focusWithin: "interactiveBrandHighlightFocused",
      },
    }),
  ],
  variants: {
    focused: {
      true: sprinkles({
        color: {
          default: "textNeutralDefault",
          focusWithin: "textNeutralSubdued",
        },
      }),
    },
  },
});

export const input = recipe({
  base: [
    sprinkles({
      borderWidth: 0,
      outlineStyle: "none",
      paddingX: 4,
      paddingY: 3,
      backgroundColor: "transparent",
      color: {
        default: "textNeutralDefault",
        focus: "textBrandDefault",
      },
    }),
  ],
  variants: {
    isNumber: {
      true: style({
        selectors: {
          "&::-webkit-inner-spin-button": {
            WebkitAppearance: "none",
            MozAppearance: "textfield",
            margin: 0,
          },
        },
      }),
    },
  },
});

export const numberInputSign = sprinkles({
  fontSize: "bodySmall",
  paddingLeft: 4,
});

export const autocompleteContainer = sprinkles({
  position: "relative",
});

export const autocompleteInput = sprinkles({
  borderWidth: 0,
  padding: 0,
  color: "textNeutralDefault",
  fontSize: "bodySmall",
});

export const autocompleteContent = sprinkles({
  position: "absolute",
  top: 0,
  left: 0,
});

export const rangeItem = sprinkles({
  display: "flex",
  alignItems: "center",
  color: {
    default: "textNeutralDefault",
    focusWithin: "textNeutralSubdued",
  },
});

export const expression = sprinkles({
  display: "flex",
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "neutralPlain",
  boxShadow: "interactiveDefaultFocused",
  borderRadius: 3,
  overflow: "hidden",
});
