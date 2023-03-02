import { style } from "@vanilla-extract/css";
import { vars } from "~/theme";

export const item = style({
  width: "14px",
  height: "14px",
  borderRadius: "100%",
  backgroundColor: vars.colors.background.interactiveNeutralSecondaryDefault,
  border: "1px solid",
  borderColor: vars.colors.border.neutralDefault,
  cursor: "pointer",
  boxShadow: vars.boxShadow.interactiveDefaultFocused,
  position: "relative",

  selectors: {
    "&:hover": {
      backgroundColor:
        vars.colors.background.interactiveNeutralSecondaryHovering,
    },
    "&:active": {
      backgroundColor: vars.colors.background.interactiveBrandPressing,
    },
    "&:active:after": {
      content: "",
      backgroundColor: vars.colors.background.interactiveBrandHighlightPressing,
      width: "20px",
      height: "20px",
      display: "block",
      borderRadius: "50%",
      position: "absolute",
      top: "-4px",
      left: "-4px",
    },
    "&:hover:after": {
      content: "",
      backgroundColor:
        vars.colors.background.interactiveNeutralHighlightHovering,
      width: "20px",
      height: "20px",
      display: "block",
      borderRadius: "50%",
      position: "absolute",
      top: "-4px",
      left: "-4px",
    },
    "&:focus": {
      backgroundColor:
        vars.colors.background.interactiveNeutralSecondaryFocused,
    },
    "&:focus:after": {
      content: "",
      backgroundColor:
        vars.colors.background.interactiveNeutralHighlightFocused,
      width: "20px",
      height: "20px",
      display: "block",
      borderRadius: "50%",
      position: "absolute",
      top: "-4px",
      left: "-4px",
    },
    "&[data-state='checked']": {
      backgroundColor: vars.colors.background.interactiveBrandDefault,
      borderColor: vars.colors.border.neutralHighlight,
    },
    "&[data-state='checked']:hover": {
      backgroundColor: vars.colors.background.interactiveBrandHovering,
    },
    "&[data-state='checked']:hover:after": {
      content: "",
      backgroundColor: vars.colors.background.interactiveBrandHighlightHovering,
      width: "20px",
      height: "20px",
      display: "block",
      borderRadius: "50%",
      position: "absolute",
      top: "-4px",
      left: "-4px",
    },
    "&[data-state='checked']:focus": {
      backgroundColor: vars.colors.background.interactiveBrandFocused,
    },
    "&[data-state='checked']:focus:after": {
      content: "",
      backgroundColor: vars.colors.background.interactiveBrandHighlightFocused,
      width: "20px",
      height: "20px",
      display: "block",
      borderRadius: "50%",
      position: "absolute",
      top: "-4px",
      left: "-4px",
    },
  },
});

export const indicator = style({
  position: "absolute",
  top: "3px",
  left: "3px",
  display: "block",
  zIndex: 1,
});
