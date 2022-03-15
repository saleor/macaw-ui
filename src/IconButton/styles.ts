import { makeStyles } from "../theme";
import { getSecondaryButtonStyles } from "./partials";

const useStyles = makeStyles(
  (theme) => ({
    error: {
      "&&": {
        "&:hover, &.Mui-focusVisible, &$hover": {
          borderColor: theme.palette.saleor.errorAction[1],
          color: theme.palette.saleor.errorAction[1],
        },
        "&:active, &$active": {
          background: theme.palette.saleor.errorAction[5],
        },
      },
      borderColor: theme.palette.saleor.errorAction[4],
      color: theme.palette.saleor.errorAction[2],
    },
    disabledError: {
      "&&&": {
        borderColor: "transparent",
        color: theme.palette.saleor.errorAction[5],
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
    active: {},
    hover: {},
  }),
  {
    name: "IconButton",
  }
);

export default useStyles;
