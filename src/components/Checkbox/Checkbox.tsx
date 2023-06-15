import { Indicator, Root as RadixCheckbox } from "@radix-ui/react-checkbox";
import { ReactNode, forwardRef } from "react";
import { classNames } from "~/utils";
import { Box, PropsWithBox } from "../Box";
import { CheckedIcon } from "./CheckedIcon";
import { IndeterminateIcon } from "./IndeterminateIcon";
import { commonCheckbox, defaultCheckbox, errorCheckbox } from "./Checkbox.css";

export type CheckboxProps = PropsWithBox<{
  children?: ReactNode;
  error?: boolean;
  defaultChecked?: boolean;
  checked?: CheckedState;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
}>;

export type CheckedState = boolean | "indeterminate";

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  (
    {
      error = false,
      checked,
      defaultChecked,
      required,
      name,
      value,
      disabled,
      children,
      ...props
    }: CheckboxProps,
    ref
  ) => {
    const iconColor = disabled ? "iconNeutralSubdued" : "iconNeutralContrasted";

    return (
      <Box
        as="label"
        display="flex"
        alignItems="center"
        gap={1.5}
        position="relative"
        cursor={disabled ? "not-allowed" : "pointer"}
        {...props}
      >
        <RadixCheckbox
          ref={ref}
          className={classNames(
            commonCheckbox,
            error ? errorCheckbox : defaultCheckbox
          )}
          checked={checked}
          disabled={disabled}
          defaultChecked={defaultChecked}
          required={required}
          name={name}
          value={value}
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
