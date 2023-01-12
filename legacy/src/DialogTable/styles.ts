import { makeStyles } from "../theme";

export const useStyles = makeStyles(
  () => ({
    wrapper: {
      overflowY: "scroll",
      maxHeight: 500,
    },
  }),
  { name: "DialogTable" }
);
