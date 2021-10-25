import type { ThemeOptions } from "@material-ui/core/styles";

import { SaleorThemeColors } from "../types";

export const controlOverrides = (
  colors: SaleorThemeColors
): ThemeOptions["overrides"] => ({
  MuiCheckbox: {
    colorPrimary: {
      "&&.Mui-checked:hover": {
        backgroundColor: "transparent",
      },
    },
    root: {
      "&:hover, &.Mui-focusVisible": {
        background: colors.active[5],
        color: colors.active[1],
      },
      "& > span": {
        position: "relative",
      },
      "& svg": {
        width: 20,
        height: 20,
      },
      border: "transparent",
      borderRadius: 3,
      padding: 6,
    },
  },
  MuiRadio: {
    colorPrimary: {
      "&&.Mui-checked:hover": {
        backgroundColor: "transparent",
      },
    },
    root: {
      "&:hover, &.Mui-focusVisible": {
        background: colors.active[5],
        color: colors.active[1],
      },
      "& > span": {
        position: "relative",
      },
      "& svg": {
        width: 20,
        height: 20,
      },
      border: "transparent",
      borderRadius: "100%",
      padding: 4,
    },
  },
});
