import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

import { classNames } from "~/utils";

import { isFixedWidth } from "./utils";
import { Box } from "../Box";
import { button, ButtonVariants } from "./Button.css";

export type ButtonProps = ButtonVariants &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> & {
    children?: ReactNode;
    icon?: ReactNode;
    disabled?: boolean;
    className?: string;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      icon,
      size,
      fixedWidth,
      variant,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <Box
        as="button"
        className={classNames(
          button({
            variant,
            size,
            fixedWidth: isFixedWidth({ icon, children, fixedWidth }),
          }),
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {icon}
        {children}
      </Box>
    );
  }
);

Button.displayName = "Button";
