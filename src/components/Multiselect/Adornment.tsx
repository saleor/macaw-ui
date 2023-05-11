import { UseComboboxPropGetters } from "downshift7";

import { classNames } from "~/utils";
import { sprinkles } from "~/theme";
import { Option, RenderEndAdornmentType } from "./useMultiselectEvents";

import { ArrowDownIcon } from "../Icons";
import { toggleIconStyle } from "../BaseSelect";

export type AdornmentProps = {
  size?: "small" | "medium" | "large";
  getToggleButtonProps: UseComboboxPropGetters<Option>["getToggleButtonProps"];
  renderEndAdornment?: RenderEndAdornmentType;
};

export const Adornment = ({
  size,
  getToggleButtonProps,
  renderEndAdornment,
}: AdornmentProps) => {
  return renderEndAdornment ? (
    <>{renderEndAdornment(getToggleButtonProps())}</>
  ) : (
    <ArrowDownIcon
      className={classNames(toggleIconStyle, sprinkles({ cursor: "pointer" }))}
      size={size}
      {...getToggleButtonProps()}
    />
  );
};
