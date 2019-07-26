import DialogContentText from "@material-ui/core/DialogContentText";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import ActionDialog, { ActionDialogProps } from "./ActionDialog";

const props: ActionDialogProps = {
  cancelLabel: "cancel",
  confirmButtonState: "default",
  confirmLabel: "confirm",
  onClose: action("close"),
  onConfirm: action("confirm"),
  open: true,
  title: "Example modal title"
};

storiesOf("Action dialog", module)
  .add("default", () => (
    <ActionDialog {...props}>
      <DialogContentText>Example content</DialogContentText>
    </ActionDialog>
  ))
  .add("danger variant", () => (
    <ActionDialog {...props} variant="danger">
      <DialogContentText>Example content</DialogContentText>
    </ActionDialog>
  ));
