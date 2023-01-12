import { defaultLightTheme } from "./defaultLight.css";

import "./reset.css";

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <main className={defaultLightTheme} id="macaw-ui-root">
      {children}
    </main>
  );
};
