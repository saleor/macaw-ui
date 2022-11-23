import type { ThemeOptions } from "@material-ui/core/styles";

import { SaleorThemeColors, ThemeType } from "../types";
import { buttonOverrides } from "./buttons";
import { controlOverrides } from "./controls";
import { inputOverrides } from "./inputs";
import { tableOverrides } from "./tables";

export const overrides = (
  colors: SaleorThemeColors,
  fontFamily: string,
  mode: ThemeType
): ThemeOptions["overrides"] => ({
  ...inputOverrides(colors, mode),
  ...tableOverrides(colors, fontFamily),
  ...buttonOverrides(colors, mode),
  ...controlOverrides(colors),
});
