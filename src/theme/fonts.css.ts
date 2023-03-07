import { globalFontFace } from "@vanilla-extract/css";

const interVar = "'Inter var'";

globalFontFace(interVar, {
  src: 'url("./Inter-roman.var.woff2") format("woff2")',
  fontDisplay: "swap",
  fontStyle: "normal",
  fontWeight: "380 400 440 480 500 580 600",
});
