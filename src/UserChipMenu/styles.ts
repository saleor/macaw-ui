import { makeStyles } from "../theme";

const avatarSize = 32;
const mobileAvatarSize = 42;

const useStyles = makeStyles(
  (theme) => ({
    avatar: {
      "&&": {
        [theme.breakpoints.down("sm")]: {
          height: mobileAvatarSize,
          width: mobileAvatarSize,
        },
        height: avatarSize,
        width: avatarSize,
      },
      backgroundColor: theme.palette.background.paper,
    },
    avatarInitials: {
      [theme.breakpoints.down("sm")]: {
        height: mobileAvatarSize,
        width: mobileAvatarSize,
        lineHeight: mobileAvatarSize + "px",
      },
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
      letterSpacing: "0.02em",
      lineHeight: 1.2,
      textAlign: "left",
    },
    labelContainer: {
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
