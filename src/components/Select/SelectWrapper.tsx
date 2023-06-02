/*
  Do not expose this file, it's for internal purposes only.
*/
import { UseComboboxPropGetters } from "downshift7";
import { ReactNode } from "react";

import { classNames } from "~/utils";
import { sprinkles } from "~/theme";

import { LabelVariants, labelRecipe, spanRecipe } from "../BaseInput";
import { toggleIconStyle } from "../BaseSelect";
import { Box, ArrowDownIcon, Spinner } from "..";
import { Option } from "./useSelectEvents";

type SelectWrapperProps = LabelVariants & {
  id?: string;
  label?: ReactNode;
  className?: string;
  error?: boolean;
  children: ReactNode;
  getToggleButtonProps: UseComboboxPropGetters<Option>["getToggleButtonProps"];
  getLabelProps: UseComboboxPropGetters<Option>["getLabelProps"];
  loading?: boolean;
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
  loading,
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
      gap={3}
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

      {loading ? (
        <Spinner size={size} />
      ) : (
        <ArrowDownIcon
          className={classNames(
            toggleIconStyle,
            sprinkles({ cursor: "pointer" })
          )}
          size={size}
        />
      )}
    </Box>
  );
};
