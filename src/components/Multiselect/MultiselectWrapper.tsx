/*
  Do not expose this file, it's for internal purposes only.
*/
import { UseComboboxPropGetters } from "downshift7";
import { ReactNode } from "react";

import { classNames } from "~/utils";

import { Adornment } from "./Adornment";
import { Option, RenderEndAdornmentType } from "./useMultiselectEvents";
import { LabelVariants, labelRecipe, spanRecipe } from "../BaseInput";
import { Box } from "../Box";

type MultiselectWrapperProps = LabelVariants & {
  id?: string;
  label?: ReactNode;
  className?: string;
  error?: boolean;
  children: ReactNode;
  getLabelProps: UseComboboxPropGetters<Option>["getLabelProps"];
  getToggleButtonProps: UseComboboxPropGetters<Option>["getToggleButtonProps"];
  renderEndAdornment?: RenderEndAdornmentType;
  hasItemsToSelect?: boolean;
};

export const MultiselectWrapper = ({
  id,
  label,
  className,
  error,
  children,
  getLabelProps,
  typed,
  active,
  disabled,
  size,
  getToggleButtonProps,
  renderEndAdornment,
  hasItemsToSelect,
}: MultiselectWrapperProps) => {
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
        <Box
          display="flex"
          flexDirection="row"
          gap={1}
          alignItems="center"
          flexWrap="wrap"
        >
          {children}
        </Box>
      </Box>

      {hasItemsToSelect && (
        <Adornment
          size={size}
          getToggleButtonProps={getToggleButtonProps}
          renderEndAdornment={renderEndAdornment}
        />
      )}
    </Box>
  );
};

MultiselectWrapper.displayName = "MultiselectWrapper";
