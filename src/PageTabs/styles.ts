import { makeStyles } from "../theme";

const useStyles = makeStyles(
  (theme) => ({
    tabRoot: {
      "@media (min-width: 600px)": {
        minWidth: "unset",
      },
      "&.Mui-selected": {
        background: theme.palette.secondary.main,
      },
      borderRadius: 8,
      minHeight: 40,
      padding: theme.spacing(1, 2),
    },
    containerRoot: {
      minHeight: "unset",
    },
    containerFlex: {
      columnGap: theme.spacing(2),
    },
  }),
  {
    name: "PageTab",
  }
);

export default useStyles;
