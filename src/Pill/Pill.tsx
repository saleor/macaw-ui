import Chip, { ChipProps } from "@material-ui/core/Chip";
import clsx from "clsx";
import React from "react";

import { useTheme } from "..";
import useStyles from "./styles";

export type PillColor = "error" | "warning" | "success" | "info" | "generic";

export interface PillProps
  extends Omit<
    ChipProps,
    | "onDelete"
    | "avatar"
    | "disabled"
    | "deleteIcon"
    | "color"
    | "disabled"
    | "classes"
    | "clickable"
    | "css"
  > {
  active?: boolean;
  color?: PillColor;
  outlined?: boolean;
}

export const Pill = React.forwardRef<HTMLDivElement, PillProps>(
  (
    { active, className, color = "info", outlined, onClick, size, ...rest },
    ref
  ) => {
    const classes = useStyles();
    const { themeType } = useTheme();

    return (
      <Chip
        classes={{
          root: clsx(className, classes.root, {
            [classes.active]: active,
            [classes.error]: color === "error",
            [classes.warning]: color === "warning",
            [classes.success]: color === "success",
            [classes.info]: color === "info",
            [classes.generic]: color === "generic",
            [classes.dark]: themeType === "dark",
            [classes.outlined]: outlined,
            [classes.small]: size === "small",
            [classes.clickable]: !!onClick,
          }),
          label: classes.label,
          labelSmall: classes.labelSmall,
        }}
        // There is no other way to disable ripple
        clickable={false}
        component={onClick ? "button" : "div"}
        onClick={onClick}
        size={size}
        ref={ref}
        {...rest}
      />
    );
  }
);
