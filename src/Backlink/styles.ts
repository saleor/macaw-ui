import { makeStyles } from "../theme";

const useStyles = makeStyles(
  (theme) => ({
    backArrow: {
      fontSize: 30,
    },
    menuButton: {
      flex: "0 0 auto",
      marginLeft: theme.spacing(-2),
      marginRight: theme.spacing(),
      marginTop: theme.spacing(-2),
    },
    root: {
      "&:hover": {
        color: theme.typography.body1.color,
      },
      alignItems: "center",
      color: theme.palette.grey[500],
      cursor: "pointer",
      display: "flex",
      marginTop: theme.spacing(0.5),
      transition: theme.transitions.duration.standard + "ms",
      [theme.breakpoints.down("sm")]: {
        margin: theme.spacing(4, 0, 0, 0),
      },
    },
    skeleton: {
      width: "10rem",
    },
    title: {
      color: "inherit",
      flex: 1,
      marginLeft: theme.spacing(),
      textTransform: "uppercase",
    },
  }),
  { name: "AppHeader" }
);

export default useStyles;
