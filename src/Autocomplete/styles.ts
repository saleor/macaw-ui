import { zIndex } from "../consts";
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
      // Places popper above dialogs
      zIndex: zIndex.popper,
    },
  }),
  { name: "Autocomplete" }
);

export default useStyles;
