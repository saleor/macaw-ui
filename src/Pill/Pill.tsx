import React from "react";
import Chip, { ChipProps } from "@material-ui/core/Chip";
import useStyles from "./styles";
import clsx from "clsx";
import { useTheme } from "..";

export type PillColor = "error" | "warning" | "success" | "info";

export interface PillProps
  extends Omit<
    ChipProps,
    | "onDelete"
    | "avatar"
    | "icon"
    | "disabled"
    | "deleteIcon"
    | "color"
    | "disabled"
    | "classes"
    | "clickable"
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
            [classes.dark]: themeType === "dark",
            [classes.clickable]: !!onClick || outlined,
            [classes.small]: size === "small",
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
