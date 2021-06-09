import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import clsx from "clsx";
import React from "react";

import useStyles from "./styles";
import type { NotificationProps } from "./types";

const Notification: React.FC<NotificationProps> = ({
  message,
  options,
  close,
  ...rest
}) => {
  const classes = useStyles();

  const { type } = options;
  const { title, content, action } = message;

  return (
    <div
      className={classes.snackbarContainer}
      data-test={`notification-${type}`}
      {...rest}
    >
      <SnackbarContent
        aria-describedby="client-snackbar"
        className={clsx(classes.snackbar, {
          [classes.info]: type === "info",
          [classes.error]: type === "error",
          [classes.success]: type === "success",
          [classes.warning]: type === "warning",
        })}
        message={
          <span>
            {title && (
              <Typography variant="h5" style={{ fontWeight: "bold" }}>
                {title}
              </Typography>
            )}
            <Typography className={classes.text}>{content}</Typography>
          </span>
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
            onClick={close}
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

export default Notification;
