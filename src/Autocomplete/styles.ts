import { makeStyles } from "../theme";

const useStyles = makeStyles(
  (theme) => ({
    dropdown: {
      maxHeight: 220,
      overflow: "scroll",
    },
    loader: {
      marginRight: theme.spacing(1),
    },
    popper: {
      marginTop: theme.spacing(1),
    },
  }),
  { name: "Autocomplete" }
);

export default useStyles;
