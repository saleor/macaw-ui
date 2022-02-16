import { makeStyles } from "../theme";

const iconWidth = 40;

const useStyles = makeStyles(
  (theme) => ({
    actionBtn: {
      position: "absolute",
      minWidth: "unset",
      right: "24px",
      bottom: "20px",
    },
    rotate: {
      transform: "rotate(180deg)",
    },
    apiMessage: {
      margin: "6px 0 4px 0",
    },
    apiMessageAction: {
      display: "flex",
      alignItems: "center",
      marginTop: "-10px",
    },
    closeBtn: {
      "&:hover": {
        color: theme.palette.text.primary,
      },
      "& svg": {
        maxHeight: 20,
        maxWidth: 20,
      },
      color: theme.palette.text.secondary,
      padding: 10,
      position: "absolute",
      right: 5,
      top: 7,
    },
    error: {
      "& $icon": {
        color: theme.palette.alert.icon.error,
      },
      backgroundColor: theme.palette.alert.paper.error,
    },
    hiddenText: {
      maxHeight: 0,
    },
    icon: {},
    info: {},
    snackbar: {
      borderRadius: 4,
      padding: theme.spacing(0, 6, 1, 2),
      position: "relative",
    },
    snackbarContainer: {
      marginBottom: theme.spacing(2),
      maxWidth: 450,
      position: "relative",
    },
    snackbarAction: {
      paddingLeft: `calc(${iconWidth}px + ${theme.spacing(2)})`,
    },
    snackbarContentWithAction: {
      paddingBottom: "5rem",
    },
    success: {
      "& $icon": {
        color: theme.palette.alert.icon.success,
      },
      backgroundColor: theme.palette.alert.paper.success,
    },
    text: {
      fontWeight: 400,
      paddingTop: 5,
    },
    warning: {
      "& $icon": {
        color: theme.palette.alert.icon.warning,
      },
      backgroundColor: theme.palette.alert.paper.warning,
    },

    messageContainer: {
      paddingTop: theme.spacing(2),
      position: "relative",
    },

    container: {
      columnGap: theme.spacing(2),
      display: "grid",
      gridTemplateColumns: `${iconWidth}px 1fr`,
    },
    title: {
      marginTop: 6,
      marginBottom: theme.spacing(0.5),
    },
  }),
  { name: "Notification" }
);

export default useStyles;
