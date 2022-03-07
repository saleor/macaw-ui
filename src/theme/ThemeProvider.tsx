import type { Theme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { merge } from "lodash";
import React, { useEffect } from "react";

import { ActionBarProvider } from "../ActionBar/context";
import { BacklinkProvider } from "../Backlink/context";
import {
  ExtensionMessageType,
  sendMessageToExtension,
  ThemeChangeMessage,
} from "../extensions";
import { localStorageKeys } from "../localStorageKeys";
import useLocalStorage from "../tools/useLocalStorage";
import { Baseline } from "./Baseline";
import { ThemeContext } from "./context";
import { createTheme, Themes, ThemeType } from "./createSaleorTheme";
import { dark, light } from "./themes";
import { changeColorMeta } from "./utils";

export interface ThemeProviderProps {
  defaultTheme?: ThemeType;
  /**
   * Passing an object here will result in losing visual consistency with
   * Saleor's Dashboard. Use with caution.
   */
  palettes?: Partial<Themes>;
  /**
   * Passing an object here will result in losing visual consistency with
   * Saleor's Dashboard. Use with caution.
   */
  overrides?: Partial<Theme>;
  /**
   * Enables server side rendering.
   */
  ssr?: boolean;
}
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = "light",
  palettes = {},
  overrides = {},
  ssr = false,
}) => {
  const { value: themeTypeName, setValue: setThemeType } = useLocalStorage(
    localStorageKeys.theme,
    defaultTheme
  );
  const themeType = themeTypeName as ThemeType;
  const themes = {
    light,
    dark,
    ...palettes,
  };
  const theme = merge(createTheme(themes[themeType]), overrides);
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
    changeColorMeta(theme.palette.background.default);
  }, [themeType]);

  return (
    <ThemeContext.Provider
      value={{
        themeType,
        ssr,
        sendThemeToExtension,
        setTheme: setThemeType,
      }}
    >
      <MuiThemeProvider theme={theme}>
        <ActionBarProvider>
          <BacklinkProvider>
            <Baseline />
            {children}
          </BacklinkProvider>
        </ActionBarProvider>
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
