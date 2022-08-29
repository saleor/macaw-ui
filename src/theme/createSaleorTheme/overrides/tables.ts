import { ThemeOptions } from "@mui/material/styles";

import { SaleorThemeColors } from "../types";

export const tableOverrides = (
  colors: SaleorThemeColors,
  fontFamily: string
): ThemeOptions["components"] => ({
  MuiTable: {
    styleOverrides: {
      root: {
        fontFamily,
        fontFeatureSettings: '"tnum"',
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
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
        borderBottomColor: colors.background.default,
        padding: "24px 32px",
      },
    },
  },
  MuiTablePagination: {
    styleOverrides: {
      input: {
        color: colors.active[1],
        fontSize: "1.4rem",
      },
    },
  },
  MuiTableRow: {
    styleOverrides: {
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
  },
});
