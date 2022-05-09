import { Side } from "@floating-ui/core";

import { dark, light, makeStyles, SaleorTheme } from "../theme";
import { TooltipProps } from "./Tooltip";

export type StyleProps = Pick<TooltipProps, "variant"> & { side: Side };

export const getBorderColor = (isDark: boolean) => (props: StyleProps) => {
  if (isDark) {
    switch (props.variant) {
      case "success":
        return dark.success.light;
      case "warning":
        return dark.warning.light;
      case "error":
        return dark.fail.light;
      default:
        return "#797d7d"; // dark.main[3] without alpha
    }
  }

  switch (props.variant) {
    case "success":
      return light.success.mid;
    case "warning":
      return light.warning.mid;
    case "error":
      return light.fail.mid;
    default:
      return "#7d7f7f"; // light.main[3] without alpha
  }
};

export const getBackgroundColor =
  (isDark: boolean, theme: SaleorTheme) => (props: StyleProps) => {
    if (isDark) {
      switch (props.variant) {
        case "success":
          return dark.success.dark;
        case "warning":
          return dark.warning.dark;
        case "error":
          return dark.fail.dark;
        default:
          return dark.main[1];
      }
    }

    return theme.palette.common.white;
  };

const useStyles = makeStyles<StyleProps, "tooltip" | "dark" | "header">(
  (theme) => ({
    dark: {
      "& $tooltip": {
        color: (props) => {
          return props.variant ? dark.main[2] : light.main[2];
        },
        backgroundColor: getBackgroundColor(true, theme),
        borderColor: getBorderColor(true),
      },
    },
    tooltip: {
      backgroundColor: getBackgroundColor(false, theme),
      padding: theme.spacing(1.5),
      borderRadius: theme.spacing(1),
      border: `1px solid ${theme.palette.saleor.main[3]}`,
      borderWidth: "1px",
      fontWeight: 500,
      borderColor: getBorderColor(false),

      color: (props) => {
        switch (props.variant) {
          case "success":
            return theme.palette.success.dark;
          case "warning":
            return theme.palette.warning.dark;
          case "error":
            return theme.palette.error.dark;
          default:
            return theme.palette.saleor.main[1];
        }
      },
    },
    header: {
      fontSize: theme.typography.caption.fontSize,
      letterSpacing: "0.1em",
      fontWeight: 500,
      textTransform: "uppercase",
      marginBottom: theme.spacing(0.5),
      color: light.main[3],
    },
  }),
  {
    name: "Tooltip",
  }
);

export default useStyles;
