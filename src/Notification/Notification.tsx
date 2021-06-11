import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import clsx from "clsx";
import React from "react";

import useStyles from "./styles";
import type { NotificationProps } from "./types";

export const Notification: React.FC<NotificationProps> = ({
  onClose,
  title,
  type,
  action,
  content,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <div
      className={classes.snackbarContainer}
      data-test={`notification-${type}`}
      {...rest}
    >
      <SnackbarContent
        aria-describedby="client-snackbar"
        classes={{
          message: clsx(classes.messageContainer, {
            [classes.messageContainerInfo]: type === "info",
            [classes.messageContainerSuccess]: type === "success",
            [classes.messageContainerWarn]: type === "warning",
            [classes.messageContainerError]: type === "error",
          }),
        }}
        className={clsx(classes.snackbar, {
          [classes.info]: type === "info",
          [classes.error]: type === "error",
          [classes.success]: type === "success",
          [classes.warning]: type === "warning",
        })}
        message={
          <div>
            {title && (
              <Typography variant="h5" style={{ fontWeight: "bold" }}>
                {title}
              </Typography>
            )}
            <Typography className={classes.text}>{content}</Typography>
          </div>
        }
        action={[
          <div key="actions" className={classes.actionContainer}>
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
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </div>
  );
};
Notification.displayName = "Notification";
