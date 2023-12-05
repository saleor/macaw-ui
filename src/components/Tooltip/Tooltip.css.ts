import { style } from "@vanilla-extract/css";
import { sprinkles } from "~/theme";

export const content = sprinkles({
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: "default1",
  backgroundColor: "default1",
  padding: 2,
  borderRadius: 3,
  typeSize: "bodyEmpSmall",
  color: "default1",
  boxShadow: "overlay",
});

export const arrow = style({
  transform: "translateY(-1px)",
});
