import { merge } from "lodash";
import { makeStyles } from "..";

export type ListGridTemplate = string | Record<string, string>;

export const useGridTemplateStyles = makeStyles<
  { width: ListGridTemplate },
  "root"
>(
  () => ({
    root: ({ width }) => {
      if (typeof width === "object") {
        const x = Object.entries(width).map(([breakpoint, value]) => ({
          [breakpoint]: {
            gridTemplateColumns: value,
          },
        }));
        return {
          ...merge({}, ...x),
        };
      }

      return {
        gridTemplateColumns: width,
      };
    },
  }),
  { name: "ListGrid" }
);

export const useStyles = makeStyles(
  () => ({
    row: {
      alignItems: "center",
      display: "grid",
    },
    cell: {
      boxSizing: "content-box",
      flex: 1,
    },
    body: {
      margin: 0,
      padding: 0,
    },
  }),
  { name: "BaseList" }
);
