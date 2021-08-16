import { Tooltip as MUITooltip } from "@material-ui/core";
import { TooltipProps as MUITooltipProps } from "@material-ui/core/Tooltip";
import React from "react";

import useStyles from "./styles";

export interface TooltipProps extends MUITooltipProps {
  variant?: "info" | "success" | "warning" | "error";
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  variant = "info",
  ...rest
}) => {
  const classes = useStyles({ variant, children, ...rest });

  return (
    <MUITooltip classes={classes} {...rest}>
      {children}
    </MUITooltip>
  );
};

Tooltip.displayName = "Tooltip";
