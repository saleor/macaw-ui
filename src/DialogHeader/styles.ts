import { makeStyles } from "../theme";

export const useStyles = makeStyles(
  () => ({
    button: {
      opacity: 0.6,
    },
    wrapper: {
      alignItems: "center",
      display: "flex",
      justifyContent: "space-between",
    },
  }),
  { name: "DialogHeader" }
);
