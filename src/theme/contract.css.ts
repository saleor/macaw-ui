import { createGlobalThemeContract } from "@vanilla-extract/css";

const toKebabCase = (str: string) =>
  str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();

export const vars = createGlobalThemeContract(
  {
    space: {
      0: null,
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
      10: null,
      11: null,
    },
    colors: {
      foreground: {
        textNeutralPlain: null,
        textNeutralDefault: null,
        textNeutralSubdued: null,
        textNeutralDisabled: null,
        textNeutralContrasted: null,
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
      },
      border: {
        neutralPlain: null,
        neutralDefault: null,
        neutralSubdued: null,
        neutralHighlight: null,
        brandPlain: null,
        brandDefault: null,
        brandSubdued: null,
        brandHighlight: null,
        criticalPlain: null,
        criticalDefault: null,
        criticalSubdued: null,
        criticalHighlight: null,
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
    },
    fontFamily: {
      body: null,
    },
    lineHeight: {
      heroLarge: null,
      heroMedium: null,
      heroSmall: null,
      titleLarge: null,
      titleMedium: null,
      titleSmall: null,
      headingLarge: null,
      headingMedium: null,
      headingSmall: null,
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
      1: null,
    },
  },
  (_value, path) => `mu-${path.map(toKebabCase).join("-")}`
);
