import Card, { CardProps } from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import clsx from "clsx";
import React from "react";

import useStyles from "./styles";

export type NavigationCardBaseProps = CardProps;

export const NavigationCardBase: React.FC<NavigationCardBaseProps> = ({
  className,
  children,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.card, className)} {...rest}>
      <CardContent className={classes.cardContent}>{children}</CardContent>
    </Card>
  );
};
