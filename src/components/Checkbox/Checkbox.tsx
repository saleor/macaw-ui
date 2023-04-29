import {
  Root as RadixCheckbox,
  CheckboxProps as RadixCheckboxProps,
  Indicator,
} from "@radix-ui/react-checkbox";
import { forwardRef, ReactNode } from "react";
import { classNames } from "~/utils";
import { CheckedIcon } from "./CheckedIcon";
import { IndeterminateIcon } from "./IndeterminateIcon";
import { Box } from "../Box";
import { defaultCheckbox, errorCheckbox, commonCheckbox } from "./Checkbox.css";

export type CheckboxProps = RadixCheckboxProps & {
  error?: boolean;
  children?: ReactNode;
};

export type CheckedState = boolean | "indeterminate";

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  (
    { error = false, checked, disabled, children, ...props }: CheckboxProps,
    ref
  ) => {
    const iconColor = disabled ? "iconNeutralSubdued" : "iconNeutralContrasted";

    return (
      <Box
        as="label"
        display="flex"
        alignItems="center"
        gap={4}
        position="relative"
        cursor={disabled ? "not-allowed" : "pointer"}
      >
        <RadixCheckbox
          ref={ref}
          className={classNames(
            commonCheckbox,
            error ? errorCheckbox : defaultCheckbox
          )}
          checked={checked}
          disabled={disabled}
          {...props}
        >
          <Indicator asChild>
            {checked === "indeterminate" ? (
              <IndeterminateIcon color={iconColor} />
            ) : (
              <CheckedIcon color={iconColor} />
            )}
          </Indicator>
        </RadixCheckbox>
        {children}
      </Box>
    );
  }
);

Checkbox.displayName = "Checkbox";
