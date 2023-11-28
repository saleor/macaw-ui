import {
  borderRadius,
  borderWidth,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  spacing,
} from "./common";

export const defaultDark = {
  spacing,
  colors: {
    background: {
      accent1: "hsla(215, 100%, 62%, 1)",
      accent1Hovered: "hsla(215, 100%, 51%, 0.16)",
      accent1Pressed: "hsla(215, 100%, 51%, 0.32)",
      buttonDefaultPrimary: "hsla(0, 0%, 100%, 1)",
      buttonDefaultSecondary: "hsla(232, 17%, 18%, 1)",
      buttonDefaultTertiary: "hsla(180, 4%, 15%, 0)",
      buttonDefaultDisabled: "hsla(211, 32%, 21%, 1)",
      buttonCriticalPrimary: "hsla(11, 100%, 56%, 1)",
      buttonCriticalDisabled: "hsla(204, 16%, 94%, 1)",
      critical1: "hsla(11, 100%, 56%, 1)",
      critical2: "hsla(11, 100%, 96%, 1)",
      default1: "hsla(232, 17%, 18%, 1)",
      default1Hovered: "hsla(0, 0%, 100%, 0.06)",
      default1Focused: "hsla(0, 0%, 100%, 0.06)",
      default1Pressed: "hsla(0, 0%, 100%, 0.12)",
      default2: "hsla(231, 17%, 16%, 1)",
      default3: "hsla(211, 42%, 12%, 1)",
      defaultDisabled: "hsla(211, 32%, 21%, 1)",
      info1: "hsla(215, 100%, 62%, 1)",
      info2: "null",
      success1: "hsla(173, 100%, 32%, 1)",
      success2: "null",
      warning1: "hsla(36, 44%, 50%, 1)",
      warning2: "null",
    },
    text: {
      accent1: "hsla(215, 100%, 83%, 1)",
      buttonDefaultPrimary: "null",
      buttonDefaultSecondary: "null",
      buttonDefaultTertiary: "null",
      buttonCriticalPrimary: "null",
      buttonCriticalDisabled: "null",
      critical1: "hsla(11, 100%, 82%, 1)",
      critical2: "hsla(11, 100%, 58%, 1)",
      default1: "hsla(0, 0%, 100%, 1)",
      default2: "hsla(230, 10%, 53%, 1)",
      default3: "null",
      defaultDisabled: "hsla(212, 19%, 39%, 1)",
      info1: "hsla(215, 100%, 83%, 1)",
      success1: "hsla(173, 79%, 62%, 1)",
      warning1: "hsla(42, 100%, 84%, 1)",
    },
    border: {
      accent1: "hsla(215, 100%, 39%, 1)",
      critical1: "hsla(11, 100%, 35%, 1)",
      default1: "hsla(210, 32%, 25%, 1)",
      default1Hovered: "hsla(210, 32%, 25%, 1)",
      default1Focused: "null",
      default2: "hsla(211, 21%, 39%, 1)",
      default3: "null",
      defaultDisabled: "null",
      info1: "hsla(210, 32%, 25%, 1)",
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
    interactiveDefaultFocused: "0px 1px 1px 0px hsla(0, 0%, 0%, 0.32)",
    interactiveDefaultHovering: "0px 2px 3px 0px hsla(0, 0%, 0%, 0.28)",
    overlay: "0px 3px 8px 0px hsla(0, 0%, 0%, 0.24)",
    modal: "0px 8px 16px 0px hsla(0, 0%, 0%, 0.2)",
  },
  borderWidth,
};
