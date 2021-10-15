import { makeStyles } from "../theme";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      "&:hover, &:focus-visible, &$hover": {
        borderColor: theme.palette.saleor.active[3],
        color: theme.palette.primary.main,
      },
      "&:active, &$active": {
        backgroundColor: theme.palette.saleor.active[5],
        borderColor: theme.palette.saleor.active[3],
        color: theme.palette.primary.main,
      },
      backgroundColor: "transparent",
      border: `1px dashed ${theme.palette.saleor.main[3]}`,
      borderRadius: 20,
      cursor: "pointer",
      color: theme.palette.text.primary,
      outline: 0,
      userSelect: "none",
      padding: "5px 8px",
      transition: theme.transitions.create(
        ["border-color", "background-color", "color"],
        {
          duration: theme.transitions.duration.shorter,
        }
      ),
      ...theme.typography.body1,
    },
    hover: {},
    active: {},
  }),
  {
    name: "PillLink",
  }
);
export default useStyles;
