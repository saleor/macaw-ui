import type { ButtonBaseProps } from "@material-ui/core/ButtonBase";
import ButtonBase from "@material-ui/core/ButtonBase";
import clsx from "clsx";
import React from "react";

import { UserInteraction } from "../../types/utils";
import useStyles from "./styles";

export type LayoutButtonProps<T extends React.ElementType> = ButtonBaseProps<
  T,
  { component?: T }
> & {
  state?: UserInteraction;
};

export const LayoutButtonInner = <T extends React.ElementType = "button">(
  {
    className,
    children,
    state = "default",
    component,
    ...rest
  }: LayoutButtonProps<T>,
  ref: React.ForwardedRef<HTMLButtonElement>
) => {
  const classes = useStyles();

  return (
    <ButtonBase
      className={clsx(classes.root, className, {
        [classes.hover]: state === "hover",
        [classes.active]: state === "active",
      })}
      component={component}
      disableRipple
      ref={ref}
      {...rest}
    >
      {children}
    </ButtonBase>
  );
};
LayoutButtonInner.displayName = "LayoutButton";

export const LayoutButton = React.forwardRef(LayoutButtonInner) as <
  T extends React.ElementType
>(
  props: LayoutButtonProps<T> & { ref?: React.ForwardedRef<unknown> }
) => ReturnType<typeof LayoutButtonInner>;
