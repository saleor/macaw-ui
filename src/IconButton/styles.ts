import { makeStyles } from "../theme";
import { getGhostButtonStyles, getSecondaryButtonStyles } from "./partials";

const useStyles = makeStyles(
  (theme) => {
    const isDarkMode = theme.palette.type === "dark";

    return {
      primary: {
        "&:hover, &.Mui-focusVisible, &$hover, &$active": {
          color: theme.palette.saleor.main[1],
          borderColor: theme.palette.saleor.main[1],
        },
        "&:active, &$active": {
          background: theme.palette.saleor.main[5],
        },
        "&:disabled": {
          background: theme.palette.saleor.main[5],
          color: theme.palette.saleor.main[4],
        },
      },
      secondary: getSecondaryButtonStyles(theme.palette.saleor, isDarkMode),
      ghost: getGhostButtonStyles(theme.palette.saleor, isDarkMode),
      hoverOutline: {
        "&$secondary": {
          "&:hover, &:focus-visible, &$hover": {
            background: theme.palette.saleor.main[6],
            borderColor: theme.palette.saleor.main[1],

            ...(isDarkMode && {
              background: "transparent",
            }),
          },
          "&:active, &$active": {
            background: theme.palette.saleor.main[4],
          },
        },
      },
      error: {
        "&&&": {
          "&:hover, &.Mui-focusVisible, &$hover": {
            borderColor: theme.palette.saleor.errorAction[1],
            color: theme.palette.saleor.errorAction[1],
          },
          "&:active, &$active": {
            background: theme.palette.saleor.errorAction[5],
            color: theme.palette.saleor.errorAction[1],
            borderColor: theme.palette.saleor.errorAction[2],
          },
          "&$secondary": {
            "&:hover, &.Mui-focusVisible, &$hover": {
              background: theme.palette.background.paper,
              borderColor: theme.palette.saleor.errorAction[1],
              color: theme.palette.saleor.errorAction[1],
            },
            "&:active, &$active": {
              background: theme.palette.saleor.errorAction[5],
              color: theme.palette.saleor.errorAction[1],
            },
            "&:disabled": {
              borderColor: "transparent",
            },
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.saleor.errorAction[2],
            borderColor: theme.palette.saleor.errorAction[5],
          },

          "&$ghost": {
            backgroundColor: theme.palette.background.default,
            color: theme.palette.saleor.errorAction[2],

            "&:hover, &.Mui-focusVisible, &$hover": {
              color: theme.palette.saleor.errorAction[1],
              backgroundColor: theme.palette.saleor.errorAction[4],
            },

            "&:active, &$active": {
              background: theme.palette.saleor.errorAction[3],
              color: theme.palette.saleor.errorAction[1],
            },

            "&:disabled": {
              color: theme.palette.saleor.errorAction[3],
            },
          },

          ...(isDarkMode && {
            color: theme.palette.saleor.main[1],
          }),
        },

        color: theme.palette.background.paper,
        backgroundColor: theme.palette.saleor.errorAction[1],
        borderColor: theme.palette.saleor.errorAction[1],
      },
      disabledError: {
        "&&&": {
          borderColor: "transparent",
          color: theme.palette.saleor.errorAction[5],

          ...(isDarkMode && {
            backgroundColor: theme.palette.saleor.errorAction[4],
            color: theme.palette.saleor.main[3],
          }),
        },
      },
      active: {},
      hover: {},
    };
  },
  {
    name: "IconButton",
  }
);

export default useStyles;
