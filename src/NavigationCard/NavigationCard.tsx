import Card, { CardProps } from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React from "react";

import useStyles from "./styles";

export interface NavigationCardProps extends CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const NavigationCard: React.FC<NavigationCardProps> = ({
  icon,
  title,
  description,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card} {...rest}>
      <CardContent className={classes.cardContent}>
        <div className={classes.content}>
          <div className={classes.icon}>{icon}</div>
          <div>
            <Typography variant="subtitle1" className={classes.boxLinkTitle}>
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              className={classes.boxLinkText}
            >
              {description}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
