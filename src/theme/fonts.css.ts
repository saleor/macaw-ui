import { globalFontFace, globalStyle } from "@vanilla-extract/css";

const interVar = "'Inter var'";
const inter = "'Inter'";

globalStyle(":root", {
  fontFamily: inter,
  "@supports": {
    "(font-variation-settings: normal)": {
      fontFamily: interVar,
    },
  },
});

globalFontFace(inter, {
  src: 'url("./Inter-Light.woff2") format("woff2")',
  fontDisplay: "swap",
  fontStyle: "normal",
  fontWeight: "300",
});

globalFontFace(inter, {
  src: 'url("./Inter-Regular.woff2") format("woff2")',
  fontDisplay: "swap",
  fontStyle: "normal",
  fontWeight: "400",
});

globalFontFace(inter, {
  src: 'url("./Inter-Medium.woff2") format("woff2")',
  fontDisplay: "swap",
  fontStyle: "normal",
  fontWeight: "500",
});

globalFontFace(inter, {
  src: 'url("./Inter-SemiBold.woff2") format("woff2")',
  fontDisplay: "swap",
  fontStyle: "normal",
  fontWeight: "600",
});

globalFontFace(inter, {
  src: 'url("./Inter-Bold.woff2") format("woff2")',
  fontDisplay: "swap",
  fontStyle: "normal",
  fontWeight: "700",
});

globalFontFace(interVar, {
  src: 'url("./Inter-roman.var.woff2") format("woff2")',
  fontDisplay: "swap",
  fontStyle: "normal",
  fontWeight: "380 400 440 480 500 580 600",
});
