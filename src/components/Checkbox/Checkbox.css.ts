import { style } from "@vanilla-extract/css";
import { sprinkles, vars } from "~/theme";

export const trigger = style({});

export const commonCheckbox = sprinkles({
  padding: 0,
  width: 3,
  height: 3,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderStyle: "solid",
  borderRadius: 1,
  borderWidth: 1,
  color: "iconNeutralContrasted",
  cursor: "pointer",
  flexShrink: "0",
});

export const defaultCheckbox = style({
  selectors: {
    "&:hover::after, &:active::after, &:focus-visible::after": {
      content: "",
      position: "absolute",
      height: vars.spacing[5],
      width: vars.spacing[5],
      borderRadius: vars.borderRadius[2],
    },
    '&[data-state="unchecked"]': {
      borderColor: vars.colors.border.neutralDefault,
      backgroundColor:
        vars.colors.background.interactiveNeutralSecondaryDefault,
      borderRadius: vars.borderRadius[1],
      boxShadow: vars.boxShadow.interactiveDefaultFocused,
    },
    '&[data-state="unchecked"]:hover': {
      boxShadow: vars.boxShadow.interactiveDefaultHovering,
      borderColor: vars.colors.border.neutralSubdued,
      backgroundColor:
        vars.colors.background.interactiveNeutralSecondaryHovering,
    },
    '&[data-state="unchecked"]:hover::after': {
      backgroundColor:
        vars.colors.background.interactiveNeutralHighlightHovering,
    },
    '&[data-state="unchecked"]:active': {
      boxShadow: "none",
      borderColor: vars.colors.border.neutralSubdued,
      backgroundColor:
        vars.colors.background.interactiveNeutralSecondaryPressing,
    },
    '&[data-state="unchecked"]:active::after': {
      backgroundColor:
        vars.colors.background.interactiveNeutralHighlightPressing,
    },
    '&[data-state="unchecked"]:focus-visible': {
      boxShadow: vars.boxShadow.interactiveDefaultHovering,
      borderColor: vars.colors.border.neutralDefault,
      backgroundColor:
        vars.colors.background.interactiveNeutralSecondaryFocused,
      outline: "none",
    },
    '&[data-state="unchecked"]:focus-visible::after': {
      backgroundColor:
        vars.colors.background.interactiveNeutralHighlightHovering,
    },
    '&[data-state="unchecked"][disabled]': {
      borderColor: vars.colors.border.neutralPlain,
      backgroundColor:
        vars.colors.background.interactiveNeutralSecondaryDisabled,
      cursor: "not-allowed",
    },
    '&:is([data-state="checked"],[data-state="indeterminate"])': {
      backgroundColor: vars.colors.background.interactiveBrandDefault,
      borderColor: vars.colors.border.neutralHighlight,
      boxShadow: vars.boxShadow.interactiveDefaultFocused,
    },
    '&:is([data-state="checked"],[data-state="indeterminate"]):hover': {
      backgroundColor: vars.colors.background.interactiveBrandHovering,
      borderColor: vars.colors.border.neutralHighlight,
      boxShadow: vars.boxShadow.interactiveDefaultHovering,
    },
    '&:is([data-state="checked"],[data-state="indeterminate"]):hover::after': {
      backgroundColor: vars.colors.background.interactiveBrandHighlightHovering,
    },
    '&:is([data-state="checked"],[data-state="indeterminate"]):active': {
      backgroundColor: vars.colors.background.interactiveBrandPressing,
      borderColor: vars.colors.border.neutralHighlight,
      boxShadow: vars.boxShadow.interactiveDefaultFocused,
    },
    '&:is([data-state="checked"],[data-state="indeterminate"]):active::after': {
      backgroundColor: vars.colors.background.interactiveBrandHighlightPressing,
    },
    '&:is([data-state="checked"],[data-state="indeterminate"]):focus-visible': {
      backgroundColor: vars.colors.background.interactiveBrandFocused,
      borderColor: vars.colors.border.neutralHighlight,
      boxShadow: vars.boxShadow.interactiveDefaultFocused,
    },
    '&:is([data-state="checked"],[data-state="indeterminate"]):focus-visible::after':
      {
        backgroundColor:
          vars.colors.background.interactiveBrandHighlightFocused,
      },
    '&:is([data-state="checked"],[data-state="indeterminate"])[disabled]': {
      backgroundColor: vars.colors.background.interactiveBrandDisabled,
      borderColor: vars.colors.border.neutralHighlight,
      cursor: "not-allowed",
      color: vars.colors.foreground.iconNeutralDisabled,
    },
  },
});

export const errorCheckbox = style({
  selectors: {
    "&:hover::after, &:active::after, &:focus-visible::after": {
      content: "",
      position: "absolute",
      height: vars.spacing[5],
      width: vars.spacing[5],
      borderRadius: vars.borderRadius[2],
    },
    '&[data-state="unchecked"]': {
      borderColor: vars.colors.border.criticalDefault,
      backgroundColor:
        vars.colors.background.interactiveCriticalSecondaryDefault,
      borderRadius: vars.borderRadius[1],
      boxShadow: vars.boxShadow.interactiveDefaultFocused,
    },
    '&[data-state="unchecked"]:hover': {
      boxShadow: vars.boxShadow.interactiveDefaultHovering,
      borderColor: vars.colors.border.neutralSubdued,
      backgroundColor:
        vars.colors.background.interactiveCriticalSecondaryHovering,
    },
    '&[data-state="unchecked"]:hover::after': {
      backgroundColor:
        vars.colors.background.interactiveCriticalHighlightHovering,
    },
    '&[data-state="unchecked"]:active': {
      boxShadow: "none",
      borderColor: vars.colors.border.neutralSubdued,
      backgroundColor:
        vars.colors.background.interactiveCriticalSecondaryPressing,
    },
    '&[data-state="unchecked"]:active::after': {
      backgroundColor:
        vars.colors.background.interactiveCriticalHighlightPressing,
    },
    '&[data-state="unchecked"]:focus-visible': {
      boxShadow: vars.boxShadow.interactiveDefaultHovering,
      borderColor: vars.colors.border.criticalDefault,
      backgroundColor:
        vars.colors.background.interactiveCriticalSecondaryFocused,
      outline: "none",
    },
    '&[data-state="unchecked"]:focus-visible::after': {
      backgroundColor:
        vars.colors.background.interactiveCriticalHighlightHovering,
    },
    '&[data-state="unchecked"][disabled]': {
      borderColor: vars.colors.border.neutralPlain,
      backgroundColor:
        vars.colors.background.interactiveCriticalSecondaryDisabled,
      cursor: "not-allowed",
    },
    '&:is([data-state="checked"],[data-state="indeterminate"])': {
      backgroundColor: vars.colors.background.interactiveCriticalDefault,
      borderColor: vars.colors.border.neutralHighlight,
      boxShadow: vars.boxShadow.interactiveDefaultFocused,
    },
    '&:is([data-state="checked"],[data-state="indeterminate"]):hover': {
      backgroundColor: vars.colors.background.interactiveCriticalHovering,
      borderColor: vars.colors.border.neutralHighlight,
      boxShadow: vars.boxShadow.interactiveDefaultHovering,
    },
    '&:is([data-state="checked"],[data-state="indeterminate"]):hover::after': {
      backgroundColor:
        vars.colors.background.interactiveCriticalHighlightHovering,
    },
    '&:is([data-state="checked"],[data-state="indeterminate"]):active': {
      backgroundColor: vars.colors.background.interactiveCriticalPressing,
      borderColor: vars.colors.border.neutralHighlight,
      boxShadow: vars.boxShadow.interactiveDefaultFocused,
    },
    '&:is([data-state="checked"],[data-state="indeterminate"]):active::after': {
      backgroundColor:
        vars.colors.background.interactiveCriticalHighlightPressing,
    },
    '&:is([data-state="checked"],[data-state="indeterminate"]):focus-visible': {
      backgroundColor: vars.colors.background.interactiveCriticalFocused,
      borderColor: vars.colors.border.neutralHighlight,
      boxShadow: vars.boxShadow.interactiveDefaultFocused,
    },
    '&:is([data-state="checked"],[data-state="indeterminate"]):focus-visible::after':
      {
        backgroundColor:
          vars.colors.background.interactiveCriticalHighlightFocused,
      },
    '&:is([data-state="checked"],[data-state="indeterminate"])[disabled]': {
      backgroundColor: vars.colors.background.interactiveCriticalDisabled,
      borderColor: vars.colors.border.neutralHighlight,
      color: vars.colors.foreground.iconCriticalDisabled,
      cursor: "not-allowed",
    },
  },
});
