import { rgba } from "polished";

import { makeStyles, SaleorTheme } from "../theme";
import { TooltipProps } from "./Tooltip";

type StyleProps = Pick<TooltipProps, "variant">;

export const getBorderColor =
  (isDark: boolean, theme: SaleorTheme) => (props: StyleProps) => {
    if (isDark) {
      switch (props.variant) {
        case "success":
          return theme.palette.success.main;
        case "warning":
          return theme.palette.warning.main;
        case "error":
          return theme.palette.error.main;
        default:
          return theme.palette.common.white;
      }
    }

    switch (props.variant) {
      case "success":
        return theme.palette.success.light;
      case "warning":
        return theme.palette.warning.light;
      case "error":
        return theme.palette.error.light;
      default:
        return rgba(theme.palette.saleor.main[3], 0.6);
    }
  };

const useStyles = makeStyles<
  StyleProps,
  | "tooltip"
  | "tooltipContainer"
  | "dark"
  | "header"
  | "relative"
  | "arrow"
  | "arrowOverlay"
  | "arrowContainer"
>(
  (theme) => ({
    dark: {},
    tooltipContainer: {
      zIndex: 0,
    },
    tooltip: {
      backgroundColor: theme.palette.common.white,
      padding: theme.spacing(1.5),
      borderRadius: theme.spacing(1),
      border: `1px solid ${theme.palette.saleor.main[3]}`,
      borderWidth: "1px",
      fontWeight: 500,
      borderColor: getBorderColor(false, theme),

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
      "&$dark": {
        color: theme.palette.common.black,
        backgroundColor: getBorderColor(true, theme),
      },
    },
    header: {},
    relative: {
      position: "relative",
    },
    arrow: {
      position: "absolute",
      zIndex: -1,

      "& path": {
        stroke: getBorderColor(false, theme),
        strokeLinecap: "round",
      },

      "&$dark": {
        stroke: getBorderColor(true, theme),
      },
    },
    arrowOverlay: {
      position: "absolute",
      height: "7.5px",
      top: "0.5px",
      width: "100%",
      zIndex: 1,
    },
    arrowContainer: {
      width: "24px",
      color: theme.palette.common.white,
      position: "absolute",
    },
  }),
  {
    name: "Tooltip",
  }
);

export default useStyles;
