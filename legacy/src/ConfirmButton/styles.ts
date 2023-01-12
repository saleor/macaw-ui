import { makeStyles } from "../theme";

const useStyles = makeStyles(
  (theme) => ({
    error: {
      "&:hover": {
        backgroundColor: theme.palette.error.main,
      },
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText,
    },
    icon: {
      marginLeft: "0 !important",
      position: "absolute",
      transitionDuration: theme.transitions.duration.standard + "ms",
    },
    invisible: {
      opacity: 0,
    },
    label: {
      alignItems: "center",
      display: "flex",
      transitionDuration: theme.transitions.duration.standard + "ms",
    },
    progress: {
      "& svg": {
        margin: 0,
      },
      position: "absolute",
      transitionDuration: theme.transitions.duration.standard + "ms",
    },
    success: {
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
      },
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  }),
  { name: "ConfirmButton" }
);

export default useStyles;
