import { makeStyles } from "../theme";

const useStyles = makeStyles(
  (theme) => ({
    primary: {
      "&&": {
        "&:hover, &.Mui-focusVisible": {
          color: theme.palette.saleor.errorAction[1],
        },
        "&:active": {
          background: theme.palette.saleor.errorAction[5],
        },
      },
      background: theme.palette.saleor.errorAction[1],
      borderColor: theme.palette.saleor.errorAction[1],
    },
    primaryDisabled: {
      "&&&": {
        background: theme.palette.saleor.errorAction[5],
        borderColor: theme.palette.saleor.errorAction[5],
      },
    },

    secondary: {
      "&&": {
        "&:hover, &.Mui-focusVisible": {
          borderColor: theme.palette.saleor.errorAction[1],
          color: theme.palette.saleor.errorAction[1],
        },
        "&:active": {
          background: theme.palette.saleor.errorAction[5],
          borderColor: theme.palette.saleor.errorAction[1],
        },
      },
      borderColor: theme.palette.saleor.errorAction[4],
      color: theme.palette.saleor.errorAction[2],
    },
    secondaryDisabled: {
      "&&&": {
        borderColor: theme.palette.saleor.errorAction[5],
        color: theme.palette.saleor.errorAction[5],
      },
    },

    tertiary: {
      "&&": {
        "&:hover, &.Mui-focusVisible": {
          borderColor: theme.palette.saleor.errorAction[1],
          color: theme.palette.saleor.errorAction[1],
        },
        "&:active": {
          background: theme.palette.saleor.errorAction[5],
          borderColor: theme.palette.saleor.errorAction[1],
        },
      },
      borderColor: theme.palette.saleor.errorAction[4],
      color: theme.palette.saleor.errorAction[2],
    },
    tertiaryDisabled: {
      "&&&": {
        borderColor: theme.palette.saleor.errorAction[5],
        color: theme.palette.saleor.errorAction[5],
      },
    },
  }),
  {
    name: "Button",
  }
);

export default useStyles;
