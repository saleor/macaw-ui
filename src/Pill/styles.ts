import { makeStyles, VariantColors } from "../theme";

function colorProps(color: VariantColors) {
  return {
    "&$dark": {
      "&$outlined": {
        borderColor: color.light,
      },
      "&$active, &$clickable:hover, &$clickable:focus": {
        "&:not($outlined)": {
          borderColor: color.verydark,
        },
        backgroundColor: color.verydark,
      },
      borderColor: color.dark,
      backgroundColor: color.dark,
    },
    "&:not($dark)": {
      "&$outlined": {
        borderColor: color.dark,
      },
      "&$active, &$clickable:hover, &$clickable:focus": {
        "&:not($outlined)": {
          borderColor: color.light,
        },
        backgroundColor: color.light,
      },
      borderColor: color.mid,
      backgroundColor: color.mid,
    },
  };
}

const useStyles = makeStyles(
  (theme) => ({
    root: {
      border: `1px solid ${theme.palette.saleor.info.mid}`,
      transition: theme.transitions.duration.shorter + "ms",
    },
    dark: {
      color: theme.palette.saleor.main[1],
    },
    active: {},
    clickable: {
      cursor: "pointer",
    },
    outlined: {
      borderStyle: "dashed",
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
