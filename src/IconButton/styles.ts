import { makeStyles } from "../theme";

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
  }),
  {
    name: "IconButton",
  }
);

export default useStyles;
