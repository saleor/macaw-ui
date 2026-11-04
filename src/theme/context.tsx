"use client";

import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { setElementVars } from "@vanilla-extract/dynamic";

import { getCSSVariables } from "./helpers";
import { DefaultTheme, themes, ThemeTokensValues } from "./themes";

import { vars } from "./contract.css";

// useLayoutEffect warns during server rendering on React 18; the <style> below covers the server output
const useClientLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

const themeCss = (theme: DefaultTheme) =>
  `:root{${Object.entries(getCSSVariables(theme))
    .map(([name, value]) => `${name}:${value}`)
    .join(";")}}`;

const ThemeContext = createContext<{
  theme: DefaultTheme;
  setTheme: (to: DefaultTheme) => void;
  themeValues: ThemeTokensValues;
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

  // Also set on <html> after hydration: overrides theme variables an app put there itself (e.g. with getCSSVariables)
  useClientLayoutEffect(() => {
    setElementVars(document.documentElement, vars, themes[theme]);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, themeValues: themes[theme] }}
    >
      {/* Part of the rendered output, so server-rendered pages are themed before hydration. Not a hoisted
          <style precedence>: React never removes those, so switching themes back would keep the wrong one. */}
      <style
        data-macaw-ui-theme={theme}
        dangerouslySetInnerHTML={{ __html: themeCss(theme) }}
      />
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a MacawUI ThemeContext");
  }
  return context;
};
