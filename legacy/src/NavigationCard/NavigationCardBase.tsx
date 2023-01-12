import Card, { CardProps } from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import clsx from "clsx";
import React from "react";

import useStyles from "./styles";

export interface NavigationCardBaseProps extends Omit<CardProps, "classes"> {
  classes?: Record<"root" | "content", string>;
}

export const NavigationCardBase: React.FC<NavigationCardBaseProps> = ({
  className,
  classes: propClasses = {},
  children,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.card, className, propClasses.root)} {...rest}>
      <CardContent className={clsx(classes.cardContent, propClasses.content)}>
        {children}
      </CardContent>
    </Card>
  );
};
