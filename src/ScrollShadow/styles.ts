import { makeStyles } from "../theme";

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      //   margin: theme.spacing(0, 3),
      boxShadow: "0px 0px 0px rgba(2, 25, 58, 0.16)",
      transition: theme.transitions.create("box-shadow"),
    },
    bottom: {
      boxShadow: "0px -6px 30px rgba(2, 25, 58, 0.16)",
    },
    top: {
      boxShadow: "0px 6px 30px rgba(2, 25, 58, 0.16)",
    },
  }),
  { name: "ScrollShadow" }
);
