import { StyleRule, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles, vars } from "~/theme";

export const dropdownContent = recipe({
  base: [
    sprinkles({
      padding: "s1.5",
      paddingBottom: "s1.5",
      color: "textNeutralDefault",
      fontSize: "bodySmall",
      borderWidth: 1,
      borderTopWidth: 0,
      borderStyle: "solid",
      borderRadius: 4,
      backgroundColor: "surfaceNeutralPlain",
      borderColor: "neutralHighlight",
      boxShadow: "interactiveDefaultFocused",
      pointerEvents: "auto",
    }),
  ],
  variants: {
    absolute: {
      true: sprinkles({
        position: "absolute",
        top: "s0",
        left: "s0",
      }),
      false: {},
    },
  },
});

export const dropdownContentScroller = style({
  overflowY: "scroll",
  scrollbarColor: `${vars.colors.background.surfaceNeutralHighlight} #0000`,
  scrollbarWidth: "thin",
  "@supports": {
    "(overflow: overlay)": {
      "overflow-y": "overlay",
    } as StyleRule,
  },
  selectors: {
    "&::-webkit-scrollbar": {
      width: vars.space.s1,
    },
    "&::-webkit-scrollbar-track": {
      background: "none",
    },
    "&::-webkit-scrollbar-thumb": {
      background: vars.colors.background.surfaceNeutralHighlight,
      borderRadius: vars.borderRadius[4],
    },
  },
});

export const dropdownItem = recipe({
  base: [
    sprinkles({
      paddingY: "s1",
      paddingX: "s1.5",
      outlineStyle: "none",
      cursor: "pointer",
      fontSize: "bodySmall",
      fontWeight: "bodySmall",
      lineHeight: "captionMedium",
      borderRadius: 2,
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
      paddingX: "s1.5",
      paddingY: "s1",
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
      padding: "s0",
      display: "flex",
      height: "100%",
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
      paddingX: "s1.5",
      paddingY: "s1",
      fontSize: "bodySmall",
      backgroundColor: "transparent",
      color: {
        default: "textNeutralDefault",
        focus: "textBrandDefault",
      },
    }),
    style({
      MozAppearance: "textfield",
      selectors: {
        "&::-webkit-outer-spin-button": {
          WebkitAppearance: "none",
          margin: 0,
        },
        "&::-webkit-inner-spin-button": {
          WebkitAppearance: "none",
          margin: 0,
        },
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
  paddingLeft: "s1.5",
});

export const autocompleteContainer = sprinkles({
  position: "relative",
});

export const autocompleteInput = sprinkles({
  borderWidth: 0,
  padding: "s0",
  color: "textNeutralDefault",
  fontSize: "bodySmall",
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
