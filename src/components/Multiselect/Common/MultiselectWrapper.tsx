/*
  Do not expose this file, it's for internal purposes only.
*/
import { UseComboboxPropGetters } from "downshift";
import { ReactNode, forwardRef } from "react";

import { classNames } from "~/utils";

import { Box } from "../..";
import { LabelVariants, labelRecipe, spanRecipe } from "../../BaseInput";
import { Option } from "../../BaseSelect";

import { Adornment } from "./Adornment";
import { RenderEndAdornmentType, useMultiselect } from "./useMultiselect";
import { multiselectSpanRecipe } from "./Multiselect.css";

type MultiselectWrapperProps = LabelVariants & {
  id?: string;
  label?: ReactNode;
  className?: string;
  error?: boolean;
  children: ReactNode;
  getLabelProps: () => ReturnType<
    UseComboboxPropGetters<Option>["getLabelProps"]
  >;
  getToggleButtonProps: ReturnType<
    typeof useMultiselect
  >["getToggleButtonProps"];
  renderEndAdornment?: RenderEndAdornmentType;
  hasItemsToSelect?: boolean;
};

export const MultiselectWrapper = forwardRef<
  HTMLLabelElement,
  MultiselectWrapperProps
>(
  (
    {
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
    },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        as="label"
        className={classNames(
          labelRecipe({ typed, active, disabled, size, error }),
          className
        )}
        alignItems="center"
        justifyContent="space-between"
        flexWrap="nowrap"
        gap={3}
        data-macaw-ui-component="Multiselect"
        {...getToggleButtonProps({
          disabled,
        })}
        cursor={disabled ? "not-allowed" : "text"}
      >
        <Box display="flex" flexDirection="column" width="100%">
          <Box
            as="span"
            className={classNames(
              multiselectSpanRecipe({ typed }),
              spanRecipe({ typed, size, disabled, error })
            )}
            {...getLabelProps()}
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

        {hasItemsToSelect ? (
          <Adornment
            size={size}
            renderEndAdornment={renderEndAdornment}
            disabled={disabled}
          />
        ) : (
          <Box width={5} height={5} />
        )}
      </Box>
    );
  }
);

MultiselectWrapper.displayName = "MultiselectWrapper";
