import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
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
  largeIcon?: boolean;
}

export const NavigationCard: React.FC<NavigationCardProps> = ({
  icon,
  title,
  description,
  largeIcon = false,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <NavigationCardBase {...rest}>
      <div className={classes.content}>
        <div
          className={clsx(classes.icon, {
            // This solution is a bit better DX-wise
            // Otherwise if someone wanted to achieve the same effet
            // they would have to fight the CSS specificity rules.
            [classes.largeIcon]: largeIcon,
          })}
        >
          {icon}
        </div>
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
