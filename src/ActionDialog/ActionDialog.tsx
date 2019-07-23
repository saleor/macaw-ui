import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Theme } from "@material-ui/core/styles";
import makeStyles from "@material-ui/styles/makeStyles";
import classNames from "classnames";
import React from "react";

import ConfirmButton, { ConfirmButtonTransitionState } from "../ConfirmButton";

const useStyles = makeStyles((theme: Theme) => ({
  danger: {
    "&:hover": {
      backgroundColor: theme.palette.error.main
    },
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText
  }
}));

export type ActionDialogLabelKeys = "cancelLabel" | "confirmLabel" | "title";
export type ActionDialogLabels = Record<ActionDialogLabelKeys, React.ReactNode>;
export interface ActionDialogProps extends ActionDialogLabels {
  children?: React.ReactNode;
  confirmButtonState: ConfirmButtonTransitionState;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
  open: boolean;
  variant?: "default" | "danger";
  onClose: () => void;
  onConfirm: () => void;
}

const ActionDialog: React.FC<ActionDialogProps> = props => {
  const {
    children,
    cancelLabel,
    confirmLabel,
    confirmButtonState,
    open,
    maxWidth,
    title,
    variant,
    onConfirm,
    onClose
  } = props;
  const classes = useStyles(props);

  return (
    <Dialog onClose={onClose} open={open} fullWidth maxWidth={maxWidth}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{cancelLabel}</Button>
        <ConfirmButton
          transitionState={confirmButtonState}
          color="primary"
          variant="contained"
          onClick={onConfirm}
          className={classNames({
            [classes.danger]: variant === "danger"
          })}
        >
          {confirmLabel}
        </ConfirmButton>
      </DialogActions>
    </Dialog>
  );
};

ActionDialog.defaultProps = {
  maxWidth: "xs",
  variant: "default"
};
ActionDialog.displayName = "ActionDialog";
export default ActionDialog;
