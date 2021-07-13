import { fade } from "@material-ui/core/styles";

import { makeStyles } from "../src/theme";

const useStyles = makeStyles(
  (theme) => ({
    code: {
      background: fade(theme.palette.secondary.light, 0.1),
      display: "inline",
      fontFamily: "monospace",
      padding: "2px 4px",
    },
    headline: {
      marginBottom: theme.spacing(6),
    },
    paragraph: {
      margin: theme.spacing(3, 0),
    },
    sectionHeader: {
      margin: theme.spacing(3, 0),
    },
  }),
  { name: "Guide" }
);
export default useStyles;
