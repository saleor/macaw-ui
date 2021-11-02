import type { ThemeOptions } from "@material-ui/core/styles";

import { SaleorThemeColors } from "../types";
import { buttonOverrides } from "./buttons";
import { controlOverrides } from "./controls";
import { inputOverrides } from "./inputs";
import { tableOverrides } from "./tables";

export const overrides = (
  colors: SaleorThemeColors,
  fontFamily: string
): ThemeOptions["overrides"] => ({
  ...inputOverrides(colors),
  ...tableOverrides(colors, fontFamily),
  ...buttonOverrides(colors),
  ...controlOverrides(colors),
});
