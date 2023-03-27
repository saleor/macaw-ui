import { recipe } from "@vanilla-extract/recipes";
import { Sprinkles, sprinkles, vars } from "~/theme";

const outerGlow = (color: Sprinkles["backgroundColor"]) => {
  return `0 0 0 ${vars.space[3]} ${color}`;
};

export const toggle = recipe({
  base: [
    sprinkles({
      borderRadius: 9,
      borderWidth: 1,
      display: "flex",
      alignItems: "center",
      position: "relative",
      padding: 1,
      outlineStyle: "none",
      cursor: "pointer",
    }),
  ],
  variants: {
    error: {
      false: {
        selectors: {
          // Inner dot
          "&::before": {
            content: "",
            width: vars.space[5],
            height: vars.space[5],
            // Token mismatch
            backgroundColor: vars.colors.foreground.iconNeutralContrasted,
            borderRadius: 4,
            transition: "all 40ms ease-in-out",
          },
          "&[disabled]::before": {
            // Token mismatch
            backgroundColor: vars.colors.foreground.iconNeutralDisabled,
            boxShadow: "none",
          },

          // Ghost element for positioning
          "&::after": {
            content: "",
            visibility: "hidden",
            width: vars.space[5],
            height: vars.space[5],
            transition: "all 40ms ease-in-out",
          },
          // Transition from dot to pill on press
          "&:not([disabled]):active::before": {
            width: vars.space[7],
          },
          "&:not([disabled]):active::after": {
            width: vars.space[0],
          },

          // Styling for off state
          '&[data-state="off"]': {
            justifyContent: "flex-start",
            borderColor: vars.colors.border.neutralHighlight,
            backgroundColor: vars.colors.background.surfaceNeutralDepressed,
          },
          '&[data-state="off"]:hover': {
            boxShadow: outerGlow(
              vars.colors.background.interactiveNeutralHighlightHovering
            ),
          },
          '&[data-state="off"]:active': {
            boxShadow: outerGlow(
              vars.colors.background.interactiveNeutralHighlightPressing
            ),
          },
          '&[data-state="off"]:focus-visible': {
            boxShadow: outerGlow(
              vars.colors.background.interactiveNeutralHighlightFocused
            ),
          },
          '&[data-state="off"][disabled]': {
            backgroundColor:
              vars.colors.background.interactiveNeutralSecondaryDisabled,
            pointer: "not-allowed",
            pointerEvents: "none",
            boxShadow: "none",
          },

          // Styling for on state
          '&[data-state="on"]': {
            flexDirection: "row-reverse",
            backgroundColor: vars.colors.background.interactiveBrandDefault,
            borderColor: vars.colors.border.neutralHighlight,
          },
          '&[data-state="on"]:hover': {
            backgroundColor: vars.colors.background.interactiveBrandHovering,
            boxShadow: outerGlow(
              vars.colors.background.interactiveBrandHighlightHovering
            ),
          },
          '&[data-state="on"]:active': {
            backgroundColor: vars.colors.background.interactiveBrandPressing,
            boxShadow: outerGlow(
              vars.colors.background.interactiveBrandHighlightPressing
            ),
          },
          '&[data-state="on"]:focus-visible': {
            backgroundColor: vars.colors.background.interactiveBrandFocused,
            boxShadow: outerGlow(
              vars.colors.background.interactiveBrandHighlightFocused
            ),
          },
          '&[data-state="on"][disabled]': {
            backgroundColor: vars.colors.background.interactiveBrandDisabled,
            pointer: "not-allowed",
            pointerEvents: "none",
            boxShadow: "none",
          },
        },
      },
      true: {},
    },
  },
});
