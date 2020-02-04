import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import makeStyles from "@material-ui/core/styles/makeStyles";
import classNames from "classnames";
import React from "react";

import ConfirmButton, {
  ConfirmButtonTransitionState
} from "../ConfirmButton/ConfirmButton";

const useStyles = makeStyles(
  theme => ({
    danger: {
      "&:hover": {
        backgroundColor: theme.palette.error.main
      },
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText
    }
  }),
  { name: "ActionDialog" }
);

export interface DialogProps {
  open: boolean;
  onClose: () => void;
}
export type ActionDialogLabelKeys = "cancelLabel" | "confirmLabel" | "title";
export type ActionDialogLabels = Record<ActionDialogLabelKeys, React.ReactNode>;
export interface ActionDialogProps extends ActionDialogLabels, DialogProps {
  children?: React.ReactNode;
  confirmButtonState: ConfirmButtonTransitionState;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
  variant?: "default" | "danger";
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
    onClose,
    ...rest
  } = props;

  const classes = useStyles(props);

  return (
    <Dialog
      fullWidth
      maxWidth={maxWidth}
      onClose={onClose}
      open={open}
      {...rest}
    >
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
