import { fade } from "@material-ui/core/styles";

import { makeStyles } from "../theme";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      "&:hover, &:focus-visible, &$hover": {
        background: theme.palette.background.paper,
        color: theme.palette.primary.main,
      },
      "&:active, &$active": {
        background: theme.palette.saleor.active[4],
        color: theme.palette.primary.main,
      },
      ...theme.typography.body1,
      background: fade(theme.palette.background.paper, 0.4),
      borderRadius: 4,
      color: theme.palette.text.secondary,
      fontSize: theme.typography.body1.fontSize,
      fontWeight: 500,
      height: 40,
      padding: theme.spacing(0.5, 2),
      textAlign: "center",
      transition: theme.transitions.duration.shorter + "ms",
    },
    hover: {},
    active: {},
  }),
  { name: "LayoutButton" }
);

export default useStyles;
