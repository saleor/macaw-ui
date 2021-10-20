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
    secondary: {
      "&:hover, &.Mui-focusVisible": {
        color: theme.palette.primary.main,
      },
      "&:disabled": {
        color: theme.palette.saleor.disabled,
      },
      background: "transparent",
      borderRadius: 4,
      color: theme.palette.saleor.main[3],
      padding: theme.spacing(0.5),
      transition: theme.transitions.create(["color", "background"], {
        duration: theme.transitions.duration.shorter,
      }),
    },
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
