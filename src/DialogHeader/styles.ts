import { makeStyles } from "../theme";

export const useStyles = makeStyles(
  (theme) => ({
    button: {
      "&:hover, &:focus": {
        color: theme.palette.saleor.active[1],
      },
      appearance: "none",
      border: "none",
      background: "transparent",
      color: theme.palette.saleor.main[3],
      cursor: "pointer",
      padding: 0,
      outline: 0,
    },
    wrapper: {
      alignItems: "center",
      display: "flex",
      justifyContent: "space-between",
    },
  }),
  { name: "DialogHeader" }
);
