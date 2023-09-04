/*
  Do not expose this file, it's for internal purposes only.
*/
import { UseComboboxPropGetters } from "downshift7";
import { ReactNode, forwardRef } from "react";

import { classNames } from "~/utils";

import { sprinkles } from "~/theme";
import { LabelVariants, labelRecipe, spanRecipe } from "../BaseInput";
import { Option, toggleIconStyle } from "../BaseSelect";
import { Box } from "../Box";
import { ArrowDownIcon } from "../Icons";

type SelectWrapperProps = LabelVariants & {
  id?: string;
  label?: ReactNode;
  className?: string;
  error?: boolean;
  children: ReactNode;
  getToggleButtonProps: UseComboboxPropGetters<Option>["getToggleButtonProps"];
  getLabelProps: UseComboboxPropGetters<Option>["getLabelProps"];
};

export const SelectWrapper = forwardRef<HTMLLabelElement, SelectWrapperProps>(
  (
    {
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
    },
    ref
  ) => {
    return (
      <Box ref={ref}>
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
          {...getToggleButtonProps()}
          data-macaw-ui-component="Select"
          cursor={disabled ? "not-allowed" : "pointer"}
        >
          <Box display="flex" flexDirection="column" width="100%">
            <Box
              as="span"
              className={classNames(
                spanRecipe({ typed, size, disabled, error })
              )}
              {...getLabelProps({ htmlFor: id })}
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
          />
        </Box>
      </Box>
    );
  }
);

SelectWrapper.displayName = "SelectWrapper";
