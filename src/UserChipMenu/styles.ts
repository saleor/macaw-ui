import { makeStyles } from "../theme";

const useStyles = makeStyles(
  (theme) => ({
    arrow: {
      [theme.breakpoints.down("sm")]: {
        marginLeft: 0,
      },
      marginLeft: theme.spacing(2),
      transition: theme.transitions.duration.standard + "ms",
    },
    avatar: {
      "&&": {
        [theme.breakpoints.down("sm")]: {
          height: 40,
          width: 40,
        },
        height: 32,
        width: 32,
      },
    },
    avatarInitials: {
      color: theme.palette.primary.contrastText,
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
    },
    labelContainer: {
      display: "inline-flex",
      alignItems: "center",
    },
    popover: {
      marginTop: theme.spacing(2),
      zIndex: 10,
    },
    rotate: {
      transform: "rotate(180deg)",
    },
    userChip: {
      [theme.breakpoints.down("sm")]: {
        height: 48,
      },
      backgroundColor: theme.palette.background.paper,
      borderRadius: 24,
      color: theme.palette.text.primary,
      height: 40,
      padding: theme.spacing(0.5),
    },
    userMenuContainer: {
      position: "relative",
    },
  }),
  {
    name: "UserChipMenu",
  }
);

export default useStyles;
