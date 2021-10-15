import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import Typography, { TypographyProps } from "@material-ui/core/Typography";
import React from "react";

import { CloseIcon } from "../icons";
import { useStyles } from "./styles";

export interface DialogHeaderProps extends TypographyProps<"h5"> {
  onClose: () => void;
}

export const DialogHeader: React.FC<DialogHeaderProps> = ({
  onClose,
  children,
  ...props
}) => {
  const classes = useStyles();

  return (
    <>
      <DialogTitle
        className={classes.wrapper}
        id="alert-dialog-title"
        disableTypography
      >
        <Typography variant="h5" component="h5" {...props}>
          {children}
        </Typography>
        <IconButton
          className={classes.button}
          onClick={onClose}
          aria-label="Close modal"
          data-test="close"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
    </>
  );
};
DialogHeader.displayName = "DialogHeader";
