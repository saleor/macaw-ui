/*
  Do not expose this file, it's for internal purposes only.
*/
import { ReactNode } from "react";
import { UseComboboxPropGetters } from "downshift7";

import { classNames } from "~/utils";
import { sprinkles } from "~/theme";

import { Option } from "./useMultiselectEvents";
import { Box } from "../Box";
import { LabelVariants, labelRecipe, spanRecipe } from "../BaseInput";
import { ArrowDownIcon } from "../Icons";
import { icon } from "../Combobox/Combobox.css";

type MultiselectWrapperProps = LabelVariants & {
  id?: string;
  label?: ReactNode;
  className?: string;
  error?: boolean;
  children: ReactNode;
  getLabelProps: UseComboboxPropGetters<Option>["getLabelProps"];
  getToggleButtonProps?: any;
  endAdornment?: ReactNode;
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
  endAdornment,
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
      gap={6}
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
          gap={3}
          alignItems="center"
          flexWrap="wrap"
        >
          {children}
        </Box>
      </Box>

      {endAdornment ? (
        endAdornment
      ) : (
        <ArrowDownIcon
          className={classNames(icon, sprinkles({ cursor: "pointer" }))}
          size={size}
          {...getToggleButtonProps({
            disabled,
          })}
        />
      )}
    </Box>
  );
};

MultiselectWrapper.displayName = "MultiselectWrapper";
