import type { ThemeOptions } from "@material-ui/core/styles";

import { SaleorThemeColors } from "../types";

export const buttonOverrides = (
  colors: SaleorThemeColors
): ThemeOptions["overrides"] => {
  const containedPrimaryHover = {
    backgroundColor: colors.active[3],
  };

  return {
    MuiButton: {
      contained: {
        "&$disabled": {
          "&$containedPrimary": {
            color: colors.secondary,
            backgroundColor: colors.disabled,
          },
          "&$containedSecondary": {
            background: colors.background.paper,
            color: colors.disabled,
          },
        },
        "&$focusVisible": {
          ...containedPrimaryHover,
          boxShadow: undefined,
        },
        "&:active": {
          boxShadow: "none",
        },
        "&:hover": {
          "@media(hover: none)": {
            boxShadow: "none",
          },
          boxShadow: "none",
        },
        boxShadow: "none",
      },
      containedPrimary: {
        "&&:hover": containedPrimaryHover,
        "&&:active": {
          backgroundColor: colors.active[4],
        },
      },
      label: {
        fontWeight: 600,
      },
      root: {
        borderRadius: 4,
        fontSize: "1.6rem",
        letterSpacing: "0.06rem",
        lineHeight: 1.55,
        padding: "12px 16px",
      },
      text: {
        "&&$disabled": {
          color: colors.disabled,
        },
      },
      textPrimary: {
        "&:hover, &$focusVisible": {
          background: colors.active[5],
        },
        "&:active": {
          background: colors.active[4],
        },
      },
      textSizeSmall: {
        fontSize: "1.3rem",
      },
      outlined: {
        "&$disabled": {
          border: undefined,
          borderColor: colors.disabled,
          color: colors.disabled,
        },
        background: colors.background.paper,
        border: `2px solid ${colors.active[4]}`,
        // 2px smaller because of border
        padding: "10px 12px",
      },
      outlinedPrimary: {
        "&:hover, &$focusVisible": {
          borderColor: colors.active[1],
          backgroundColor: colors.active[5],
        },
        "&:hover": {
          // Unsets border as it will require us to override borderWidth and
          // borderStyle over and over
          border: undefined,
        },
        "&:active": {
          backgroundColor: colors.active[4],
        },
        border: undefined,
      },
    },
    MuiIconButton: {
      root: {
        "&:hover, &.Mui-focusVisible": {
          borderColor: colors.active[1],
          backgroundColor: colors.active[5],
        },
        "&:hover": {
          // Unsets border as it will require us to override borderWidth and
          // borderStyle over and over
          border: undefined,
        },
        "&:active": {
          backgroundColor: colors.active[4],
        },
        "&$disabled": {
          border: undefined,
          borderColor: "transparent",
          color: colors.disabled,
        },
        background: colors.background.paper,
        border: `2px solid ${colors.active[4]}`,
        borderRadius: 4,
        color: colors.active[1],
        padding: 10,
        transition: "200ms",
      },
    },
  };
};
