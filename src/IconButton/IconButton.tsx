import ButtonBase from "@material-ui/core/ButtonBase";
import { IconButtonTypeMap as MuiIconButtonTypeMap } from "@material-ui/core/IconButton";
import MuiIconButton, {
  IconButtonProps as MuiIconButtonProps,
} from "@material-ui/core/IconButton";
import { OverrideProps } from "@material-ui/core/OverridableComponent";
import clsx from "clsx";
import React from "react";

import { UserInteraction } from "../../types/utils";
import useStyles from "./styles";

export interface IconButtonInnerProps {
  error?: boolean;
  hoverOutline?: boolean;
  state?: UserInteraction;
  variant?: "primary" | "secondary";
}

export interface IconButtonTypeMap<
  P = {},
  D extends React.ElementType = "button"
> {
  props: Omit<MuiIconButtonTypeMap<P, D>["props"], "variant"> &
    IconButtonInnerProps & { href?: string } & OverrideProps<
      MuiIconButtonTypeMap<P, D>,
      "a"
    >;
  defaultComponent: D;
  classKey: never;
}

export type IconButtonProps<T extends React.ElementType = "button"> =
  MuiIconButtonProps<T, { component?: T }> &
    IconButtonInnerProps & { href?: string };

const _IconButton: React.FC<IconButtonProps> = React.forwardRef(
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
_IconButton.displayName = "Button";

export const IconButton = _IconButton as <
  T extends React.ElementType = "button"
>(
  props: IconButtonProps<T> & { ref?: React.ForwardedRef<T> }
) => ReturnType<typeof _IconButton>;
