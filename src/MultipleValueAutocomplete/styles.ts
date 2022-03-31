import { makeStyles } from "../theme";

const useStyles = makeStyles(
  (theme) => ({
    icon: {
      position: "absolute",
      bottom: 4,
      right: 4,
    },
    inputContainer: {
      padding: "27px 44px 10px 12px",
      flexWrap: "wrap",
      gap: theme.spacing(1),
    },
    input: {
      width: "auto",
      padding: 0,
    },
    popper: {
      marginTop: theme.spacing(1),
    },
  }),
  { name: "Autocomplete" }
);

export default useStyles;
