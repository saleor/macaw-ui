import type { ThemeOptions } from "@mui/material/styles";

import { SaleorThemeColors } from "../types";
import { buttonOverrides } from "./buttons";
import { controlOverrides } from "./controls";
import { inputOverrides } from "./inputs";
import { tableOverrides } from "./tables";

export const overrides = (
  colors: SaleorThemeColors,
  fontFamily: string
): ThemeOptions["components"] => ({
  ...inputOverrides(colors),
  ...tableOverrides(colors, fontFamily),
  ...buttonOverrides(colors),
  ...controlOverrides(colors),
});
