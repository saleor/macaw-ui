import { Side } from "@floating-ui/react-dom-interactions";
import clsx from "clsx";
import React, { forwardRef } from "react";

import { makeStyles, useTheme } from "../theme";
import { getBackgroundColor, getBorderColor, StyleProps } from "./styles";
import { TooltipProps } from "./Tooltip";

const useStyles = makeStyles<StyleProps>((theme) => ({
  borderPath: {
    fill: getBorderColor(false),
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
  dark: {
    "& $borderPath": {
      fill: getBorderColor(true),
    },

    "& $backgroundPath": {
      fill: getBackgroundColor(true, theme),
    },
  },
}));

interface ArrowProps {
  x: number | undefined;
  y: number | undefined;
  side: Side;
  variant: TooltipProps["variant"];
}

export const Arrow = forwardRef<HTMLDivElement, ArrowProps>(
  ({ x, y, side, variant }, ref) => {
    const { themeType } = useTheme();
    const classes = useStyles({ variant, side });

    return (
      <div
        className={clsx(
          classes.arrowContainer,
          themeType === "dark" && classes.dark
        )}
        ref={ref}
        style={{
          top: y ?? "",
          left: x ?? "",
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8" fill="none">
          <path
            className={classes.backgroundPath}
            fill-rule="evenodd"
            d="M12.25 7 8.6 2.133a2 2 0 0 0-3.2 0L1.75 7h10.5Z"
            clip-rule="evenodd"
          />
          <path
            className={classes.borderPath}
            fill-rule="evenodd"
            d="M5.8 2.433c.6-.8 1.8-.8 2.4 0L11.25 6.5h1.25L9 1.833a2.5 2.5 0 0 0-4 0L1.5 6.5h1.25L5.8 2.433Z"
            clip-rule="evenodd"
          />
          <path
            className={classes.backgroundPath}
            d="M12.5 6.5h-11l-.75 1h12.5l-.75-1Z"
          />
        </svg>
      </div>
    );
  }
);