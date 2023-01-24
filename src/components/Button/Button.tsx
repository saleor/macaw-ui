import { ReactNode } from "react";

import { classNames } from "~/utils";

import { Box } from "../Box";
import { button, ButtonVariants } from "./Button.css";

export type ButtonProps = ButtonVariants & {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
};

export const Button = ({
  children,
  size,
  variant,
  icon,
  disabled,
  className,
}: ButtonProps) => {
  return (
    <Box
      as="button"
      className={classNames(button({ variant, size, icon }), className)}
      disabled={disabled}
    >
      {children}
    </Box>
  );
};
