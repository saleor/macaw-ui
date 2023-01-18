import { style } from "@vanilla-extract/css";

export const trigger = style({});

export const icon = style({
  transition: "transform 300ms",
  selectors: {
    [`${trigger}[data-state="open"] &`]: {
      transform: "rotate(180deg)",
    },
  },
});
