import type { ThemeOptions } from "@material-ui/core/styles";

import { SaleorThemeColors } from "../types";

export const buttonOverrides = (
  colors: SaleorThemeColors
): ThemeOptions["overrides"] => {
  const containedPrimaryHover = {
    backgroundColor: colors.background.paper,
    color: colors.active[1],
  };

  return {
    MuiButton: {
      contained: {
        "&$disabled": {
          "&$containedPrimary": {
            color: colors.background.paper,
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
          backgroundColor: colors.active[5],
        },
      },
      label: {
        fontWeight: 500,
      },
      root: {
        "&$disabled": {
          borderColor: colors.disabled,
        },
        "&:hover": {
          backgroundColor: undefined,
        },
        border: `1px solid ${colors.active[1]}`,
        borderRadius: 4,
        fontSize: "1.6rem",
        lineHeight: 1.55,
        padding: "7px 16px",
        textTransform: "none",
      },
      text: {
        "&&$disabled": {
          color: colors.disabled,
        },
        "&:hover, &$focusVisible": {
          borderColor: colors.main[1],
        },
        "&:active": {
          background: colors.main[5],
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
        "&:hover": {
          // Unsets border as it will require us to override borderWidth and
          // borderStyle over and over
          border: undefined,
        },
        "&:hover, &$focusVisible": {
          borderColor: colors.main[1],
        },
        "&:active": {
          backgroundColor: colors.main[5],
        },
        "& svg": {
          marginRight: 8,
        },
        background: colors.background.paper,
        borderColor: colors.main[5],
        borderWidth: 1,
        borderStyle: "solid",
        // 1px smaller because of border
        padding: "7px 12px",
      },
      outlinedPrimary: {
        "&:hover, &$focusVisible": {
          borderColor: colors.active[1],
          color: colors.active[1],
        },
        "&:hover": {
          // Unsets border as it will require us to override borderWidth and
          // borderStyle over and over
          border: undefined,
          backgroundColor: undefined,
        },
        "&:active": {
          backgroundColor: colors.active[5],
        },
        border: undefined,
        color: undefined,
      },
      outlinedSizeSmall: {
        fontSize: "1.6rem",
        padding: "2px 12px",
      },
    },
    MuiIconButton: {
      root: {
        "&:hover, &.Mui-focusVisible": {
          borderColor: colors.active[1],
          color: colors.active[1],
        },
        "&:hover": {
          // Unsets border as it will require us to override borderWidth and
          // borderStyle over and over
          border: undefined,
          backgroundColor: undefined,
        },
        "&:active": {
          backgroundColor: colors.active[5],
        },
        "&$disabled": {
          border: undefined,
          borderColor: "transparent",
          color: colors.disabled,
        },
        background: colors.background.paper,
        border: `1px solid ${colors.main[5]}`,
        borderRadius: 4,
        color: colors.main[1],
        padding: 7,
        transition: "200ms",
      },
    },
  };
};
