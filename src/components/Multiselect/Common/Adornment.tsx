import { sprinkles } from "~/theme";
import { classNames } from "~/utils";

import { toggleIconStyle } from "../../BaseSelect";
import { ArrowDownIcon } from "../../Icons";
import { RenderEndAdornmentType } from "./useMultiselect";

export type AdornmentProps = {
  size?: "small" | "medium" | "large";
  renderEndAdornment?: RenderEndAdornmentType;
  disabled?: boolean;
};

export const Adornment = ({ size, renderEndAdornment }: AdornmentProps) => {
  return renderEndAdornment ? (
    <>{renderEndAdornment()}</>
  ) : (
    <ArrowDownIcon
      className={classNames(toggleIconStyle, sprinkles({ cursor: "pointer" }))}
      size={size}
    />
  );
};
