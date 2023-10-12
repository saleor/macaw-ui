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
      foreground: {
        textNeutralPlain: null,
        textNeutralDefault: null,
        textNeutralSubdued: null,
        textNeutralDisabled: null,
        textNeutralContrasted: null,
        textBrandDefault: null,
        textBrandSubdued: null,
        textBrandDisabled: null,
        textCriticalDefault: null,
        textCriticalSubdued: null,
        textCriticalDisabled: null,
        iconNeutralPlain: null,
        iconNeutralDefault: null,
        iconNeutralSubdued: null,
        iconNeutralDisabled: null,
        iconNeutralContrasted: null,
        iconBrandDefault: null,
        iconBrandSubdued: null,
        iconBrandDisabled: null,
        iconCriticalDefault: null,
        iconCriticalSubdued: null,
        iconCriticalDisabled: null,
        text1Decorative: null,
        text2Decorative: null,
        text3Decorative: null,
        icon1Decorative: null,
        icon2Decorative: null,
        icon3Decorative: null,

        default: null,
        muted: null,
        strong: null,
        disabled: null,
        inverted: null,
        success: null,
        info: null,
        critical: null,
        warning: null,
      },
      icon: {
        default: null,
        muted: null,
        strong: null,
        disabled: null,
        inverted: null,
        success: null,
        info: null,
        critical: null,
        warning: null,
      },
      background: {
        plain: null,
        subdued: null,
        highlightDim: null,
        highlightPale: null,
        surfaceNeutralPlain: null,
        surfaceNeutralSubdued: null,
        surfaceNeutralDepressed: null,
        surfaceNeutralHighlight: null,
        surfaceBrandSubdued: null,
        surfaceBrandDepressed: null,
        surfaceBrandHighlight: null,
        surfaceCriticalSubdued: null,
        surfaceCriticalDepressed: null,
        surfaceCriticalHighlight: null,
        interactiveNeutralDefault: null,
        interactiveNeutralHovering: null,
        interactiveNeutralPressing: null,
        interactiveNeutralFocused: null,
        interactiveNeutralDisabled: null,
        interactiveBrandDefault: null,
        interactiveBrandHovering: null,
        interactiveBrandPressing: null,
        interactiveBrandFocused: null,
        interactiveBrandDisabled: null,
        interactiveCriticalDefault: null,
        interactiveCriticalHovering: null,
        interactiveCriticalPressing: null,
        interactiveCriticalFocused: null,
        interactiveCriticalDisabled: null,
        interactiveNeutralSecondaryDefault: null,
        interactiveNeutralSecondaryHovering: null,
        interactiveNeutralSecondaryPressing: null,
        interactiveNeutralSecondaryFocused: null,
        interactiveNeutralSecondaryDisabled: null,
        interactiveBrandSecondaryDefault: null,
        interactiveBrandSecondaryHovering: null,
        interactiveBrandSecondaryPressing: null,
        interactiveBrandSecondaryFocused: null,
        interactiveBrandSecondaryDisabled: null,
        interactiveCriticalSecondaryDefault: null,
        interactiveCriticalSecondaryHovering: null,
        interactiveCriticalSecondaryPressing: null,
        interactiveCriticalSecondaryFocused: null,
        interactiveCriticalSecondaryDisabled: null,
        interactiveNeutralHighlightDefault: null,
        interactiveNeutralHighlightHovering: null,
        interactiveNeutralHighlightPressing: null,
        interactiveNeutralHighlightFocused: null,
        interactiveNeutralHighlightDisabled: null,
        interactiveBrandHighlightDefault: null,
        interactiveBrandHighlightHovering: null,
        interactiveBrandHighlightPressing: null,
        interactiveBrandHighlightFocused: null,
        interactiveBrandHighlightDisabled: null,
        interactiveCriticalHighlightDefault: null,
        interactiveCriticalHighlightHovering: null,
        interactiveCriticalHighlightPressing: null,
        interactiveCriticalHighlightFocused: null,
        interactiveCriticalHighlightDisabled: null,
        decorativeSurfacePlain1: null,
        decorativeSurfacePlain2: null,
        decorativeSurfacePlain3: null,
        decorativeSurfaceSubdued1: null,
        decorativeSurfaceSubdued2: null,
        decorativeSurfaceSubdued3: null,

        default: null,
        defaultHover: null,
        defaultFocus: null,
        muted: null,
        mutedHover: null,
        mutedFocus: null,
        strong: null,
        strongHover: null,
        strongFocus: null,
        inverted: null,
        success: null,
        info: null,
        critical: null,
        warning: null,
      },
      border: {
        neutralDefault: null,
        neutralSubdued: null,
        neutralHighlight: null,
        neutralPlain: null,
        brandPlain: null,
        brandDefault: null,
        brandSubdued: null,
        brandHighlight: null,
        criticalPlain: null,
        criticalDefault: null,
        criticalSubdued: null,
        criticalHighlight: null,

        default: null,
        defaultHover: null,
        defaultFocus: null,
        strong: null,
        strongHover: null,
        strongFocus: null,
        success: null,
        info: null,
        critical: null,
        warning: null,
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

      default: null,
      defaultFocus: null,
      defaultHover: null,
    },
    borderWidth: {
      0: null,
      1: null,
    },
  },
  (_value, path) => `mu-${path.map(toKebabCase).join("-")}`
);
