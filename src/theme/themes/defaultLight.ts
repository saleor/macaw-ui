import {
  borderRadius,
  borderWidth,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  spacing,
} from "./common";

// TODO: add note why those colors are null and will be commented out
export const defaultLight = {
  spacing,
  colors: {
    background: {
      accent1: "hsla(215, 100%, 51%, 1)",
      accent1Hovered: "hsla(215, 100%, 51%, 0.12)",
      accent1Pressed: "hsla(215, 100%, 51%, 0.24)",
      buttonCriticalDisabled: "hsla(204, 16%, 94%, 1)",
      buttonCriticalPrimary: "hsla(11, 100%, 46%, 1)",
      buttonCriticalPrimaryFocused: "hsla(11, 100%, 63%, 1)",
      buttonCriticalPrimaryHovered: "hsla(11, 100%, 63%, 1)",
      buttonCriticalPrimaryPressed: "hsla(11, 100%, 29%, 1)",
      buttonDefaultDisabled: "hsla(211, 16%, 94%, 1)",
      buttonDefaultPrimary: "hsla(211, 45%, 13%, 1)",
      buttonDefaultPrimaryFocused: "hsla(211, 22%, 26%, 1)",
      buttonDefaultPrimaryHovered: "hsla(211, 22%, 26%, 1)",
      buttonDefaultPrimaryPressed: "hsla(211, 45%, 3%, 1)",
      buttonDefaultSecondary: "hsla(0, 0%, 100%, 1)",
      buttonDefaultSecondaryFocused: "hsla(220, 18%, 97%, 1)",
      buttonDefaultSecondaryHovered: "hsla(220, 18%, 97%, 1)",
      buttonDefaultSecondaryPressed: "hsla(210, 15%, 87%, 1)",
      buttonDefaultTertiary: "hsla(180, 4%, 15%, 0)",
      buttonDefaultTertiaryFocused: "hsla(180, 4%, 15%, 0.08)",
      buttonDefaultTertiaryHovered: "hsla(180, 4%, 15%, 0.06)",
      buttonDefaultTertiaryPressed: "hsla(180, 4%, 15%, 0.12)",
      critical1: "hsla(11, 100%, 96%, 1)",
      critical1Focused: "hsla(11, 100%, 97%, 1)",
      critical1Hovered: "hsla(11, 100%, 45%, 0.16)",
      critical1Pressed: "hsla(11, 100%, 45%, 0.32)",
      critical2: "hsla(11, 100%, 46%, 1)",
      default1: "hsla(0, 0%, 100%, 1)",
      default1Focused: "hsla(180, 4%, 15%, 0.08)",
      default1Hovered: "hsla(180, 4%, 15%, 0.06)",
      default1Pressed: "hsla(180, 4%, 15%, 0.12)",
      default2: "hsla(120, 11%, 98%, 1)",
      default3: "hsla(180, 1%, 85%, 1)",
      defaultDisabled: "hsla(211, 16%, 94%, 1)",
      info1: "hsla(233, 100%, 91%, 1)",
      success1: "hsla(173, 43%, 80%, 1)",
      warning1: "hsla(36, 44%, 50%, 1)",
    },
    text: {
      accent1: "hsla(234, 96%, 56%, 1)",
      buttonCriticalDisabled: "hsla(212, 14%, 67%, 1)",
      buttonCriticalPrimary: "hsla(0, 0%, 100%, 1)",
      buttonDefaultPrimary: "hsla(0, 0%, 100%, 1)",
      buttonDefaultSecondary: "hsla(180, 4%, 15%, 1)",
      buttonDefaultTertiary: "hsla(180, 4%, 15%, 1)",
      critical1: "hsla(11, 100%, 29%, 1)",
      critical2: "hsla(11, 100%, 45%, 1)",
      default1: "hsla(180, 4%, 15%, 1)",
      default2: "hsla(180, 1%, 49%, 1)",
      defaultDisabled: "hsla(212, 14%, 67%, 1)",
      info1: "hsla(234, 100%, 42%, 1)",
      success1: "hsla(169, 42%, 20%, 1)",
      warning1: "hsla(42, 100%, 84%, 1)",
    },
    border: {
      accent1: "hsla(215, 100%, 74%, 1)",
      critical1: "hsla(11, 100%, 29%, 1)",
      default1: "hsla(210, 15%, 87%, 1)",
      default1Focused: "hsla(212, 14%, 77%, 1)",
      default1Hovered: "hsla(210, 15%, 87%, 1)",
      default2: "hsla(211, 13%, 66%, 1)",
      defaultDisabled: "hsla(210, 15%, 87%, 1)",
      info1: "hsla(234, 100%, 42%, 1)",
      success1: "hsl(173, 97%, 15%, 1)",
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
