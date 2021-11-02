import { fade } from "@material-ui/core/styles";

import { makeStyles } from "../src/theme";

const useStyles = makeStyles(
  (theme) => ({
    code: {
      background: theme.palette.saleor.active[5],
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
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      columnGap: theme.spacing(3),
    },
    cell: {
      "&:not(:last-child)": {
        marginBottom: theme.spacing(3),
      },
      alignItems: "center",
      border: "1px dashed #7B61FF",
      borderRadius: 4,
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing(3),
      rowGap: theme.spacing(3),
    },
  }),
  { name: "Guide" }
);
export default useStyles;
