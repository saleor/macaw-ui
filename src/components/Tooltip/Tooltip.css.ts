import { style } from "@vanilla-extract/css";
import { sprinkles } from "~/theme";

export const content = sprinkles({
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: "default1",
  backgroundColor: "default1",
  padding: 2,
  borderRadius: 3,
  fontSize: 1,
  lineHeight: 1,
  letterSpacing: 1,
  color: "default1",
  boxShadow: "defaultOverlay",
});

export const arrow = style({
  transform: "translateY(-1px)",
});
