import { style } from "@vanilla-extract/css";

const MAX_HEIGHT = 32;

export const textareaWrapperClassName = style({
  display: "grid",
  overflowWrap: "anywhere",
  "::after": {
    content: 'attr(data-replicated-value) " "',
    whiteSpace: "pre-wrap",
    visibility: "hidden",
    font: "inherit",
    gridArea: "1 / 1 / 2 / 2",
    maxHeight: `calc(2ex * ${MAX_HEIGHT})`,
  },
});

export const textareaClassname = style({
  resize: "none",
  overflowY: "auto",
  overflowX: "hidden",
  font: "inherit",
  gridArea: "1 / 1 / 2 / 2",
  maxHeight: `calc(2ex * ${MAX_HEIGHT})`,
});
