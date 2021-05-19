import { MuiThemeProvider } from "@material-ui/core";
import React, { useEffect } from "react";
import Helmet from "react-helmet";

import {
  ExtensionMessageType,
  sendMessageToExtension,
  ThemeChangeMessage,
} from "../extensions";
import useLocalStorage from "../utils/useLocalStorage";
import { Baseline } from "./Baseline";
import { ThemeContext } from "./context";
import { createTheme, Themes, ThemeType } from "./createSaleorTheme";
import { dark, light } from "./themes";

export interface ThemeProviderProps {
  defaultTheme?: ThemeType;
  overrides?: Partial<Themes>;
}
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = "light",
  overrides = {},
}) => {
  const [themeType, setThemeType] = useLocalStorage(
    "macaw-ui-theme",
    defaultTheme
  );
  const sendThemeToExtension = () =>
    sendMessageToExtension<ThemeChangeMessage>(
      {
        theme: themeType,
        type: ExtensionMessageType.THEME,
      },
      "*"
    );

  useEffect(() => {
    sendThemeToExtension();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themeType]);

  const themes = {
    light,
    dark,
    ...overrides,
  };
  const theme = createTheme(themes[themeType]);

  return (
    <ThemeContext.Provider
      value={{
        themeType,
        sendThemeToExtension,
        setTheme: setThemeType,
      }}
    >
      <Helmet>
        <meta name="theme-color" content={theme.palette.background.default} />
      </Helmet>
      <MuiThemeProvider theme={theme}>
        <Baseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
