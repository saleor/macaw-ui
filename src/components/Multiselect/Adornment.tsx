import { ReactNode } from "react";
import { UseComboboxPropGetters } from "downshift7";

import { classNames } from "~/utils";
import { sprinkles } from "~/theme";
import { Option } from "./useMultiselectEvents";

import { ArrowDownIcon } from "../Icons";
import { toggleIconStyle } from "../BaseSelect";

export type AdornmentProps = {
  children?: ReactNode;
  size?: "small" | "medium" | "large";
  getToggleButtonProps: UseComboboxPropGetters<Option>["getToggleButtonProps"];
  disabled?: boolean;
};

export const Adornment = ({
  children,
  size,
  getToggleButtonProps,
  disabled,
}: AdornmentProps) => {
  return children ? (
    <>{children}</>
  ) : (
    <ArrowDownIcon
      className={classNames(toggleIconStyle, sprinkles({ cursor: "pointer" }))}
      size={size}
      {...getToggleButtonProps({
        disabled,
        onClick: (event) => {
          event.preventDefault();
        },
      })}
    />
  );
};
