/*
  Do not expose this file, it's for internal purposes only.
*/
import { ReactNode } from "react";
import { UseComboboxPropGetters } from "downshift";

import { classNames } from "~/utils";

import { Option } from "./useComboboxEvents";
import { Box } from "../Box";
import { ArrowDownIcon } from "../Icons";
import { LabelVariants, labelRecipe, spanRecipe } from "../BaseInput";
import { icon } from "./Combobox.css";

type ComboboxWrapperProps = LabelVariants & {
  id?: string;
  label?: ReactNode;
  className?: string;
  error?: boolean;
  children: ReactNode;
  getToggleButtonProps: UseComboboxPropGetters<Option>["getToggleButtonProps"];
  getLabelProps: UseComboboxPropGetters<Option>["getLabelProps"];
};

export const ComboboxWrapper = ({
  id,
  label,
  className,
  error,
  children,
  getToggleButtonProps,
  getLabelProps,
  typed,
  active,
  disabled,
  size,
}: ComboboxWrapperProps) => {
  return (
    <Box
      as="label"
      className={classNames(
        labelRecipe({ typed, active, disabled, size, error }),
        className
      )}
      alignItems="center"
      justifyContent="space-between"
      disabled={disabled}
      {...getLabelProps({ htmlFor: id })}
    >
      <Box display="flex" flexDirection="column">
        <Box
          as="span"
          className={classNames(spanRecipe({ typed, size, disabled, error }))}
        >
          {label}
        </Box>
        {children}
      </Box>

      <ArrowDownIcon className={icon} size={size} {...getToggleButtonProps()} />
    </Box>
  );
};

ComboboxWrapper.displayName = "InputWrapper";
