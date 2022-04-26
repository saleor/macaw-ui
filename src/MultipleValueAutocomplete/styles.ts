import { zIndex } from "../consts";
import { makeStyles } from "../theme";

const useStyles = makeStyles(
  (theme) => ({
    dropdown: {
      maxHeight: 220,
      overflow: "scroll",
    },
    icon: {
      position: "absolute",
      bottom: 4,
      right: 4,
    },
    inputContainer: {
      padding: "23px 80px 10px 12px",
      flexWrap: "wrap",
      gap: theme.spacing(1),
    },
    inputContainerWithChips: {
      paddingTop: 27,
    },
    input: {
      height: "1.1875em",
      minWidth: "3rem",
      padding: 0,
    },
    loader: {
      position: "absolute",
      bottom: theme.spacing(1),
      right: theme.spacing(6),
    },
    popper: {
      marginTop: theme.spacing(1),
      zIndex: zIndex.popper,
    },
  }),
  { name: "MultipleValueAutocomplete" }
);

export default useStyles;
