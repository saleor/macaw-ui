import type { Overrides } from "@material-ui/core/styles/overrides";

import { SaleorThemeColors } from "../types";

export const tableOverrides = (
  colors: SaleorThemeColors,
  fontFamily: string
): Overrides => ({
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
      color: colors.font.gray,
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
    },
    root: {
      "&:first-child": {
        "&:not($paddingCheckbox)": {
          paddingLeft: 32,
          paddingRight: 32,
          textAlign: "left",
        },
      },
      borderBottomColor: "transparent",
      padding: "16px 24px",
    },
  },
  MuiTablePagination: {
    input: {
      color: colors.primary,
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
    },
    hover: {
      "$root&:hover": {
        "& td": {
          borderColor: "transparent",
        },
        backgroundColor: colors.active[5],
      },
      transition: "200ms",
    },
    root: {
      "&::after": {
        content: "''",
        height: 1,
        width: "calc(100% - 64px)",
        left: 32,
        top: "100%",
        position: "absolute",
        background: colors.background.default,
      },
      position: "relative",
    },
  },
});
