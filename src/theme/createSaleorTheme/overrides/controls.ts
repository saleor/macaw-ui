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
        "& > span": {
          boxShadow: `0px 0px 0px 6px ${colors.active[5]}`,
        },
        background: "transparent",
        color: colors.active[1],
      },
      "& > span": {
        borderRadius: 2,
        boxShadow: `0 0 0 6px transparent`,
        transition: "200ms",
      },
      "& svg": {
        width: 20,
        height: 20,
      },
      border: "transparent",
      padding: 6,
    },
  },
});
