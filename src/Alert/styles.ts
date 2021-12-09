import { makeStyles } from "../theme";

const useStyles = makeStyles(
  (theme) => ({
    close: {
      "&:hover": {
        color: theme.palette.text.primary,
      },
      color: theme.palette.text.secondary,
      position: "absolute",
      right: theme.spacing(-2),
      top: theme.spacing(-1),
    },
    closeNoContent: {
      "&$close": {
        top: 2,
      },
    },
    container: {
      columnGap: theme.spacing(2),
      display: "grid",
      gridTemplateColumns: "40px 1fr",
    },
    content: {
      padding: theme.spacing(0, 1),
    },
    icon: {
      "& $error": {
        color: theme.palette.alert.icon.error,
      },
      "& $warning": {
        color: theme.palette.alert.icon.warning,
      },
      "& $success": {
        color: theme.palette.alert.icon.success,
      },
    },
    root: {},
    titleBar: {
      marginTop: 6,
      marginBottom: theme.spacing(1),
      position: "relative",
    },
    error: {
      background: theme.palette.alert.paper.error,
    },
    warning: {
      background: theme.palette.alert.paper.warning,
    },
    success: {
      background: theme.palette.alert.paper.success,
    },
  }),
  {
    name: "Alert",
  }
);

export default useStyles;
