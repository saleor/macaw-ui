import MUITooltip from "@material-ui/core/Tooltip";
import { TooltipProps as MUITooltipProps } from "@material-ui/core/Tooltip";
import React from "react";

import useStyles from "./styles";

export interface TooltipProps extends MUITooltipProps {
  variant?: "info" | "success" | "warning" | "error";
  disabled?: boolean;
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  disabled = false,
  variant = "info",
  ...rest
}) => {
  const classes = useStyles({ variant, children, ...rest });

  return disabled ? (
    children
  ) : (
    <MUITooltip classes={classes} {...rest}>
      {children}
    </MUITooltip>
  );
};

Tooltip.displayName = "Tooltip";
