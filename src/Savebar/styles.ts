import { makeStyles } from "../theme";

const useStyles = makeStyles(
  (theme) => ({
    button: {
      marginRight: theme.spacing(1),
    },
    cancelButton: {
      marginRight: theme.spacing(2),
    },
    deleteButton: {
      "&:hover": {
        backgroundColor: theme.palette.error.dark,
      },
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText,
    },
    spacer: {
      flex: "1",
    },
  }),
  { name: "Savebar" }
);

export default useStyles;
