import { makeStyles } from "../theme";

const avatarSize = 32;

const useStyles = makeStyles(
  (theme) => ({
    avatar: {
      "&&": {
        height: avatarSize,
        width: avatarSize,
      },
      backgroundColor: theme.palette.background.paper,
    },
    avatarInitials: {
      height: avatarSize,
      lineHeight: avatarSize + "px",
      width: avatarSize,
      color: theme.palette.primary.contrastText,
      textAlign: "center",
    },
    avatarPlaceholder: {
      alignItems: "center",
      background: theme.palette.primary.main,
      borderRadius: "100%",
      display: "flex",
      justifyContent: "center",
    },
    label: {
      lineHeight: 1.2,
      textAlign: "left",
    },
    labelContainer: {
      [theme.breakpoints.down("sm")]: {
        marginLeft: 0,
      },
      display: "inline-flex",
      alignItems: "center",
      marginLeft: theme.spacing(1),
    },
    popover: {
      marginTop: theme.spacing(0.5),
      zIndex: 10,
    },
    userChip: {
      "&&": {
        [theme.breakpoints.down("sm")]: {
          padding: theme.spacing(0.5),
        },
        padding: theme.spacing(0.5, 3, 0.5, 1),
      },
      ...theme.typography.body1,
      display: "flex",
      textTransform: "unset",
    },
    userMenuContainer: {
      cursor: "pointer",
      display: "inline-block",
      position: "relative",
    },
  }),
  {
    name: "UserChipMenu",
  }
);

export default useStyles;
