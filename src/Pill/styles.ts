import { makeStyles, VariantColors } from "../theme";

function colorProps(color: VariantColors) {
  return {
    "&:not($small)": {
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
    },
    borderColor: color.light,
    background: color.light,
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
    labelSmall: {
      "&&": {
        fontSize: "1.2rem",
        lineHeight: 1.6,
        letterSpacing: "0.1rem",
        fontWeight: 500,
        textTransform: "uppercase",
      },
    },
    warning: colorProps(theme.palette.saleor.warning),
    success: colorProps(theme.palette.saleor.success),
    info: colorProps(theme.palette.saleor.info),
    label: {
      ...theme.typography.body2,
      userSelect: "none",
    },
    small: {},
  }),
  { name: "Pill" }
);

export default useStyles;
