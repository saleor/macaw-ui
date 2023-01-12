import type { ThemeOptions } from "@material-ui/core/styles";

import { SaleorThemeColors, ThemeType } from "../types";

export const buttonOverrides = (
  colors: SaleorThemeColors,
  mode: ThemeType
): ThemeOptions["overrides"] => {
  const isDarkMode = mode === "dark";

  const containedPrimaryHover = {
    backgroundColor: colors.background.paper,
    color: colors.main[1],
    borderColor: colors.main[1],

    ...(isDarkMode && {
      backgroundColor: "transparent",
      color: colors.main[1],
      borderColor: colors.main[1],
    }),
  };

  return {
    MuiButton: {
      contained: {
        "&$disabled": {
          "&$containedPrimary": {
            color: colors.background.paper,
            backgroundColor: colors.main[5],

            ...(isDarkMode && {
              color: colors.main[2],
              backgroundColor: colors.main[5],
            }),
          },
          "&$containedSecondary": {
            background: colors.background.paper,
            color: colors.disabled,

            ...(isDarkMode && {
              color: colors.main[3],
            }),
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
        "&&:hover": {
          ...containedPrimaryHover,
        },
        "&&:active": {
          backgroundColor: colors.main[5],
        },

        ...(isDarkMode && {
          color: colors.main[6],
          backgroundColor: colors.main[1],
          borderColor: colors.main[1],
        }),

        borderColor: colors.main[1],
      },
      containedSecondary: {
        ...(isDarkMode && {
          color: colors.main[1],
        }),
      },
      outlinedSecondary: {
        ...(isDarkMode && {
          color: colors.main[1],
          borderColor: colors.main[4],
        }),
      },
      label: {
        fontWeight: 500,
      },
      root: {
        "&$disabled": {
          borderColor: colors.main[5],
        },
        "&:hover": {
          backgroundColor: undefined,
        },
        borderRadius: 4,
        fontSize: "1.6rem",
        lineHeight: 1.55,
        padding: "7px 16px",
        textTransform: "none",
        borderWidth: "1px",
        borderStyle: "solid",
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
          borderColor: colors.main[5],
          color: colors.main[5],

          ...(isDarkMode && {
            color: colors.main[3],
            borderColor: colors.main[3],
          }),
        },
        "&$error": {
          color: "red",
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

          ...(isDarkMode && {
            backgroundColor: colors.main[2],
          }),
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

        ...(isDarkMode && {
          color: colors.main[1],
          borderColor: colors.main[4],
        }),
      },
      outlinedPrimary: {
        "&:hover, &$focusVisible": {
          borderColor: colors.main[1],
          color: colors.main[1],

          ...(isDarkMode && {
            borderColor: colors.main[1],
            color: colors.main[1],
          }),
        },
        "&:hover": {
          // Unsets border as it will require us to override borderWidth and
          // borderStyle over and over
          border: undefined,
          backgroundColor: undefined,
        },
        "&:active": {
          backgroundColor: colors.main[5],
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
          backgroundColor: colors.background.paper,
          color: colors.main[1],
        },
        "&:active": {
          backgroundColor: colors.main[6],
        },
        "&$disabled": {
          border: undefined,
          borderColor: "transparent",
          color: colors.main[5],
        },
        background: colors.main[1],
        border: `1px solid ${colors.main[1]}`,
        borderRadius: 4,
        color: colors.background.paper,
        padding: 7,
        transition: "200ms",
      },
    },
  };
};
