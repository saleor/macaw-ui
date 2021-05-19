import { ThemeType } from "./createSaleorTheme";

export interface SaleorThemeContext {
  themeType: ThemeType;
  sendThemeToExtension: () => void;
  setTheme: (theme: ThemeType) => void;
}
