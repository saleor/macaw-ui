import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import React from "react";

import { IconButton } from "../IconButton";
import { CloseIcon } from "../icons";
import { CompleteIcon, InfoIcon, NotAllowedIcon, WarningIcon } from "../icons";
import { AlertBase, AlertBaseProps, AlertVariant } from "./AlertBase";
import useStyles from "./styles";

export interface AlertProps extends AlertBaseProps {
  close?: boolean;
  title?: string;
}
interface IconProps extends React.SVGProps<SVGSVGElement> {
  variant: AlertVariant;
}
const Icon: React.FC<IconProps> = ({ variant, ...props }) => {
  switch (variant) {
    case "error":
      return <NotAllowedIcon {...props} />;
    case "warning":
      return <WarningIcon {...props} />;
    case "success":
      return <CompleteIcon {...props} />;
    default:
      return <InfoIcon {...props} />;
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
        <div className={classes.icon}>
          <Icon
            className={clsx({
              [classes.error]: variant === "error",
              [classes.warning]: variant === "warning",
              [classes.success]: variant === "success",
            })}
            variant={variant}
          />
        </div>
        <div className={classes.content}>
          <div className={classes.titleBar}>
            {title && <Typography variant="h5">{title}</Typography>}
            {close && (
              <IconButton
                className={clsx(classes.close, {
                  [classes.closeNoContent]: !children,
                })}
                hoverOutline={false}
                variant="secondary"
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
