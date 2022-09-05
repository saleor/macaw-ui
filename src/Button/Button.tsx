import MuiButton, {
  ButtonProps as MuiButtonProps,
  ButtonTypeMap as MuiButtonTypeMap,
} from "@mui/material/Button";
import { OverridableComponent } from "@mui/material/OverridableComponent";
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
  const color = colorProp === "text" ? "primary" : colorProp;

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
        className={clsx(className, classes.buttonDefault, {
          [classes.primary]: variant === "primary",
          [classes.primaryDisabled]: variant === "primary" && props.disabled,
          [classes.primaryError]: variant === "primary" && error,
          [classes.primaryErrorDisabled]:
            variant === "primary" && error && props.disabled,

          [classes.secondary]: variant === "secondary",
          [classes.secondaryDisabled]:
            variant === "secondary" && props.disabled,
          [classes.secondaryError]: variant === "secondary" && error,
          [classes.secondaryErrorDisabled]:
            variant === "secondary" && error && props.disabled,

          [classes.tertiary]: variant === "tertiary",
          [classes.tertiaryDisabled]: variant === "tertiary" && props.disabled,
          [classes.tertiaryError]: variant === "tertiary" && error,
          [classes.tertiaryErrorDisabled]:
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
