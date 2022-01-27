import MuiButton, {
  ButtonProps as MuiButtonProps,
  ButtonTypeMap as MuiButtonTypeMap,
} from "@material-ui/core/Button";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import clsx from "clsx";
import React from "react";

import useStyles from "./styles";

export type ButtonVariant = "primary" | "secondary" | "tertiary";
// Aliasing "default" to "text" because "default" isn't actually default
export type ButtonColor = "primary" | "secondary" | "text";

interface ButtonInnerProps {
  color?: ButtonColor;
  error?: boolean;
  variant?: ButtonVariant;
}

export interface ButtonTypeMap<P = {}, D extends React.ElementType = "button"> {
  props: Omit<MuiButtonTypeMap<P, D>["props"], "variant" | "color"> &
    ButtonInnerProps;
  defaultComponent: D;
  classKey: never;
}

export type ButtonProps<T extends React.ElementType = "button"> = Omit<
  MuiButtonProps<T>,
  "variant"
> &
  ButtonInnerProps;

function getButtonProps(
  colorProp: ButtonColor,
  variant: ButtonVariant
): Partial<MuiButtonProps> {
  const color = colorProp === "text" ? "default" : colorProp;

  switch (variant) {
    case "primary":
      return { variant: "contained", color };
    case "secondary":
      return { variant: "outlined", color };
    default:
      return { variant: "outlined", size: "small", color };
  }
}

const _Button: React.FC<ButtonProps> = React.forwardRef(
  (
    { className, color = "primary", error, variant = "tertiary", ...props },
    ref
  ) => {
    const classes = useStyles();

    return (
      <MuiButton
        ref={ref}
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
        {...getButtonProps(color, variant)}
        disableRipple
        {...props}
      />
    );
  }
);
_Button.displayName = "Button";
export const Button = _Button as OverridableComponent<ButtonTypeMap>;
