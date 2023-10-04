import { UseComboboxPropGetters } from "downshift";

import { sprinkles } from "~/theme";
import { classNames } from "~/utils";

import { Option, toggleIconStyle } from "../../BaseSelect";
import { ArrowDownIcon } from "../../Icons";
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
