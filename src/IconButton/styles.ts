import { makeStyles } from "../theme";
import { getSecondaryButtonStyles } from "./partials";

const useStyles = makeStyles(
  (theme) => ({
    error: {
      "&&": {
        "&:hover, &.Mui-focusVisible": {
          borderColor: theme.palette.saleor.errorAction[1],
          color: theme.palette.saleor.errorAction[1],
        },
        "&:active": {
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
        "&:hover,&:focus-visible": {
          borderColor: theme.palette.saleor.active[4],
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
