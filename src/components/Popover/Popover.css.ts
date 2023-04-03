import { style } from "@vanilla-extract/css";
import { sprinkles } from "~/theme";

export const popover = sprinkles({
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: "neutralPlain",
  borderRadius: 3,
});

export const arrow = style({
  transform: "translateY(-1px)",
});
