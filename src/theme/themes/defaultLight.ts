import {
  borderRadius,
  borderWidth,
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  space,
} from "./common";

export const defaultLight = {
  space,
  colors: {
    foreground: {
      textNeutralPlain: "hsla(210, 25%, 26%, 1)",
      textNeutralDefault: "hsla(180, 4%, 15%, 1)",
      textNeutralSubdued: "hsla(180, 1%, 49%, 1)",
      textNeutralDisabled: "hsla(212, 14%, 67%, 1)",
      textNeutralContrasted: "hsla(0, 0%, 100%, 1)",
      textBrandDefault: "hsla(215, 100%, 32%, 1)",
      textBrandSubdued: "hsla(215, 58%, 51%, 1)",
      textBrandDisabled: "hsla(215, 100%, 72%, 1)",
      textCriticalDefault: "hsla(11, 100%, 29%, 1)",
      textCriticalSubdued: "hsla(11, 100%, 45%, 1)",
      textCriticalDisabled: "hsla(11, 100%, 71%, 1)",
      iconNeutralPlain: "hsla(211, 18%, 36%, 1)",
      iconNeutralDefault: "hsla(180, 4%, 15%, 1)",
      iconNeutralSubdued: "hsla(180, 1%, 49%, 1)",
      iconNeutralDisabled: "hsla(212, 14%, 75%, 1)",
      iconNeutralContrasted: "hsla(0, 0%, 100%, 1)",
      iconBrandDefault: "hsla(215, 100%, 40%, 1)",
      iconBrandSubdued: "hsla(215, 83%, 61%, 1)",
      iconBrandDisabled: "hsla(215, 100%, 72%, 1)",
      iconCriticalDefault: "hsla(11, 100%, 36%, 1)",
      iconCriticalSubdued: "hsla(11, 100%, 57%, 1)",
      iconCriticalDisabled: "hsla(11, 100%, 72%, 1)",
      text1Decorative: "hsla(281, 99%, 31%, 1)",
      text2Decorative: "hsla(173, 97%, 15%, 1)",
      text3Decorative: "hsla(234, 100%, 42%, 1)",
      icon1Decorative: "hsla(281, 99%, 41%, 1)",
      icon2Decorative: "hsla(173, 100%, 20%, 1)",
      icon3Decorative: "hsla(234, 96%, 56%, 1)",
    },
    background: {
      plain: "hsla(0, 0%, 100%, 1)",
      subdued: "hsla(120, 11%, 98%, 1)",
      highlightDim: "hsla(0, 0%, 0%, 0.6)",
      highlightPale: "hsla(0, 0%, 100%, 0.6)",
      surfaceNeutralPlain: "hsla(0, 0%, 100%, 1)",
      surfaceNeutralSubdued: "hsla(120, 11%, 98%, 1)",
      surfaceNeutralDepressed: "hsla(210, 15%, 85%, 1)",
      surfaceNeutralHighlight: "hsla(212, 44%, 13%, 0.06)",
      surfaceBrandSubdued: "hsla(215, 100%, 96%, 1)",
      surfaceBrandDepressed: "hsla(215, 100%, 88%, 1)",
      surfaceBrandHighlight: "hsla(215, 100%, 51%, 0.08)",
      surfaceCriticalSubdued: "hsla(11, 100%, 96%, 1)",
      surfaceCriticalDepressed: "hsla(11, 100%, 88%, 1)",
      surfaceCriticalHighlight: "hsla(11, 100%, 46%, 0.08)",
      interactiveNeutralDefault: "hsla(211, 45%, 13%, 1)",
      interactiveNeutralHovering: "hsla(211, 22%, 26%, 1)",
      interactiveNeutralPressing: "hsla(211, 45%, 3%, 1)",
      interactiveNeutralFocused: "hsla(211, 22%, 26%, 1)",
      interactiveNeutralDisabled: "hsla(211, 16%, 94%, 1)",
      interactiveBrandDefault: "hsla(215, 100%, 51%, 1)",
      interactiveBrandHovering: "hsla(215, 100%, 62%, 1)",
      interactiveBrandPressing: "hsla(215, 100%, 31%, 1)",
      interactiveBrandFocused: "hsla(215, 100%, 62%, 1)",
      interactiveBrandDisabled: "hsla(211, 16%, 94%, 1)",
      interactiveCriticalDefault: "hsla(11, 100%, 46%, 1)",
      interactiveCriticalHovering: "hsla(11, 100%, 63%, 1)",
      interactiveCriticalPressing: "hsla(11, 100%, 29%, 1)",
      interactiveCriticalFocused: "hsla(11, 100%, 63%, 1)",
      interactiveCriticalDisabled: "hsla(204, 16%, 94%, 1)",
      interactiveNeutralSecondaryDefault: "hsla(0, 0%, 100%, 1)",
      interactiveNeutralSecondaryHovering: "hsla(220, 18%, 97%, 1)",
      interactiveNeutralSecondaryPressing: "hsla(210, 15%, 87%, 1)",
      interactiveNeutralSecondaryFocused: "hsla(220, 18%, 97%, 1)",
      interactiveNeutralSecondaryDisabled: "hsla(0, 0%, 100%, 1)",
      interactiveBrandSecondaryDefault: "hsla(0, 0%, 100%, 1)",
      interactiveBrandSecondaryHovering: "hsla(215, 100%, 96%, 1)",
      interactiveBrandSecondaryPressing: "hsla(215, 100%, 89%, 1)",
      interactiveBrandSecondaryFocused: "hsla(215, 100%, 96%, 1)",
      interactiveBrandSecondaryDisabled: "hsla(0, 0%, 100%, 1)",
      interactiveCriticalSecondaryDefault: "hsla(0, 0%, 100%, 1)",
      interactiveCriticalSecondaryHovering: "hsla(11, 100%, 97%, 1)",
      interactiveCriticalSecondaryPressing: "hsla(11, 100%, 90%, 1)",
      interactiveCriticalSecondaryFocused: "hsla(11, 100%, 97%, 1)",
      interactiveCriticalSecondaryDisabled: "hsla(0, 0%, 100%, 1)",
      interactiveNeutralHighlightDefault: "hsla(180, 4%, 15%, 0)",
      interactiveNeutralHighlightHovering: "hsla(180, 4%, 15%, 0.06)",
      interactiveNeutralHighlightPressing: "hsla(180, 4%, 15%, 0.12)",
      interactiveNeutralHighlightFocused: "hsla(180, 4%, 15%, 0.08)",
      interactiveNeutralHighlightDisabled: "hsla(212, 44%, 13%, 0)",
      interactiveBrandHighlightDefault: "hsla(212, 44%, 13%, 0.08)",
      interactiveBrandHighlightHovering: "hsla(215, 100%, 51%, 0.12)",
      interactiveBrandHighlightPressing: "hsla(215, 100%, 51%, 0.24)",
      interactiveBrandHighlightFocused: "hsla(215, 100%, 51%, 0.12)",
      interactiveBrandHighlightDisabled: "hsla(212, 44%, 13%, 0)",
      interactiveCriticalHighlightDefault: "hsla(11, 100%, 46%, 0)",
      interactiveCriticalHighlightHovering: "hsla(11, 100%, 46%, 0.12)",
      interactiveCriticalHighlightPressing: "hsla(11, 100%, 46%, 0.2)",
      interactiveCriticalHighlightFocused: "hsla(11, 100%, 46%, 0.12)",
      interactiveCriticalHighlightDisabled: "hsla(11, 100%, 46%, 0)",
      decorativeSurfacePlain1: "hsla(281, 99%, 56%, 1)",
      decorativeSurfacePlain2: "hsla(173, 100%, 26%, 1)",
      decorativeSurfacePlain3: "hsla(234, 100%, 66%, 1)",
      decorativeSurfaceSubdued1: "hsla(281, 88%, 90%, 1)",
      decorativeSurfaceSubdued2: "hsla(173, 43%, 80%, 1)",
      decorativeSurfaceSubdued3: "hsla(234, 100%, 91%, 1)",
    },
    border: {
      neutralDefault: "hsla(212, 14%, 77%, 1)",
      neutralSubdued: "hsla(211, 13%, 66%, 1)",
      neutralHighlight: "hsla(212, 44%, 13%, 0.08)",
      neutralPlain: "hsla(330, 5%, 91%, 1)",
      brandPlain: "hsla(215, 100%, 88%, 1)",
      brandDefault: "hsla(215, 100%, 74%, 1)",
      brandSubdued: "hsla(215, 100%, 61%, 1)",
      brandHighlight: "hsla(215, 100%, 51%, 0.1)",
      criticalPlain: "hsla(11, 100%, 88%, 1)",
      criticalDefault: "hsla(11, 100%, 74%, 1)",
      criticalSubdued: "hsla(11, 100%, 57%, 1)",
      criticalHighlight: "hsla(11, 100%, 46%, 0.08)",
    },
  },
  fontSize,
  borderRadius,
  fontFamily,
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
