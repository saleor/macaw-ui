import { makeStyles } from "../theme";
import { getSecondaryButtonStyles } from "./partials";

const useStyles = makeStyles(
  (theme) => ({
    primary: {
      "&:hover, &.Mui-focusVisible, &$hover, &$active": {
        color: theme.palette.saleor.active[1],
        borderColor: theme.palette.saleor.active[1],
      },
      "&:active, &$active": {
        background: theme.palette.saleor.active[5],
      },
    },
    secondary: getSecondaryButtonStyles(theme.palette.saleor),
    hoverOutline: {
      "&$secondary": {
        "&:hover, &:focus-visible, &$hover": {
          background: theme.palette.saleor.active[5],
          borderColor: theme.palette.saleor.active[4],
        },
        "&:active, &$active": {
          background: theme.palette.saleor.active[4],
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
            background: theme.palette.saleor.errorAction[5],
          },
          "&:active, &$active": {
            background: theme.palette.saleor.errorAction[4],
            color: theme.palette.saleor.errorAction[1],
          },
        },
      },

      color: theme.palette.saleor.errorAction[2],
    },
    disabledError: {
      "&&&": {
        borderColor: "transparent",
        color: theme.palette.saleor.errorAction[5],
      },
    },
    active: {},
    hover: {},
  }),
  {
    name: "IconButton",
  }
);

export default useStyles;
