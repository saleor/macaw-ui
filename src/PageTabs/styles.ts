import { fade } from "@material-ui/core/styles";

import { makeStyles } from "../theme";

const useStyles = makeStyles(
  (theme) => ({
    tabRoot: {
      "@media (min-width: 600px)": {
        minWidth: "unset",
      },
      "&.Mui-selected": {
        background: theme.palette.saleor.generic.mid,
        color: theme.palette.saleor.main[1],
      },
      "&:hover": {
        background: fade(theme.palette.saleor.generic.mid, 0.6),
      },
      color: theme.palette.saleor.main[3],
      borderRadius: 4,
      minHeight: 40,
      padding: theme.spacing(1, 2),
      textTransform: "unset",
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
