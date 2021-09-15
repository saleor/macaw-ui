import { makeStyles } from "../theme";

const useStyles = makeStyles(
  (theme) => ({
    button: {
      marginRight: theme.spacing(1),
    },
    cancelButton: {
      marginRight: theme.spacing(2),
    },
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
    deleteButton: {
      "&:hover": {
        backgroundColor: theme.palette.error.dark,
      },
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText,
    },
    paper: {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
    root: {
      height: 70,
    },
    spacer: {
      flex: "1",
    },
  }),
  { name: "Savebar" }
);

export default useStyles;
