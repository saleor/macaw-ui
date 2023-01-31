import { forwardRef, ReactNode } from "react";

import { classNames } from "~/utils";

import { Box } from "../Box";
import { button, ButtonVariants } from "./Button.css";

export type ButtonProps = ButtonVariants & {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      size,
      variant,
      fixedWidth = false,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <Box
        as="button"
        className={classNames(button({ variant, size, fixedWidth }), className)}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

Button.displayName = "Button";
