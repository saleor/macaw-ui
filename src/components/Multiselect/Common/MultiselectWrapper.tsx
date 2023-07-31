/*
  Do not expose this file, it's for internal purposes only.
*/
import { UseComboboxPropGetters } from "downshift7";
import { ReactNode } from "react";

import { classNames } from "~/utils";

import { Box } from "../..";
import { LabelVariants, labelRecipe, spanRecipe } from "../../BaseInput";
import { Option } from "../../BaseSelect";

import { Adornment } from "./Adornment";
import { RenderEndAdornmentType } from "./useMultiselect";

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
      data-macaw-ui-component="Multiselect"
      {...getLabelProps({ htmlFor: id })}
      cursor={disabled ? "not-allowed" : "text"}
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
          disabled={disabled}
        />
      )}
    </Box>
  );
};

MultiselectWrapper.displayName = "MultiselectWrapper";
