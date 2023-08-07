import { style } from "@vanilla-extract/css";
import { sprinkles } from "~/theme";

export const table = style(
  [
    sprinkles({ width: "100%" }),
    {
      borderCollapse: "collapse",
    },
  ],
  "table"
);
export const thead = style([sprinkles({})], "thead");
export const tbody = style([sprinkles({})], "tbody");

export const tr = style([sprinkles({})], "tr");

export const th = style(
  [
    sprinkles({
      color: "textNeutralSubdued",
      fontSize: "captionMedium",
      fontWeight: "captionMedium",
      paddingTop: 0.5,
      paddingBottom: 3,
      paddingLeft: 8,
    }),
    {
      textAlign: "left",
      selectors: {
        "&:first-child": {
          paddingLeft: 0,
        },
      },
    },
  ],
  "th"
);

export const td = style(
  [
    sprinkles({
      paddingTop: 2,
      paddingBottom: 3,
      borderTopWidth: 1,
      borderTopStyle: "solid",
      borderColor: "neutralPlain",
      paddingLeft: 8,
    }),
    {
      verticalAlign: "top",
      selectors: {
        "&:first-child": {
          paddingLeft: 0,
        },
      },
    },
  ],
  "td"
);
