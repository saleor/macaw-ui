import { makeStyles } from "../theme";

const useStyles = makeStyles(
  (theme) => ({
    activeMenuLabel: {
      display: "flex",
    },
    container: {
      overflowX: "hidden",
      width: "100%",
    },
    containerSubMenu: {
      "&$container": {
        overflow: "hidden",
      },
    },
    content: {
      width: "50%",
    },
    icon: {
      marginRight: theme.spacing(2),
    },
    innerContainer: {
      display: "flex",
      position: "relative",
      right: 0,
      transition: theme.transitions.duration.short + "ms",
      width: "200%",
    },
    label: {
      fontWeight: "bold",
    },
    logo: {
      display: "block",
      marginBottom: theme.spacing(4),
    },
    subMenuHeader: {
      textTransform: "uppercase",
      color: theme.palette.text.hint,
      padding: theme.spacing(1, 0, 2.5, 0),
    },
    menuItemBtn: {
      alignItems: "center",
      background: "none",
      border: "none",
      color: theme.palette.text.secondary,
      display: "flex",
      marginBottom: theme.spacing(3),
      padding: 0,
      textDecoration: "none",
      cursor: "pointer",
    },
    root: {
      background: theme.palette.background.default,
      borderBottomRightRadius: 32,
      borderTopRightRadius: 32,
      padding: theme.spacing(3),
      width: 260,
    },
    secondaryContentActive: {
      right: "100%",
    },
    subMenuTopBar: {
      alignItems: "center",
      display: "flex",
      justifyContent: "space-between",
      marginBottom: theme.spacing(3),
    },
  }),
  {
    name: "SideBarDrawer",
  }
);

export default useStyles;
