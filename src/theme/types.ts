import { ThemeType } from "./createSaleorTheme";

export interface SaleorThemeContext {
  themeType: ThemeType;
  ssr: boolean;
  sendThemeToExtension: () => void;
  setTheme: (theme: ThemeType) => void;
}
