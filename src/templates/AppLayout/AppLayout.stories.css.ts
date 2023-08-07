import { style } from "@vanilla-extract/css";
import { sprinkles } from "~/theme";

export const dropdownColumnTd = style(
  [
    sprinkles({
      paddingLeft: 10,
    }),
    {
      width: "50%",
    },
  ],
  "summaryColumnTd"
);
export const statusColumnTd = style(
  [
    sprinkles({
      textAlign: "right",
      paddingLeft: 10,
    }),
  ],
  "actionsColumnTd"
);
export const td = style(
  [
    {
      verticalAlign: "middle",
    },
  ],
  "td"
);
