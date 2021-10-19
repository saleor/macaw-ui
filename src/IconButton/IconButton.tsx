import ButtonBase from "@material-ui/core/ButtonBase";
import MuiIconButton, {
  IconButtonProps as MuiIconButtonProps,
} from "@material-ui/core/IconButton";
import clsx from "clsx";
import React from "react";

import useStyles from "./styles";

export type IconButtonProps<T extends React.ElementType = "button"> = Omit<
  MuiIconButtonProps<T>,
  "variant"
> & {
  error?: boolean;
  variant?: "primary" | "secondary";
};

export const IconButton: React.FC<IconButtonProps> = ({
  className,
  error,
  variant = "primary",
  ...props
}) => {
  const classes = useStyles();

  if (variant === "secondary") {
    return (
      <ButtonBase className={classes.secondary} disableRipple {...props} />
    );
  }

  return (
    <MuiIconButton
      className={clsx(className, {
        [classes.error]: error,
        [classes.disabledError]: error && props.disabled,
      })}
      disableRipple
      {...props}
    />
  );
};
IconButton.displayName = "Button";
