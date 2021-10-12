import MuiButton, {
  ButtonProps as MuiButtonProps,
} from "@material-ui/core/Button";
import clsx from "clsx";
import React from "react";

import useStyles from "./styles";

export type ButtonVariant = "primary" | "secondary" | "tertiary";

export type ButtonProps<T extends React.ElementType = "button"> = Omit<
  MuiButtonProps<T>,
  "variant"
> & {
  error?: boolean;
  variant?: ButtonVariant;
};

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

export const Button: React.FC<ButtonProps> = ({
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
Button.displayName = "Button";
