import { makeStyles } from "../theme";

const useStyles = makeStyles(
  (theme) => ({
    menuContent: {
      minWidth: 220,
      padding: theme.spacing(2),
    },
    menuHeader: {
      textTransform: "uppercase",
    },
    menuPaper: {
      borderRadius: 0,
    },

    filter: {
      display: "flex",
      columnGap: theme.spacing(2),
    },
    filterDelete: {
      marginLeft: "auto",
    },

    bar: {
      width: 800,
    },
  }),
  {
    name: "Filter",
  }
);
export default useStyles;
