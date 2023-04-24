import { style } from "@vanilla-extract/css";
import { sprinkles } from "~/theme";

export const popover = sprinkles({
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: "neutralPlain",
  borderRadius: 3,
  boxShadow: "interactiveDefaultHovering",
  padding: 5,
  backgroundColor: "subdued",
});

export const arrow = style({
  transform: "translateY(-1px)",
});
