import ButtonBase from "@material-ui/core/ButtonBase";
import MuiIconButton, {
  IconButtonProps as MuiIconButtonProps,
} from "@material-ui/core/IconButton";
import clsx from "clsx";
import React from "react";

import { UserInteraction } from "../../types/utils";
import useStyles from "./styles";

export type IconButtonProps<T extends React.ElementType = "button"> = Omit<
  MuiIconButtonProps<T>,
  "variant"
> & {
  error?: boolean;
  hoverOutline?: boolean;
  state?: UserInteraction;
  variant?: "primary" | "secondary";
};

export const IconButton: React.FC<IconButtonProps> = React.forwardRef(
  (
    {
      className,
      error,
      hoverOutline = true,
      variant = "primary",
      state = "default",
      ...props
    },
    ref
  ) => {
    const classes = useStyles();

    if (variant === "secondary") {
      return (
        <ButtonBase
          ref={ref}
          className={clsx(classes.secondary, className, {
            [classes.hoverOutline]: hoverOutline && !props.disabled,
            [classes.hover]: state === "hover" && !props.disabled,
            [classes.active]: state === "active" && !props.disabled,
            [classes.error]: error,
            [classes.disabledError]: error && props.disabled,
          })}
          disableRipple
          {...props}
        />
      );
    }

    return (
      <MuiIconButton
        ref={ref}
        className={clsx(classes.primary, className, {
          [classes.hover]: state === "hover" && !props.disabled,
          [classes.active]: state === "active" && !props.disabled,
          [classes.error]: error,
          [classes.disabledError]: error && props.disabled,
        })}
        disableRipple
        {...props}
      />
    );
  }
);
IconButton.displayName = "Button";
