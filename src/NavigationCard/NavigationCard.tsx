import Typography from "@material-ui/core/Typography";
import React from "react";

import {
  NavigationCardBase,
  NavigationCardBaseProps,
} from "./NavigationCardBase";
import useStyles from "./styles";

export interface NavigationCardProps extends NavigationCardBaseProps {
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
    <NavigationCardBase {...rest}>
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
    </NavigationCardBase>
  );
};
