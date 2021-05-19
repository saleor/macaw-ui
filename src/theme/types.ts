import type { SaleorThemeColors } from "./createSaleorTheme";
export interface SaleorThemeContext {
  isDark: boolean;
  sendThemeToExtension: () => void;
  toggleTheme: () => void;
}
export type Themes = Record<"light" | "dark", SaleorThemeColors>;
