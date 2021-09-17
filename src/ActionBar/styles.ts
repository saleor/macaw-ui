import { makeStyles } from "../theme";

const useStyles = makeStyles(
  (theme) => ({
    content: {
      "&:last-child": {
        paddingBottom: theme.spacing(2),
      },
      display: "flex",
      paddingBottom: theme.spacing(2),
      paddingTop: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        marginTop: theme.spacing(1),
      },
    },
    paper: {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
    root: {
      height: 70,
    },
  }),
  { name: "Savebar" }
);

export default useStyles;
