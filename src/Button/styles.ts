import { makeStyles } from "../theme";

const useStyles = makeStyles(
  (theme) => ({
    primary: {
      "&&": {
        "&:hover": {
          background: theme.palette.saleor.errorAction[2],
        },
        "&:active": {
          background: theme.palette.saleor.errorAction[3],
        },
      },
      background: theme.palette.saleor.errorAction[1],
    },
    primaryDisabled: {
      "&&&": {
        background: theme.palette.saleor.errorAction[5],
      },
    },

    secondary: {
      "&&": {
        "&:hover": {
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
    secondaryDisabled: {
      "&&&": {
        borderColor: theme.palette.saleor.errorAction[5],
        color: theme.palette.saleor.errorAction[5],
      },
    },

    tertiary: {
      "&&": {
        "&:hover": {
          background: theme.palette.saleor.errorAction[5],
        },
        "&:active": {
          background: theme.palette.saleor.errorAction[4],
        },
      },
      color: theme.palette.saleor.errorAction[1],
    },
    tertiaryDisabled: {
      "&&&": {
        color: theme.palette.saleor.errorAction[5],
      },
    },
  }),
  {
    name: "Button",
  }
);

export default useStyles;
