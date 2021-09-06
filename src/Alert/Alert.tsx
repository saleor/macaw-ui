import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import clsx from "clsx";
import React from "react";

import { Error, Info, Success, Warning } from "../icons";
import { AlertBase, AlertBaseProps, AlertVariant } from "./AlertBase";
import useStyles from "./styles";

export interface AlertProps extends AlertBaseProps {
  close?: boolean;
  title: string;
}
const Icon: React.FC<{ variant: AlertVariant }> = ({ variant }) => {
  switch (variant) {
    case "error":
      return <Error />;
    case "warning":
      return <Warning />;
    case "success":
      return <Success />;
    default:
      return <Info />;
  }
};

export const Alert: React.FC<AlertProps> = ({
  close = true,
  variant = "info",
  title,
  children,
  ...rest
}) => {
  const classes = useStyles();
  const [visible, setVisible] = React.useState(true);

  if (!visible) {
    return null;
  }

  return (
    <AlertBase variant={variant} {...rest}>
      <div className={classes.container}>
        <div>
          <Icon variant={variant} />
        </div>
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
    </AlertBase>
  );
};

Alert.displayName = "Alert";
