/*
  Do not expose this file, it's for internal purposes only.
*/
import { ReactNode } from "react";
import { UseComboboxPropGetters } from "downshift7";

import { classNames } from "~/utils";

import { sprinkles } from "~/theme";
import { Option } from "./useSelectEvents";
import { Box } from "../Box";
import { ArrowDownIcon } from "../Icons";
import { LabelVariants, labelRecipe, spanRecipe } from "../BaseInput";
import { icon } from "./Select.css";

type SelectWrapperProps = LabelVariants & {
  id?: string;
  label?: ReactNode;
  className?: string;
  error?: boolean;
  children: ReactNode;
  getToggleButtonProps: UseComboboxPropGetters<Option>["getToggleButtonProps"];
  getLabelProps: UseComboboxPropGetters<Option>["getLabelProps"];
};

export const SelectWrapper = ({
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
}: SelectWrapperProps) => {
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
      flexWrap="nowrap"
      gap={6}
      {...getToggleButtonProps({ disabled })}
    >
      <Box display="flex" flexDirection="column">
        <Box
          as="span"
          className={classNames(spanRecipe({ typed, size, disabled, error }))}
          {...getLabelProps({ htmlFor: id })}
        >
          {label}
        </Box>
        {children}
      </Box>

      <ArrowDownIcon
        className={classNames(icon, sprinkles({ cursor: "pointer" }))}
        size={size}
        // {...getToggleButtonProps({
        //   disabled,
        // })}
      />
    </Box>
  );
};
