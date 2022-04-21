import { makeStyles } from "../theme";

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
    border: {
      borderRadius: 4,
      border: "1px dashed #7B61FF",
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
    gridCell: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: theme.spacing(3),
    },
  }),
  { name: "Guide" }
);
export default useStyles;
