import warningIcon from "../assets/alert_icon.svg";
import errorIcon from "../assets/error_icon.svg";
import infoIcon from "../assets/info_icon.svg";
import successIcon from "../assets/success_icon.svg";
import { makeStyles } from "../theme";

const useStyles = makeStyles(
  (theme) => ({
    actionBtn: {
      minWidth: "unset",
    },
    actionContainer: {
      left: -4,
      position: "relative",
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
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(6),
      position: "relative",
    },
    snackbarContainer: {
      marginBottom: theme.spacing(2),
      maxWidth: 450,
      position: "relative",
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
      "&:before": {
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        content: "''",
        display: "block",
        height: 32,
        left: theme.spacing(-6),
        position: "absolute",
        top: 13,
        width: 32,
      },
      paddingTop: theme.spacing(2),
      position: "relative",
    },
    messageContainerInfo: {
      "&:before": {
        backgroundImage: `url(${infoIcon})`,
      },
    },
    messageContainerSuccess: {
      "&:before": {
        backgroundImage: `url(${successIcon})`,
      },
    },
    messageContainerError: {
      "&:before": {
        backgroundImage: `url(${errorIcon})`,
      },
    },
    messageContainerWarn: {
      "&:before": {
        backgroundImage: `url(${warningIcon})`,
      },
    },
  }),
  { name: "Notification" }
);

export default useStyles;
