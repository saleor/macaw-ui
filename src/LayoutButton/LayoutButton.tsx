import type { ButtonBaseProps } from "@material-ui/core/ButtonBase";
import ButtonBase from "@material-ui/core/ButtonBase";
import clsx from "clsx";
import React from "react";

import { UserInteraction } from "../../types/utils";
import useStyles from "./styles";

export type LayoutButtonProps<T extends React.ElementType = "button"> =
  ButtonBaseProps<T> & {
    state?: UserInteraction;
  };

export const LayoutButton: React.FC<LayoutButtonProps> = React.forwardRef(
  ({ className, children, state = "default", ...rest }, ref) => {
    const classes = useStyles();

    return (
      <ButtonBase
        className={clsx(classes.root, className, {
          [classes.hover]: state === "hover",
          [classes.active]: state === "active",
        })}
        disableRipple
        ref={ref}
        {...rest}
      >
        {children}
      </ButtonBase>
    );
  }
);
LayoutButton.displayName = "LayoutButton";
