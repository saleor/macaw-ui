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
      alignItems: "center",
      display: "flex",
      columnGap: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    filterDelete: {
      marginLeft: "auto",
    },
    filterName: {
      width: 180,
    },
    filterNameInner: {
      padding: theme.spacing(2),
    },
    filterConjunction: {
      minWidth: 80,
    },

    bar: {
      width: 800,
    },

    selectPaper: {
      borderRadius: 0,
      marginTop: `calc(48px + ${theme.spacing(1)})`,
    },
  }),
  {
    name: "Filter",
  }
);
export default useStyles;
