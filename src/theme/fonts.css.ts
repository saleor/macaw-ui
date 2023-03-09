import { globalFontFace, globalStyle } from "@vanilla-extract/css";

// adapted from https://rsms.me/inter/inter.css

globalFontFace("Inter", {
  src: 'url("./Inter-Thin.var.woff2") format("woff2")',
  fontDisplay: "swap",
  fontStyle: "normal",
  fontWeight: "100",
});

globalFontFace("Inter", {
  src: 'url("./Inter-ThinItalic.var.woff2") format("woff2")',
  fontDisplay: "swap",
  fontStyle: "italic",
  fontWeight: "100",
});

globalFontFace("Inter", {
  src: 'url("./Inter-ExtraLight.var.woff2") format("woff2")',
  fontDisplay: "swap",
  fontStyle: "normal",
  fontWeight: "200",
});

globalFontFace("Inter", {
  src: 'url("./Inter-ExtraLightItalic.var.woff2") format("woff2")',
  fontDisplay: "swap",
  fontStyle: "italic",
  fontWeight: "200",
});

globalFontFace("Inter", {
  src: 'url("./Inter-Light.var.woff2") format("woff2")',
  fontDisplay: "swap",
  fontStyle: "normal",
  fontWeight: "300",
});

globalFontFace("Inter", {
  src: 'url("./Inter-LightItalic.var.woff2") format("woff2")',
  fontDisplay: "swap",
  fontStyle: "italic",
  fontWeight: "300",
});

globalFontFace("Inter", {
  src: 'url("./Inter-Regular.var.woff2") format("woff2")',
  fontDisplay: "swap",
  fontStyle: "normal",
  fontWeight: "400",
});

globalFontFace("Inter", {
  src: 'url("./Inter-Italic.var.woff2") format("woff2")',
  fontDisplay: "swap",
  fontStyle: "italic",
  fontWeight: "400",
});

globalFontFace("Inter", {
  src: 'url("./Inter-Medium.var.woff2") format("woff2")',
  fontDisplay: "swap",
  fontStyle: "normal",
  fontWeight: "500",
});

globalFontFace("Inter", {
  src: 'url("./Inter-MediumItalic.var.woff2") format("woff2")',
  fontDisplay: "swap",
  fontStyle: "italic",
  fontWeight: "500",
});

globalFontFace("Inter", {
  src: 'url("./Inter-SemiBold.var.woff2") format("woff2")',
  fontDisplay: "swap",
  fontStyle: "normal",
  fontWeight: "600",
});

globalFontFace("Inter", {
  src: 'url("./Inter-SemiBoldItalic.var.woff2") format("woff2")',
  fontDisplay: "swap",
  fontStyle: "italic",
  fontWeight: "600",
});

globalFontFace("Inter", {
  src: 'url("./Inter-Bold.var.woff2") format("woff2")',
  fontDisplay: "swap",
  fontStyle: "normal",
  fontWeight: "700",
});

globalFontFace("Inter", {
  src: 'url("./Inter-BoldItalic.var.woff2") format("woff2")',
  fontDisplay: "swap",
  fontStyle: "italic",
  fontWeight: "700",
});

globalFontFace("Inter", {
  src: 'url("./Inter-ExtraBold.var.woff2") format("woff2")',
  fontDisplay: "swap",
  fontStyle: "normal",
  fontWeight: "800",
});

globalFontFace("Inter", {
  src: 'url("./Inter-ExtraBoldItalic.var.woff2") format("woff2")',
  fontDisplay: "swap",
  fontStyle: "italic",
  fontWeight: "800",
});

globalFontFace("Inter", {
  src: 'url("./Inter-Black.var.woff2") format("woff2")',
  fontDisplay: "swap",
  fontStyle: "normal",
  fontWeight: "900",
});

globalFontFace("Inter", {
  src: 'url("./Inter-ExtraBlackItalic.var.woff2") format("woff2")',
  fontDisplay: "swap",
  fontStyle: "italic",
  fontWeight: "900",
});

globalFontFace("Inter var", {
  src: 'url("./Inter-roman.var.woff2") format("woff2")',
  fontDisplay: "swap",
  fontStyle: "normal",
  fontWeight: "100 900",
});

globalFontFace("Inter var", {
  src: 'url("./Inter-italic.var.woff2") format("woff2")',
  fontDisplay: "swap",
  fontStyle: "italic",
  fontWeight: "100 900",
});

globalStyle("html", {
  fontFamily: "Inter, sans-serif",
  "@supports": {
    "(font-variation-settings: normal)": {
      fontFamily: "'Inter var', sans-serif",
    },
  },
});
