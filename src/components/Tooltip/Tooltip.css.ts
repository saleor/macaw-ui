import { style } from "@vanilla-extract/css";
import { sprinkles, vars } from "~/theme";

export const content = sprinkles({
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: "neutralPlain",
  backgroundColor: "surfaceNeutralPlain",
  padding: 5,
  borderRadius: 3,
  typeSize: "bodyEmpSmall",
  color: "textNeutralPlain",
  boxShadow: "overlay",
});

export const arrow = style({
  selectors: {
    [`${content}[data-side="bottom"] &`]: {
      transform: "translateY(-1px)",
    },
    [`${content}[data-side="left"] &`]: {
      transform: "translateY(-1px)",
    },
    [`${content}[data-side="right"] &`]: {
      transform: "translateY(-1px)",
    },
    [`${content}[data-side="top"] &`]: {
      transform: "translateY(-1px)",
    },
  },
});

export const contentTitle = sprinkles({
  typeSize: "captionSmall",
  color: "textNeutralSubdued",
  display: "block",
  marginBottom: 2,
});

export const arrowPath = style({
  fill: vars.colors.background.surfaceNeutralPlain,
  stroke: vars.colors.border.neutralPlain,
});
