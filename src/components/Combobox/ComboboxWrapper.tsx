/*
  Do not expose this file, it's for internal purposes only.
*/
import { UseComboboxPropGetters } from "downshift7";
import { ReactNode } from "react";

import { classNames } from "~/utils";

import { sprinkles } from "~/theme";
import { LabelVariants, labelRecipe, spanRecipe } from "../BaseInput";
import { toggleIconStyle } from "../BaseSelect";
import { Box } from "../Box";
import { ArrowDownIcon } from "../Icons";
import { ComboboxOption } from "./types";

type ComboboxWrapperProps = LabelVariants & {
  id?: string;
  label?: ReactNode;
  className?: string;
  error?: boolean;
  children: ReactNode;
  getToggleButtonProps: UseComboboxPropGetters<ComboboxOption>["getToggleButtonProps"];
  getLabelProps: UseComboboxPropGetters<ComboboxOption>["getLabelProps"];
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
      gap={3}
      {...getLabelProps({ htmlFor: id })}
    >
      <Box display="flex" flexDirection="column" width="100%">
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
          onClick: (event) => {
            event.preventDefault();
          },
        })}
      />
    </Box>
  );
};

ComboboxWrapper.displayName = "ComboboxWrapper";
