import { UseComboboxPropGetters } from "downshift7";

import { classNames } from "~/utils";
import { sprinkles } from "~/theme";

import { ArrowDownIcon } from "../Icons";
import { Option, toggleIconStyle } from "../BaseSelect";
import { RenderEndAdornmentType } from "./useMultiselect";

export type AdornmentProps = {
  size?: "small" | "medium" | "large";
  getToggleButtonProps: UseComboboxPropGetters<Option>["getToggleButtonProps"];
  renderEndAdornment?: RenderEndAdornmentType;
  disabled?: boolean;
};

export const Adornment = ({
  size,
  getToggleButtonProps,
  renderEndAdornment,
  disabled,
}: AdornmentProps) => {
  return renderEndAdornment ? (
    <>{renderEndAdornment(getToggleButtonProps({ disabled }))}</>
  ) : (
    <ArrowDownIcon
      className={classNames(toggleIconStyle, sprinkles({ cursor: "pointer" }))}
      size={size}
      {...getToggleButtonProps({ disabled })}
    />
  );
};
