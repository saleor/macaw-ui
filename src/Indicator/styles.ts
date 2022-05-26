import { makeStyles, SaleorTheme } from "../theme";
import { IndicatorProps, IndicatorSize } from "./Indicator";

export const getIconColor =
  (theme: SaleorTheme, type: "mid" | "dark") =>
  (props: Pick<IndicatorProps, "icon">) => {
    switch (props.icon) {
      case "warning":
        return theme.palette.saleor.warning[type];
      case "success":
        return theme.palette.saleor.success[type];
      case "fail":
      case "error":
        return theme.palette.saleor.fail[type];
      default:
        return "inherit";
    }
  };

export const getSizeDimension = (size: IndicatorSize) =>
  size === "regular" ? 24 : 16;

export const useStyles = makeStyles<
  Required<Pick<IndicatorProps, "icon" | "size">>,
  | "wrapper"
  | "wrapperCircle"
  | "wrapperOutline"
  | "absolute"
  | "circlePath"
  | "circleOutline"
>(
  (theme) => ({
    wrapper: {
      position: "relative",
      display: "inline-block",
      width: (props) => `${getSizeDimension(props.size)}px`,
      height: (props) => `${getSizeDimension(props.size)}px`,
      color: theme.palette.saleor.main[1],
    },
    wrapperCircle: {
      color: getIconColor(theme, "mid"),
    },
    wrapperOutline: {
      color: getIconColor(theme, "dark"),
    },
    absolute: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    circlePath: {
      fill: getIconColor(theme, "mid"),
    },
    circleOutline: {
      stroke: getIconColor(theme, "dark"),
    },
  }),
  { name: "Indicator" }
);
