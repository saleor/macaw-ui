import { makeStyles } from "../theme";

const useStyles = makeStyles(
  (theme) => ({
    popper: {
      marginTop: theme.spacing(1),
    },
  }),
  { name: "Autocomplete" }
);

export default useStyles;
