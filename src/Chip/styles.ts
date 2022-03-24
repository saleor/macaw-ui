import { makeStyles } from "../theme";

const useStyles = makeStyles(
  (theme) => ({
    chip: {
      background: theme.palette.saleor.active[1],
      color: theme.palette.primary.contrastText,
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      padding: `3px ${theme.spacing(2)}`,
      gap: "4px",
      lineHeight: 1,
      minHeight: theme.spacing(4),
      cursor: "default",
      userSelect: "none",
      textAlign: "center",
      "& > span": {
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
    },
    startAdornment: {
      marginLeft: "-8px",
    },
    endAdornment: {
      marginRight: "-8px",
    },
    swatch: {
      width: theme.spacing(3),
      height: theme.spacing(3),
      border: `2px solid #fff`,
      flexShrink: 0,
      marginRight: "7px",
      borderRadius: "4px",
      // default background when no style specified
      background: "transparent",
    },
  }),
  { name: "Chip" }
);

export default useStyles;
