import MuiButton, {
  ButtonProps as MuiButtonProps,
  ButtonTypeMap as MuiButtonTypeMap,
} from "@material-ui/core/Button";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import clsx from "clsx";
import React from "react";

import useStyles from "./styles";

export type ButtonVariant = "primary" | "secondary" | "tertiary";

interface ButtonInnerProps {
  error?: boolean;
  variant?: ButtonVariant;
}

export interface ButtonTypeMap<P = {}, D extends React.ElementType = "button"> {
  props: Omit<MuiButtonTypeMap<P, D>["props"], "variant"> & ButtonInnerProps;
  defaultComponent: D;
  classKey: never;
}

export type ButtonProps<T extends React.ElementType = "button"> = Omit<
  MuiButtonProps<T>,
  "variant"
> &
  ButtonInnerProps;

function getButtonProps(variant: ButtonVariant): Partial<MuiButtonProps> {
  switch (variant) {
    case "primary":
      return { variant: "contained", color: "primary" };
    case "secondary":
      return { variant: "outlined", color: "primary" };
    default:
      return { variant: "text", color: "primary" };
  }
}

const _Button: React.FC<ButtonProps> = ({
  className,
  error,
  variant = "tertiary",
  ...props
}) => {
  const classes = useStyles();

  return (
    <MuiButton
      className={clsx(className, {
        [classes.primary]: variant === "primary" && error,
        [classes.primaryDisabled]:
          variant === "primary" && error && props.disabled,

        [classes.secondary]: variant === "secondary" && error,
        [classes.secondaryDisabled]:
          variant === "secondary" && error && props.disabled,

        [classes.tertiary]: variant === "tertiary" && error,
        [classes.tertiaryDisabled]:
          variant === "tertiary" && error && props.disabled,
      })}
      {...getButtonProps(variant)}
      disableRipple
      {...props}
    />
  );
};
_Button.displayName = "Button";
export const Button = _Button as OverridableComponent<ButtonTypeMap>;
