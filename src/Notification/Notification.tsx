import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import clsx from "clsx";
import React from "react";

import { Error, Info, Success, Warning } from "../icons";
import useStyles from "./styles";
import type { NotificationProps, NotificationType } from "./types";

const Icon: React.FC<{ type: NotificationType }> = ({ type }) => {
  switch (type) {
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

export const Notification: React.FC<NotificationProps> = ({
  onClose,
  title,
  type,
  action,
  content,
  className,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.snackbarContainer, className)}
      data-test="notification"
      data-test-type={type}
      {...rest}
    >
      <SnackbarContent
        aria-describedby="client-snackbar"
        classes={{
          action: classes.snackbarAction,
          message: classes.messageContainer,
        }}
        className={clsx(classes.snackbar, {
          [classes.info]: type === "info",
          [classes.error]: type === "error",
          [classes.success]: type === "success",
          [classes.warning]: type === "warning",
        })}
        message={
          <div className={classes.container}>
            <div>
              <Icon type={type} />
            </div>
            <div>
              <div className={classes.title}>
                <Typography variant="h5">{title}</Typography>
              </div>
              <Typography variant="body1">{content}</Typography>
            </div>
          </div>
        }
        action={[
          <div key="actions">
            {!!action && (
              <Button
                className={classes.actionBtn}
                key="action"
                color="default"
                size="small"
                onClick={action.onClick}
                data-test="button-action"
              >
                {action.label}
              </Button>
            )}
          </div>,
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={onClose}
            className={clsx(classes.closeBtn, {
              [classes.closeBtnInfo]: type === "info",
            })}
            data-test="close"
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </div>
  );
};
Notification.displayName = "Notification";
