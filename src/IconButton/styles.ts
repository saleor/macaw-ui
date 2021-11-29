import { makeStyles } from "../theme";
import { getSecondaryButtonStyles } from "./partials";

const useStyles = makeStyles(
  (theme) => ({
    error: {
      "&&": {
        "&:hover, &.Mui-focusVisible": {
          background: theme.palette.saleor.errorAction[5],
          borderColor: theme.palette.saleor.errorAction[1],
        },
        "&:active": {
          background: theme.palette.saleor.errorAction[4],
          borderColor: theme.palette.saleor.errorAction[1],
        },
      },
      borderColor: theme.palette.saleor.errorAction[4],
      color: theme.palette.saleor.errorAction[1],
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
        "&:hover,&:focus-visible": {
          background: theme.palette.saleor.active[5],
        },
        "&:active": {
          background: theme.palette.saleor.active[4],
        },
      },
    },
  }),
  {
    name: "IconButton",
  }
);

export default useStyles;
