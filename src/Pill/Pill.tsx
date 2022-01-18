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
  > {
  active?: boolean;
  color?: PillColor;
}

export const Pill: React.FC<PillProps> = ({
  active,
  className,
  color = "info",
  onClick,
  ...rest
}) => {
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
          [classes.clickable]: !!onClick,
        }),
        label: classes.label,
      }}
      // There is no other way to disable ripple
      clickable={false}
      onClick={onClick}
      {...rest}
    />
  );
};
