import { ThemeOptions } from "@material-ui/core/styles";

import { SaleorThemeColors } from "../types";

export const tableOverrides = (
  colors: SaleorThemeColors,
  fontFamily: string
): ThemeOptions["overrides"] => ({
  MuiTable: {
    root: {
      fontFamily,
      fontFeatureSettings: '"tnum"',
    },
  },
  MuiTableCell: {
    body: {
      fontSize: "1.6rem",
    },
    head: {
      fontSize: "1.4rem",
      fontWeight: 400,
      color: colors.main[3],
    },
    paddingCheckbox: {
      "&:first-child": {
        padding: "0 18px",
        width: 72,
      },
      "&:not(first-child)": {
        padding: 0,
        width: 52,
      },
      "&:last-child": {
        paddingRight: 20,
      },
    },
    root: {
      "&:first-child": {
        "&:not($paddingCheckbox)": {
          paddingLeft: 32,
          paddingRight: 32,
          textAlign: "left",
        },
      },
      borderBottomColor: colors.border.paper,
      padding: "24px 32px",
    },
  },
  MuiTablePagination: {
    input: {
      color: colors.active[1],
      fontSize: "1.4rem",
    },
  },
  MuiTableRow: {
    footer: {
      "$root$hover&:hover": {
        background: "none",
      },
    },
    head: {
      "$root$hover&:hover": {
        background: "none",
      },
      color: colors.main[3],
    },
    hover: {
      "$root&:hover": {
        background: colors.active[5],
      },
      transition: "200ms",
    },
    root: {
      position: "relative",
    },
  },
});
