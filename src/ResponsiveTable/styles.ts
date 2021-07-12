import { makeStyles } from "../theme";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      [theme.breakpoints.up("md")]: {
        "&& table": {
          tableLayout: "fixed",
        },
      },
      "& table": {
        tableLayout: "auto",
      },
      overflowX: "auto",
      width: "100%",
    },
  }),
  {
    name: "ResponsiveTable",
  }
);

export default useStyles;
