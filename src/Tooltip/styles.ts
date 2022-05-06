import { parseToRgb, rgba, tint, toColorString } from "polished";
import { RgbaColor } from "polished/lib/types/color";

import { makeStyles, SaleorTheme } from "../theme";
import { TooltipProps } from "./Tooltip";

type StyleProps = Pick<TooltipProps, "variant">;

const removeAlpha = (color: string) => {
  const parsed = parseToRgb(color) as RgbaColor;
  return tint(
    1 - parsed?.alpha ?? 0,
    toColorString({ ...parsed, alpha: undefined })
  );
};

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
        return removeAlpha(theme.palette.saleor.main[3]);
    }
  };

const useStyles = makeStyles<
  StyleProps,
  | "tooltip"
  | "tooltipContainer"
  | "dark"
  | "header"
  | "relative"
  | "arrowContainer"
  | "borderPath"
  | "backgroundPath"
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
    borderPath: {
      fill: getBorderColor(false, theme),

      "&$dark": {
        fill: getBorderColor(true, theme),
      },
    },
    backgroundPath: {
      fill: "white",
    },
    arrowContainer: {
      width: "14px",
      height: "8px",
      position: "absolute",
    },
  }),
  {
    name: "Tooltip",
  }
);

export default useStyles;
