import SnackbarContent from "@material-ui/core/SnackbarContent";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import React, { useState } from "react";

import { Button } from "../Button";
import { IconButton } from "../IconButton";
import { CloseIcon, ExpandIcon } from "../icons";
import { CompleteIcon, InfoIcon, NotAllowedIcon, WarningIcon } from "../icons";
import useStyles from "./styles";
import type { NotificationProps, NotificationType } from "./types";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  type: NotificationType;
}
const Icon: React.FC<IconProps> = ({ type, ...props }) => {
  switch (type) {
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

export const Notification: React.FC<NotificationProps> = ({
  onClose,
  title,
  type,
  action,
  content,
  className,
  apiMessage,
  ...rest
}) => {
  const classes = useStyles();
  const [showApiMessage, setShowApiMessage] = useState(false);

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
          action: clsx(classes.snackbarAction, {
            [classes.snackbarContentWithAction]: !!action && !apiMessage,
          }),
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
              <Icon className={classes.icon} type={type} />
            </div>
            <div>
              <div className={classes.title}>
                <Typography variant="h5">{title}</Typography>
              </div>
              <Typography variant="body1">{content}</Typography>
              {showApiMessage && (
                <Typography variant="body2" className={classes.apiMessage}>
                  {apiMessage?.apiMessageContent}
                </Typography>
              )}
            </div>
          </div>
        }
        action={[
          <div key="actions">
            {!!action && (
              <Button
                className={classes.actionBtn}
                key="action"
                variant="tertiary"
                onClick={action.onClick}
                data-test="button-action"
              >
                {action.label}
              </Button>
            )}
          </div>,
          <div key="api-action" className={classes.apiMessageAction}>
            {!!apiMessage && (
              <>
                <Typography variant="body1">
                  {showApiMessage
                    ? apiMessage.hideApiLabel
                    : apiMessage.showApiLabel}
                </Typography>
                <IconButton
                  aria-label={showApiMessage ? "shrink" : "expand"}
                  onClick={() => setShowApiMessage((show) => !show)}
                  hoverOutline={false}
                  variant="secondary"
                >
                  <ExpandIcon
                    className={clsx({
                      [classes.rotate]: showApiMessage,
                    })}
                  />
                </IconButton>
              </>
            )}
          </div>,
          <IconButton
            aria-label="Close"
            onClick={onClose}
            hoverOutline={false}
            variant="secondary"
            className={classes.closeBtn}
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
