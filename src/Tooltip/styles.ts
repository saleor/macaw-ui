import { Side } from "@floating-ui/core";
import { parseToRgb, rgba, tint, toColorString } from "polished";
import { RgbaColor } from "polished/lib/types/color";

import { dark, light, makeStyles, SaleorTheme } from "../theme";
import { TooltipProps } from "./Tooltip";

type StyleProps = Pick<TooltipProps, "variant"> & { side: Side };

const removeAlpha = (color: string) => {
  const parsed = parseToRgb(color) as RgbaColor;
  return tint(
    1 - parsed?.alpha ?? 0,
    toColorString({ ...parsed, alpha: undefined })
  );
};
const mapSide: Record<Side, Side> = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right",
} as const;

export const getBorderColor =
  (isDark: boolean, theme: SaleorTheme) => (props: StyleProps) => {
    if (isDark) {
      switch (props.variant) {
        case "success":
          return dark.success.light;
        case "warning":
          return dark.warning.light;
        case "error":
          return dark.fail.light;
        default:
          return removeAlpha(light.main[3]);
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
        return removeAlpha(light.main[3]);
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

const useStyles = makeStyles<
  StyleProps,
  | "tooltip"
  | "dark"
  | "header"
  | "relative"
  | "arrowContainer"
  | "borderPath"
  | "backgroundPath"
>(
  (theme) => ({
    dark: {
      "& $tooltip": {
        color: (props) => {
          return props.variant ? dark.main[2] : light.main[2];
        },
        backgroundColor: getBackgroundColor(true, theme),
        borderColor: getBorderColor(true, theme),
      },

      "& $borderPath": {
        fill: getBorderColor(true, theme),
      },

      "& $backgroundPath": {
        fill: getBackgroundColor(true, theme),
      },
    },
    tooltip: {
      backgroundColor: getBackgroundColor(false, theme),
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
    },
    header: {},
    relative: {
      position: "relative",
    },
    borderPath: {
      fill: getBorderColor(false, theme),
    },
    backgroundPath: {
      fill: getBackgroundColor(false, theme),
    },
    arrowContainer: {
      width: "14px",
      height: "8px",
      position: "absolute",
      transform: (props) => {
        switch (props.side) {
          case "top":
            return "rotate(180deg)";
          case "bottom":
            return "rotate(0deg)";
          case "left":
            return "rotate(90deg)";
          case "right":
            return "rotate(-90deg)";
        }
      },
      top: (props) => (props.side === "bottom" && "-13px") || "",
      bottom: (props) => (props.side === "top" && "-13px") || "",
      left: (props) => (props.side === "right" && "-16px") || "",
      right: (props) => (props.side === "left" && "-16px") || "",
    },
  }),
  {
    name: "Tooltip",
  }
);

export default useStyles;
