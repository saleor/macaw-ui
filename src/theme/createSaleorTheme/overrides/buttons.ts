import type { ThemeOptions } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles";

import { SaleorThemeColors } from "../types";

export const buttonOverrides = (
  colors: SaleorThemeColors
): ThemeOptions["overrides"] => {
  const containedPrimaryStates = {
    "&&:hover": {
      backgroundColor: colors.active[3],
    },
    "&&:active": {
      backgroundColor: colors.active[4],
    },
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
        ...containedPrimaryStates,
        "@media(hover: none)": containedPrimaryStates,
      },
      label: {
        fontWeight: 600,
      },
      root: {
        "& svg": {
          marginLeft: 8,
        },
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
        "&:hover": {
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
        },
        background: colors.background.paper,
        // 2px smaller because of border
        border: `2px solid ${colors.active[4]}`,
        padding: "10px 12px",
      },
      outlinedPrimary: {
        "&:hover": {
          // Unsets border as it will require us to override borderWidth and
          // borderStyle over and over
          border: undefined,
          borderColor: colors.active[1],
          backgroundColor: colors.active[5],
        },
        "&:active": {
          backgroundColor: colors.active[4],
        },
        border: undefined,
      },
    },
    MuiIconButton: {
      root: {
        "&:hover": {
          backgroundColor: fade(colors.primary, 0.12),
        },
      },
    },
    MuiSwitch: {
      colorPrimary: {
        "&$checked": {
          color: colors.background.paper,
        },
      },
      root: {
        "&$disabled": {
          "&$switchBase": {
            "& + $thumb": {
              backgroundColor: colors.disabled,
            },
          },
        },
        height: 48,
        width: 72,
      },
      switchBase: {
        "&$checked": {
          transform: "translateX(23px)",
        },
        boxShadow: "none",
        left: 1,
        marginLeft: 4,
        top: 5,
      },
      thumb: {
        boxShadow: "none",
      },
      track: {
        "$colorPrimary$checked + &": {
          backgroundColor: colors.primary,
        },
        backgroundColor: colors.gray.default,
        borderRadius: 12,
        height: 24,
        opacity: [["1"], "!important"] as any,
        width: 48,
      },
    },
  };
};
