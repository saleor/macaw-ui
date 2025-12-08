import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { ArrowDownIcon } from "lucide-react";
import { sprinkles } from "~/theme";
import { classNames } from "~/utils";
import { Box, PropsWithBox } from "../Box";
import { dropdownButton, DropdownButtonVariants } from "./DropdownButton.css";

export type DropdownButtonProps = PropsWithBox<
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color" | "nonce"> & {
    children?: ReactNode;
    disabled?: boolean;
    className?: string;
  }
> &
  DropdownButtonVariants;

export const DropdownButton = forwardRef<
  HTMLButtonElement,
  DropdownButtonProps
>(
  (
    { children, size, variant = "contained", disabled, className, ...props },
    ref
  ) => {
    return (
      <Box
        as="button"
        className={classNames(
          dropdownButton({
            size,
            variant,
          }),
          className
        )}
        disabled={disabled}
        ref={ref}
        data-macaw-ui-component="DropdownButton"
        {...props}
      >
        {children}
        <ArrowDownIcon
          size="small"
          className={sprinkles({
            color: "default2",
          })}
        />
      </Box>
    );
  }
);

DropdownButton.displayName = "DropdownButton";
