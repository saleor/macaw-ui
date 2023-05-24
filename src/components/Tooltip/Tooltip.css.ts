import { style } from "@vanilla-extract/css";
import { sprinkles } from "~/theme";

export const content = sprinkles({
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: "neutralPlain",
  backgroundColor: "surfaceNeutralPlain",
  padding: "s2",
  borderRadius: 3,
  typeSize: "bodyEmpSmall",
  color: "textNeutralPlain",
  boxShadow: "overlay",
});

export const arrow = style({
  transform: "translateY(-1px)",
});
