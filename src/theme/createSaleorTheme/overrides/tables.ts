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
      "&:last-child": {
        paddingRight: undefined,
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
      color: colors.main[3],
    },
    hover: {
      "$root&:hover": {
        background: colors.active[5],
      },
      transition: "200ms",
    },
  },
});
