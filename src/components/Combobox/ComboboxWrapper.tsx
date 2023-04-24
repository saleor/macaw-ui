/*
  Do not expose this file, it's for internal purposes only.
*/
import { ReactNode } from "react";
import { UseComboboxPropGetters } from "downshift7";

import { classNames } from "~/utils";

import { sprinkles } from "~/theme";
import { Option } from "./useComboboxEvents";
import { Box } from "../Box";
import { ArrowDownIcon } from "../Icons";
import { LabelVariants, labelRecipe, spanRecipe } from "../BaseInput";
import { toggleIconStyle } from "../BaseSelect";

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
      flexWrap="nowrap"
      gap={6}
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

      <ArrowDownIcon
        className={classNames(
          toggleIconStyle,
          sprinkles({ cursor: "pointer" })
        )}
        size={size}
        {...getToggleButtonProps({
          disabled,
        })}
      />
    </Box>
  );
};

ComboboxWrapper.displayName = "ComboboxWrapper";
