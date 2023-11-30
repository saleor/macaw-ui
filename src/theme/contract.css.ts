import { createGlobalThemeContract } from "@vanilla-extract/css";

const toKebabCase = (str: string) =>
  str
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2")
    .toLowerCase()
    .replace(".", "-");

export const vars = createGlobalThemeContract(
  {
    spacing: {
      0: null,
      px: null,
      0.5: null,
      1: null,
      1.5: null,
      2: null,
      2.5: null,
      3: null,
      3.5: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
      10: null,
      11: null,
      12: null,
      14: null,
      16: null,
      20: null,
      24: null,
      28: null,
      32: null,
      36: null,
      40: null,
      44: null,
      48: null,
      52: null,
    },
    colors: {
      background: {
        accent1: null,
        accent1Hovered: null,
        accent1Pressed: null,
        buttonCriticalDisabled: null,
        buttonCriticalPrimary: null,
        buttonCriticalPrimaryFocused: null,
        buttonCriticalPrimaryHovered: null,
        buttonCriticalPrimaryPressed: null,
        buttonDefaultDisabled: null,
        buttonDefaultPrimary: null,
        buttonDefaultPrimaryFocused: null,
        buttonDefaultPrimaryHovered: null,
        buttonDefaultPrimaryPressed: null,
        buttonDefaultSecondary: null,
        buttonDefaultSecondaryFocused: null,
        buttonDefaultSecondaryHovered: null,
        buttonDefaultSecondaryPressed: null,
        buttonDefaultTertiary: null,
        buttonDefaultTertiaryFocused: null,
        buttonDefaultTertiaryHovered: null,
        buttonDefaultTertiaryPressed: null,
        critical1: null,
        critical2: null,
        default1: null,
        default1Focused: null,
        default1Hovered: null,
        default1Pressed: null,
        default2: null,
        default3: null,
        defaultDisabled: null,
        info1: null,
        info2: null,
        success1: null,
        success2: null,
        warning1: null,
        warning2: null,
      },
      text: {
        accent1: null,
        buttonCriticalDisabled: null,
        buttonCriticalPrimary: null,
        buttonDefaultPrimary: null,
        buttonDefaultSecondary: null,
        buttonDefaultTertiary: null,
        critical1: null,
        critical2: null,
        default1: null,
        default2: null,
        default3: null,
        defaultDisabled: null,
        info1: null,
        success1: null,
        warning1: null,
      },
      border: {
        accent1: null,
        critical1: null,
        default1: null,
        default1Focused: null,
        default1Hovered: null,
        default2: null,
        default3: null,
        defaultDisabled: null,
        info1: null,
        success1: null,
        warning1: null,
      },
    },
    fontSize: {
      heroLarge: null,
      heroMedium: null,
      heroSmall: null,
      titleLarge: null,
      titleMedium: null,
      titleSmall: null,
      headingLarge: null,
      headingMedium: null,
      headingSmall: null,
      bodyStrongLarge: null,
      bodyStrongMedium: null,
      bodyStrongSmall: null,
      bodyEmpLarge: null,
      bodyEmpMedium: null,
      bodyEmpSmall: null,
      bodyLarge: null,
      bodyMedium: null,
      bodySmall: null,
      buttonLarge: null,
      buttonMedium: null,
      buttonSmall: null,
      captionLarge: null,
      captionMedium: null,
      captionSmall: null,
    },
    borderRadius: {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
    },
    lineHeight: {
      1: null,
      heroLarge: null,
      heroMedium: null,
      heroSmall: null,
      titleLarge: null,
      titleMedium: null,
      titleSmall: null,
      headingLarge: null,
      headingMedium: null,
      headingSmall: null,
      bodyStrongLarge: null,
      bodyStrongMedium: null,
      bodyStrongSmall: null,
      bodyEmpLarge: null,
      bodyEmpMedium: null,
      bodyEmpSmall: null,
      bodyLarge: null,
      bodyMedium: null,
      bodySmall: null,
      buttonLarge: null,
      buttonMedium: null,
      buttonSmall: null,
      captionLarge: null,
      captionMedium: null,
      captionSmall: null,
    },
    fontWeight: {
      heroLarge: null,
      heroMedium: null,
      heroSmall: null,
      titleLarge: null,
      titleMedium: null,
      titleSmall: null,
      headingLarge: null,
      headingMedium: null,
      headingSmall: null,
      bodyStrongLarge: null,
      bodyStrongMedium: null,
      bodyStrongSmall: null,
      bodyEmpLarge: null,
      bodyEmpMedium: null,
      bodyEmpSmall: null,
      bodyLarge: null,
      bodyMedium: null,
      bodySmall: null,
      buttonLarge: null,
      buttonMedium: null,
      buttonSmall: null,
      captionLarge: null,
      captionMedium: null,
      captionSmall: null,
    },
    letterSpacing: {
      heroLarge: null,
      heroMedium: null,
      heroSmall: null,
      titleLarge: null,
      titleMedium: null,
      titleSmall: null,
      headingLarge: null,
      headingMedium: null,
      headingSmall: null,
      bodyStrongLarge: null,
      bodyStrongMedium: null,
      bodyStrongSmall: null,
      bodyEmpLarge: null,
      bodyEmpMedium: null,
      bodyEmpSmall: null,
      bodyLarge: null,
      bodyMedium: null,
      bodySmall: null,
      buttonLarge: null,
      buttonMedium: null,
      buttonSmall: null,
      captionLarge: null,
      captionMedium: null,
      captionSmall: null,
    },
    boxShadow: {
      interactiveDefaultFocused: null,
      interactiveDefaultHovering: null,
      overlay: null,
      modal: null,
    },
    borderWidth: {
      0: null,
      1: null,
    },
  },
  (_value, path) => `mu-${path.map(toKebabCase).join("-")}`
);
