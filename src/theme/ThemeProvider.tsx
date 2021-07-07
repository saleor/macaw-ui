import type { Theme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { merge } from "lodash";
import React, { useEffect } from "react";
import Helmet from "react-helmet";

import { BacklinkProvider } from "../Backlink/context";
import {
  ExtensionMessageType,
  sendMessageToExtension,
  ThemeChangeMessage,
} from "../extensions";
import { localStorageKeys } from "../localStorageKeys";
import { SavebarProvider } from "../Savebar/context";
import useLocalStorage from "../tools/useLocalStorage";
import { Baseline } from "./Baseline";
import { ThemeContext } from "./context";
import { createTheme, Themes, ThemeType } from "./createSaleorTheme";
import { dark, light } from "./themes";

export interface ThemeProviderProps {
  defaultTheme?: ThemeType;
  palettes?: Partial<Themes>;
  overrides?: Partial<Theme>;
}
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = "light",
  palettes = {},
  overrides = {},
}) => {
  const { value: themeTypeName, setValue: setThemeType } = useLocalStorage(
    localStorageKeys.theme,
    defaultTheme
  );
  const themeType = themeTypeName as ThemeType;
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
    ...palettes,
  };
  const theme = merge(createTheme(themes[themeType]), overrides);

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
        <SavebarProvider>
          <BacklinkProvider>
            <Baseline />
            {children}
          </BacklinkProvider>
        </SavebarProvider>
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
