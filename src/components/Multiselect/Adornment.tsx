import { UseComboboxPropGetters } from "downshift7";

import { classNames } from "~/utils";
import { sprinkles } from "~/theme";

import { ArrowDownIcon } from "../Icons";
import { toggleIconStyle } from "../BaseSelect";
import { MultiselectOption, RenderEndAdornmentType } from "./types";

export type AdornmentProps = {
  size?: "small" | "medium" | "large";
  getToggleButtonProps: UseComboboxPropGetters<MultiselectOption>["getToggleButtonProps"];
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
