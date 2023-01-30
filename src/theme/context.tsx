import { createContext, useContext, useState } from "react";
import { setElementVars } from "@vanilla-extract/dynamic";

import { DefaultTheme, themes } from "./themes";

import { vars } from "./contract.css";

const ThemeContext = createContext<{
  theme: DefaultTheme;
  setTheme: (to: DefaultTheme) => void;
} | null>(null);

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme: DefaultTheme;
};

export const ThemeContextProvider = ({
  children,
  defaultTheme,
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState(defaultTheme);

  setElementVars(document.documentElement, vars, themes[theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a MacawUI ThemeContext");
  }
  return context;
};
