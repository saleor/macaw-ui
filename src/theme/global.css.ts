import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./contract.css";

globalStyle("body", {
  backgroundColor: vars.colors.background.plain,
});

globalStyle(".visually-hidden", {
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: "1px",
  overflow: "hidden",
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px",
});
