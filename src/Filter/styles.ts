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
    filterValue: {
      height: 51,
      width: 400,
    },
    filterRange: {
      width: 115,
    },
    filterInputInner: {
      "&&": {
        padding: theme.spacing(2),
      },
    },
    filterConjunction: {
      minWidth: 80,
    },
    filterValueCheckbox: {
      paddingLeft: 0,
    },
    filterValueSelected: {
      color: theme.palette.primary.main,
      fontWeight: 500,
    },
    filterRangeLabel: {
      margin: theme.spacing(0, 1),
    },
    filterRangeValueContainer: {
      display: "flex",
      alignItems: "center",
    },

    bar: {
      minWidth: 600,
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
