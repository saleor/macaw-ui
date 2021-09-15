import { makeStyles } from "../theme";

const iconWidth = 40;

const useStyles = makeStyles(
  (theme) => ({
    actionBtn: {
      left: -4,
      position: "relative",
      minWidth: "unset",
    },
    closeBtn: {
      "& svg": {
        maxHeight: 20,
        maxWidth: 20,
      },
      padding: 10,
      position: "absolute",
      right: 5,
      top: 7,
    },
    closeBtnInfo: {
      color: theme.palette.text.primary,
    },
    error: {
      backgroundColor: theme.palette.alert.paper.error,
    },
    hiddenText: {
      maxHeight: 0,
    },
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
    success: {
      backgroundColor: theme.palette.alert.paper.success,
    },
    text: {
      fontWeight: 400,
      paddingTop: 5,
    },
    warning: {
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
