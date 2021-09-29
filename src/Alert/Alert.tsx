import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import clsx from "clsx";
import React from "react";

import { CompleteIcon, InfoIcon, NotAllowedIcon, WarningIcon } from "../icons";
import useStyles from "./styles";

export type AlertVariant = "error" | "warning" | "success" | "info";
export interface AlertProps {
  className?: string;
  close?: boolean;
  variant: AlertVariant;
  title: string;
}

function getIcon(variant: AlertVariant): React.ReactElement {
  switch (variant) {
    case "error":
      return <NotAllowedIcon />;
    case "success":
      return <CompleteIcon />;
    case "warning":
      return <WarningIcon />;
  }
  return <InfoIcon />;
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
      data-test="alert"
    >
      <CardContent>
        <div className={classes.container}>
          <div>{getIcon(variant)}</div>
          <div className={classes.content}>
            <div className={classes.titleBar}>
              <Typography variant="h5">{title}</Typography>
              {close && (
                <IconButton
                  className={clsx(classes.close, {
                    [classes.closeNoContent]: !!children,
                  })}
                  onClick={() => setVisible(false)}
                  data-test="close"
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
