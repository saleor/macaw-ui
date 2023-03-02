import { recipe } from "@vanilla-extract/recipes";
import { sprinkles, vars } from "~/theme";

export const indicatorRecipe = recipe({
  base: [
    sprinkles({
      position: "absolute",
      display: "block",
      zIndex: "1",
      inset: 2,
    }),
  ],
  variants: {
    disabled: {
      true: sprinkles({ color: "iconNeutralDisabled" }),
      false: sprinkles({ color: "iconNeutralContrasted" }),
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

const {
  colors: {
    background: {
      interactiveNeutralSecondaryHovering,
      interactiveBrandPressing,
      interactiveBrandDisabled,
      interactiveBrandHighlightPressing,
      interactiveNeutralHighlightHovering,
      interactiveNeutralSecondaryFocused,
      interactiveNeutralHighlightFocused,
      interactiveBrandDefault,
      interactiveBrandHovering,
      interactiveBrandHighlightHovering,
      interactiveBrandFocused,
      interactiveBrandHighlightFocused,
      interactiveCriticalSecondaryHovering,
      interactiveCriticalSecondaryPressing,
      interactiveCriticalHighlightPressing,
      interactiveCriticalHighlightHovering,
      interactiveCriticalSecondaryFocused,
      interactiveCriticalHighlightFocused,
      interactiveCriticalDefault,
      interactiveCriticalHovering,
      interactiveCriticalFocused,
      interactiveNeutralDisabled,
      interactiveNeutralHighlightPressing,
    },
    border: { neutralHighlight },
  },
} = vars;

export const itemRecipe = recipe({
  base: [
    sprinkles({
      position: "relative",
      boxShadow: "interactiveDefaultFocused",
      borderColor: "neutralDefault",
      cursor: "pointer",
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: "100%",
      width: 6,
      height: 6,
      padding: 0,
      backgroundColor: "interactiveNeutralSecondaryDefault",
    }),
    {
      selectors: {
        "&:after": {
          content: "",
          width: vars.space[8],
          height: vars.space[8],
          display: "block",
          borderRadius: "50%",
          position: "absolute",
          inset: "-5px",
        },
        "&:hover": {
          backgroundColor: interactiveNeutralSecondaryHovering,
        },
        "&:active": {
          backgroundColor: interactiveBrandPressing,
        },
        "&[data-disabled]": {
          cursor: "not-allowed",
        },
        "&[data-state='checked'][data-disabled]": {
          backgroundColor: interactiveBrandDisabled,
        },
        "&:active:after": {
          backgroundColor: interactiveBrandHighlightPressing,
        },
        "&:hover:after": {
          backgroundColor: interactiveNeutralHighlightHovering,
        },
        "&:focus-visible": {
          backgroundColor: interactiveNeutralSecondaryFocused,
        },
        "&:focus-visible:after": {
          backgroundColor: interactiveNeutralHighlightFocused,
        },
        "&[data-state='checked']": {
          backgroundColor: interactiveBrandDefault,
          borderColor: neutralHighlight,
        },
        "&[data-state='checked']:hover": {
          backgroundColor: interactiveBrandHovering,
        },
        "&[data-state='checked']:hover:after": {
          backgroundColor: interactiveBrandHighlightHovering,
        },
        "&[data-state='checked']:focus-visible": {
          backgroundColor: interactiveBrandFocused,
        },
        "&[data-state='checked']:focus-visible:after": {
          backgroundColor: interactiveBrandHighlightFocused,
        },
      },
    },
  ],

  variants: {
    error: {
      true: {
        selectors: {
          "&:hover": {
            backgroundColor: interactiveCriticalSecondaryHovering,
          },
          "&:active": {
            backgroundColor: interactiveCriticalSecondaryPressing,
          },
          "&[data-state='checked'][data-disabled]": {
            backgroundColor: interactiveBrandDisabled,
          },
          "&:active:after": {
            backgroundColor: interactiveCriticalHighlightPressing,
          },
          "&:hover:after": {
            backgroundColor: interactiveCriticalHighlightHovering,
          },
          "&:focus-visible": {
            backgroundColor: interactiveCriticalSecondaryFocused,
          },
          "&:focus-visible:after": {
            backgroundColor: interactiveCriticalHighlightFocused,
          },
          "&[data-state='checked']": {
            backgroundColor: interactiveCriticalDefault,
            borderColor: vars.colors.border.neutralHighlight,
          },
          "&[data-state='checked']:hover": {
            backgroundColor: interactiveCriticalHovering,
          },
          "&[data-state='checked']:hover:after": {
            backgroundColor: interactiveCriticalHighlightHovering,
          },
          "&[data-state='checked']:focus-visible": {
            backgroundColor: interactiveCriticalFocused,
          },
          "&[data-state='checked']:focus-visible:after": {
            backgroundColor: interactiveCriticalHighlightFocused,
          },
        },
      },
    },
    disabled: {
      true: {
        selectors: {
          "&:hover": {
            backgroundColor: interactiveNeutralDisabled,
          },
          "&:active": {
            backgroundColor: interactiveNeutralDisabled,
          },
          "&:active:after": {
            backgroundColor: interactiveNeutralHighlightPressing,
          },
          "&[data-state='checked']:hover": {
            backgroundColor: interactiveNeutralDisabled,
          },
          "&[data-state='checked']:hover:after": {
            backgroundColor: interactiveNeutralHighlightHovering,
          },
        },
      },
    },
  },
  defaultVariants: {
    error: false,
    disabled: false,
  },
});
