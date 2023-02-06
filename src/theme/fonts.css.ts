import { globalFontFace } from "@vanilla-extract/css";

const inter = "Inter var";

globalFontFace(inter, {
  src: 'url("./Inter-roman.var.woff2") format("woff2")',
  fontDisplay: "swap",
  fontStyle: "normal",
  fontWeight: "380 440 480 500 580 600",
});
