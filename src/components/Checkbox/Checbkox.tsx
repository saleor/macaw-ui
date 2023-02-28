import {
  Root as RadixCheckbox,
  CheckboxProps as RadixCheckboxProps,
  Indicator,
} from "@radix-ui/react-checkbox";
import { ReactNode } from "react";
import { classNames } from "~/utils";
import { CheckedIcon } from "./CheckedIcon";
import { IndeterminateIcon } from "./IndeterminateIcon";
import { Box } from "../Box";
import { checkbox, commonCheckbox } from "./Checkbox.css";

export type CheckboxProps = RadixCheckboxProps & {
  error?: boolean;
  children?: ReactNode;
};

export type CheckedState = boolean | "indeterminate";

export const Checkbox = ({
  error = false,
  checked,
  disabled,
  children,
  ...props
}: CheckboxProps) => {
  const iconColor = disabled ? "iconNeutralSubdued" : "iconNeutralContrasted";

  return (
    <Box display="flex" alignItems="center" gap={4}>
      <RadixCheckbox
        className={classNames(commonCheckbox, checkbox)}
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
};
