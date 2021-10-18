import type { ThemeOptions } from "@material-ui/core/styles";
import { darken, fade } from "@material-ui/core/styles";

import { SaleorThemeColors } from "../types";

export const buttonOverrides = (
  colors: SaleorThemeColors
): ThemeOptions["overrides"] => ({
  MuiButton: {
    contained: {
      "&$disabled": {
        backgroundColor: fade(colors.primary, 0.12),
        color: "#FFFFFF",
      },
      "&:active": {
        boxShadow: "none",
      },
      "&:hover": {
        boxShadow: "none",
      },
      boxShadow: "none",
    },
    containedPrimary: {
      "&:active": {
        backgroundColor: darken(colors.primary, 0.4),
      },
      "&:hover": {
        backgroundColor: darken(colors.primary, 0.1),
      },
    },
    label: {
      fontWeight: 600,
    },
    root: {
      "& svg": {
        marginLeft: 8,
      },
      borderRadius: 4,
    },
    textPrimary: {
      "&:not($disabled) span": {
        color: colors.primary,
      },
    },
    textSizeSmall: {
      fontSize: "1.3rem",
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
            backgroundColor: colors.gray.disabled,
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
});
