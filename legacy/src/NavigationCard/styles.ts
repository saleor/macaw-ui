import { makeStyles } from "..";

const useStyles = makeStyles(
  (theme) => ({
    boxLinkTitle: {
      fontWeight: 500,
      transition: "color .2s ease",
    },
    boxLinkText: {
      marginTop: theme.spacing(1),
    },
    icon: {
      "& svg": {
        height: 32,
        width: 32,
      },
      transition: theme.transitions.create("color", {
        duration: theme.transitions.duration.shorter,
      }),
    },
    card: {
      "&:hover": {
        boxShadow: theme.shadows[16],
        color: theme.palette.primary.main,
      },
      boxShadow: theme.shadows[0],
      textDecoration: "none",
      transition: theme.transitions.create(["color", "box-shadow"], {
        duration: theme.transitions.duration.shorter,
      }),
    },
    cardContent: {
      "&&": {
        padding: theme.spacing(4),
      },
    },
    content: {
      display: "flex",
      columnGap: theme.spacing(2),
    },
  }),
  { name: "NavigationCard" }
);

export default useStyles;
