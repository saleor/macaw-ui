import type { Overrides } from "@material-ui/core/styles/overrides";

import { SaleorThemeColors } from "../types";
import { buttonOverrides } from "./buttons";
import { controlOverrides } from "./controls";
import { inputOverrides } from "./inputs";
import { tableOverrides } from "./tables";

export const overrides = (
  colors: SaleorThemeColors,
  fontFamily: string
): Overrides => ({
  ...inputOverrides(colors),
  ...tableOverrides(colors, fontFamily),
  ...buttonOverrides(colors),
  ...controlOverrides(colors),
});
