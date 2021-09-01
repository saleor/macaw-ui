import Card, { CardProps } from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import clsx from "clsx";
import React from "react";

import useStyles from "./styles";

export type AlertVariant = "error" | "warning" | "success" | "info";
export interface AlertBaseProps extends Omit<CardProps, "variant"> {
  className?: string;
  variant: AlertVariant;
}

export const AlertBase: React.FC<AlertBaseProps> = ({
  className,
  variant = "info",
  children,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Card
      elevation={0}
      className={clsx(className, classes.root, {
        [classes.error]: variant === "error",
        [classes.warning]: variant === "warning",
        [classes.success]: variant === "success",
      })}
      data-test="alert"
      {...rest}
    >
      <CardContent>{children}</CardContent>
    </Card>
  );
};

AlertBase.displayName = "AlertBase";
