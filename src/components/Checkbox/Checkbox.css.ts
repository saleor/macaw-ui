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
  // TODO: what about color here - should it be its own color?
  color: "buttonDefaultPrimary",
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
      borderColor: vars.colors.border.default1,
      backgroundColor: vars.colors.background.default1,
      borderRadius: vars.borderRadius[1],
      boxShadow: vars.boxShadow.interactiveDefaultFocused,
    },
    '&[data-state="unchecked"]:hover': {
      boxShadow: vars.boxShadow.interactiveDefaultHovering,
      borderColor: vars.colors.border.default2,
      backgroundColor: vars.colors.background.default1Hovered,
    },
    '&[data-state="unchecked"]:hover::after': {
      backgroundColor: vars.colors.background.default1Hovered,
    },
    '&[data-state="unchecked"]:active': {
      boxShadow: "none",
      borderColor: vars.colors.border.default2,
      backgroundColor: vars.colors.background.default1Pressed,
    },
    '&[data-state="unchecked"]:active::after': {
      backgroundColor: vars.colors.background.default1Pressed,
    },
    '&[data-state="unchecked"]:focus-visible': {
      boxShadow: vars.boxShadow.interactiveDefaultHovering,
      borderColor: vars.colors.border.default1,
      backgroundColor: vars.colors.background.default1Focused,
      outline: "none",
    },
    '&[data-state="unchecked"]:focus-visible::after': {
      backgroundColor: vars.colors.background.default1Hovered,
    },
    '&[data-state="unchecked"][disabled]': {
      borderColor: vars.colors.border.default1,
      backgroundColor: vars.colors.background.defaultDisabled,
      cursor: "not-allowed",
    },
    '&:is([data-state="checked"],[data-state="indeterminate"])': {
      backgroundColor: vars.colors.background.accent1,
      borderColor: vars.colors.border.default1,
      boxShadow: vars.boxShadow.interactiveDefaultFocused,
    },
    '&:is([data-state="checked"],[data-state="indeterminate"]):hover': {
      // TODO: do we need accent with hover?
      backgroundColor: vars.colors.background.accent1,
      borderColor: vars.colors.border.accent1,
      boxShadow: vars.boxShadow.interactiveDefaultHovering,
    },
    '&:is([data-state="checked"],[data-state="indeterminate"]):hover::after': {
      backgroundColor: vars.colors.background.accent1Hovered,
    },
    '&:is([data-state="checked"],[data-state="indeterminate"]):active': {
      // TODO: do we need accent with pressing?
      backgroundColor: vars.colors.background.accent1,
      borderColor: vars.colors.border.accent1,
      boxShadow: vars.boxShadow.interactiveDefaultFocused,
    },
    '&:is([data-state="checked"],[data-state="indeterminate"]):active::after': {
      backgroundColor: vars.colors.background.accent1,
    },
    '&:is([data-state="checked"],[data-state="indeterminate"]):focus-visible': {
      // TODO: do we need accent with focused?
      backgroundColor: vars.colors.background.accent1,
      borderColor: vars.colors.border.accent1,
      boxShadow: vars.boxShadow.interactiveDefaultFocused,
    },
    '&:is([data-state="checked"],[data-state="indeterminate"]):focus-visible::after':
      {
        backgroundColor: vars.colors.background.accent1,
      },
    '&:is([data-state="checked"],[data-state="indeterminate"])[disabled]': {
      backgroundColor: vars.colors.background.defaultDisabled,
      borderColor: vars.colors.border.defaultDisabled,
      cursor: "not-allowed",
      color: vars.colors.text.defaultDisabled,
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
      borderColor: vars.colors.border.critical1,
      backgroundColor: vars.colors.background.critical2,
      borderRadius: vars.borderRadius[1],
      boxShadow: vars.boxShadow.interactiveDefaultFocused,
    },
    '&[data-state="unchecked"]:hover': {
      boxShadow: vars.boxShadow.interactiveDefaultHovering,
      borderColor: vars.colors.border.default2,
      // TODO: do we need critical with hover?
      backgroundColor: vars.colors.background.critical2,
    },
    '&[data-state="unchecked"]:hover::after': {
      backgroundColor: vars.colors.background.critical2,
    },
    '&[data-state="unchecked"]:active': {
      boxShadow: "none",
      borderColor: vars.colors.border.default2,
      backgroundColor: vars.colors.background.default2,
    },
    '&[data-state="unchecked"]:active::after': {
      backgroundColor: vars.colors.background.default2,
    },
    '&[data-state="unchecked"]:focus-visible': {
      boxShadow: vars.boxShadow.interactiveDefaultHovering,
      borderColor: vars.colors.border.critical1,
      backgroundColor: vars.colors.background.default2,
      outline: "none",
    },
    '&[data-state="unchecked"]:focus-visible::after': {
      backgroundColor: vars.colors.background.default2,
    },
    '&[data-state="unchecked"][disabled]': {
      borderColor: vars.colors.border.default1,
      backgroundColor: vars.colors.background.defaultDisabled,
      cursor: "not-allowed",
    },
    '&:is([data-state="checked"],[data-state="indeterminate"])': {
      backgroundColor: vars.colors.background.critical1,
      borderColor: vars.colors.border.critical1,
      boxShadow: vars.boxShadow.interactiveDefaultFocused,
    },
    '&:is([data-state="checked"],[data-state="indeterminate"]):hover': {
      backgroundColor: vars.colors.background.critical1,
      borderColor: vars.colors.border.critical1,
      boxShadow: vars.boxShadow.interactiveDefaultHovering,
    },
    '&:is([data-state="checked"],[data-state="indeterminate"]):hover::after': {
      backgroundColor: vars.colors.background.critical1,
    },
    '&:is([data-state="checked"],[data-state="indeterminate"]):active': {
      backgroundColor: vars.colors.background.critical1,
      borderColor: vars.colors.border.critical1,
      boxShadow: vars.boxShadow.interactiveDefaultFocused,
    },
    '&:is([data-state="checked"],[data-state="indeterminate"]):active::after': {
      backgroundColor: vars.colors.background.critical1,
    },
    '&:is([data-state="checked"],[data-state="indeterminate"]):focus-visible': {
      backgroundColor: vars.colors.background.critical1,
      borderColor: vars.colors.border.critical1,
      boxShadow: vars.boxShadow.interactiveDefaultFocused,
    },
    '&:is([data-state="checked"],[data-state="indeterminate"]):focus-visible::after':
      {
        backgroundColor: vars.colors.background.critical1,
      },
    '&:is([data-state="checked"],[data-state="indeterminate"])[disabled]': {
      backgroundColor: vars.colors.background.defaultDisabled,
      borderColor: vars.colors.border.defaultDisabled,
      color: vars.colors.text.defaultDisabled,
      cursor: "not-allowed",
    },
  },
});
