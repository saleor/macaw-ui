import { defaultLightTheme } from "./defaultLight.css";

type ThemeProviderProps = {
  children?: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <main className={defaultLightTheme}>{children}</main>;
};
