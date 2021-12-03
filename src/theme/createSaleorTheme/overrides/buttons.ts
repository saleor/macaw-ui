import type { Overrides } from "@material-ui/core/styles/overrides";

import { SaleorThemeColors } from "../types";

export const buttonOverrides = (colors: SaleorThemeColors): Overrides => {
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
        fontWeight: 500,
      },
      root: {
        borderRadius: 4,
        fontSize: "1.6rem",
        letterSpacing: "0.06rem",
        lineHeight: 1.55,
        padding: "8px 16px",
        textTransform: "none",
      },
      text: {
        "&&$disabled": {
          color: colors.disabled,
        },
        "&:hover, &$focusVisible": {
          background: colors.main[5],
        },
        "&:active": {
          background: colors.main[4],
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
          backgroundColor: colors.main[5],
        },
        "&:active": {
          backgroundColor: colors.main[4],
        },
        background: colors.background.paper,
        borderColor: colors.main[4],
        borderWidth: 2,
        borderStyle: "solid",
        // 2px smaller because of border
        padding: "6px 12px",
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
        borderColor: colors.active[4],
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
        padding: 6,
        transition: "200ms",
      },
    },
  };
};
