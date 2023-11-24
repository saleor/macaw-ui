import {
  borderRadius,
  borderWidth,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  spacing,
} from "./common";

export const defaultLight = {
  spacing,
  colors: {
    background: {
      accent1: "hsla(215, 100%, 51%, 1)",
      buttonDefaultPrimary: "hsla(211, 45%, 13%, 1)",
      buttonDefaultSecondary: "hsla(0, 0%, 100%, 1)",
      buttonDefaultTertiary: "hsla(0, 0%, 100%, 1)",
      buttonDefaultDisabled: "hsla(211, 16%, 94%, 1)",
      buttonCriticalPrimary: "hsla(11, 100%, 46%, 1)",
      buttonCriticalDisabled: "hsla(204, 16%, 94%, 1)",
      critical1: "hsla(11, 100%, 46%, 1)",
      critical2: "hsla(11, 100%, 96%, 1)",
      default1: "hsla(0, 0%, 100%, 1)",
      default1Hovered: "hsla(211, 22%, 26%, 1)",
      default1Focused: "hsla(211, 22%, 26%, 1)",
      default1Pressed: "hsla(211, 45%, 3%, 1)",
      default2: "hsla(120, 11%, 98%, 1)",
      default3: "hsla(180, 1%, 85%, 1)",
      defaultDisabled: "hsla(211, 16%, 94%, 1)",
      info1: "hsla(215, 100%, 51%, 1)",
      info2: "null",
      success1: "hsla(173, 100%, 26%, 1)",
      success2: "null",
      warning1: "hsla(36, 44%, 50%, 1)",
      warning2: "null",
    },
    text: {
      accent1: "hsla(215, 100%, 32%, 1)",
      buttonDefaultPrimary: "hsla(0, 0%, 100%, 1)",
      buttonDefaultSecondary: "hsla(180, 4%, 15%, 1)",
      buttonDefaultTertiary: "hsla(180, 4%, 15%, 1)",
      buttonCriticalPrimary: "hsla(0, 0%, 100%, 1)",
      buttonCriticalDisabled: "hsla(212, 14%, 67%, 1)",
      critical1: "hsla(11, 100%, 29%, 1)",
      critical2: "hsla(11, 100%, 45%, 1)",
      default1: "hsla(180, 4%, 15%, 1)",
      default2: "hsla(180, 1%, 49%, 1)",
      default3: "null",
      defaultDisabled: "hsla(212, 14%, 67%, 1)",
      info1: "hsla(215, 100%, 32%, 1)",
      success1: "hsla(169, 42%, 20%, 1)",
      warning1: "hsl(42, 100%, 84%, 1)",
    },
    border: {
      accent1: "hsla(215, 100%, 88%, 1)",
      critical1: "hsla(11, 100%, 74%, 1)",
      default1: "hsla(212, 14%, 77%, 1)",
      default1Hovered: "hsla(210, 15%, 87%, 1)",
      default1Focused: "null",
      default2: "hsla(211, 13%, 66%, 1)",
      default3: "null",
      defaultDisabled: "null",
      info1: "hsla(215, 100%, 88%, 1)",
      success1: "null",
      warning1: "null",
    },
  },
  fontSize,
  borderRadius,
  lineHeight,
  fontWeight,
  letterSpacing,
  boxShadow: {
    interactiveDefaultFocused: "0px 1px 1px 0px hsla(212, 44%, 13%, 0.16)",
    interactiveDefaultHovering: "0px 2px 3px 0px hsla(211, 42%, 16%, 0.1)",
    overlay: "0px 3px 8px 0px hsla(211, 42%, 16%, 0.08)",
    modal: "0px 8px 16px 0px hsla(211, 42%, 16%, 0.08)",
  },
  borderWidth,
};
