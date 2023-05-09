import { ReactNode } from "react";
import { UseComboboxPropGetters } from "downshift7";

import { classNames } from "~/utils";
import { sprinkles } from "~/theme";
import { Option } from "./useMultiselectEvents";

import { ArrowDownIcon } from "../Icons";
import { icon } from "./Multiselect.css";

export type AdornmentProps = {
  customAdornment?: ReactNode;
  size?: "small" | "medium" | "large";
  getToggleButtonProps: UseComboboxPropGetters<Option>["getToggleButtonProps"];
  disabled?: boolean;
};

export const Adornment = ({
  customAdornment,
  size,
  getToggleButtonProps,
  disabled,
}: AdornmentProps) => {
  return customAdornment ? (
    <>{customAdornment}</>
  ) : (
    <ArrowDownIcon
      className={classNames(icon, sprinkles({ cursor: "pointer" }))}
      size={size}
      {...getToggleButtonProps({
        disabled,
      })}
    />
  );
};
