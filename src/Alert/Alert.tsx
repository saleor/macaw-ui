import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import clsx from "clsx";
import React from "react";
import SVG from "react-inlinesvg";

import warningIcon from "../assets/alert_icon.svg";
import errorIcon from "../assets/error_icon.svg";
import infoIcon from "../assets/info_icon.svg";
import successIcon from "../assets/success_icon.svg";
import useStyles from "./styles";

export type AlertVariant = "error" | "warning" | "success" | "info";
export interface AlertProps {
  className?: string;
  close?: boolean;
  variant: AlertVariant;
  title: string;
}

function getIcon(variant: AlertVariant): string {
  switch (variant) {
    case "error":
      return errorIcon;
    case "success":
      return successIcon;
    case "warning":
      return warningIcon;
  }
  return infoIcon;
}

export const Alert: React.FC<AlertProps> = ({
  className,
  close = true,
  variant = "info",
  title,
  children,
}) => {
  const classes = useStyles();
  const [visible, setVisible] = React.useState(true);

  if (!visible) {
    return null;
  }

  return (
    <Card
      elevation={0}
      className={clsx(className, classes.root, {
        [classes.error]: variant === "error",
        [classes.warning]: variant === "warning",
        [classes.success]: variant === "success",
      })}
    >
      <CardContent>
        <div className={classes.container}>
          <div>
            <SVG className={classes.icon} src={getIcon(variant)} />
          </div>
          <div className={classes.content}>
            <div className={classes.titleBar}>
              <Typography variant="h5">{title}</Typography>
              {close && (
                <IconButton
                  className={classes.close}
                  onClick={() => setVisible(false)}
                >
                  <CloseIcon />
                </IconButton>
              )}
            </div>
            {typeof children === "string" ? (
              <Typography variant="body1">{children}</Typography>
            ) : (
              children
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

Alert.displayName = "Alert";
