import { makeStyles, VariantColors } from "../theme";

function colorProps(color: VariantColors) {
  return {
    "&$dark": {
      "&$clickable": {
        borderColor: color.light,
      },
      "&$active, &$clickable:hover, &$clickable:focus": {
        backgroundColor: color.verydark,
      },
      borderColor: color.dark,
      background: color.dark,
    },
    "&:not($dark)": {
      "&$clickable": {
        borderColor: color.dark,
      },
      "&$active, &$clickable:hover, &$clickable:focus": {
        backgroundColor: color.light,
      },
      borderColor: color.mid,
      background: color.mid,
    },
  };
}

const useStyles = makeStyles(
  (theme) => ({
    root: {
      border: `1px solid ${theme.palette.saleor.info.mid}`,
    },
    dark: {
      color: theme.palette.saleor.main[1],
    },
    active: {},
    clickable: {
      borderStyle: "dashed",
      cursor: "pointer",
    },
    error: colorProps(theme.palette.saleor.fail),
    warning: colorProps(theme.palette.saleor.warning),
    success: colorProps(theme.palette.saleor.success),
    info: colorProps(theme.palette.saleor.info),
    label: {
      ...theme.typography.body2,
      userSelect: "none",
    },
  }),
  { name: "Pill" }
);

export default useStyles;
