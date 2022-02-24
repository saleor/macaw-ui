import { makeStyles } from "../theme";

const useStyles = makeStyles(
  (theme) => ({
    dark: {},
    success: {
      color: theme.palette.saleor.success.mid,
      "&$dark": {
        color: theme.palette.saleor.success.dark,
      },
    },
    error: {
      color: theme.palette.saleor.fail.mid,
      "&$dark": {
        color: theme.palette.saleor.fail.dark,
      },
    },
    warning: {
      color: theme.palette.saleor.warning.mid,
      "&$dark": {
        color: theme.palette.saleor.warning.dark,
      },
    },
    info: {
      color: theme.palette.saleor.main[1],
    },
  }),
  { name: "CircleIndicator" }
);

export default useStyles;
