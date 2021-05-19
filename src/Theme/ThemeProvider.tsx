import { MuiThemeProvider } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import Helmet from 'react-helmet';

import { createTheme } from '../createSaleorTheme';
import {
  ExtensionMessageType,
  sendMessageToExtension,
  ThemeChangeMessage,
} from '../extensions';
import { Baseline } from './Baseline';
import { ThemeContext } from './context';
import { dark, light } from './themes';
import { Themes } from './types';

export interface ThemeProviderProps {
  isDefaultDark?: boolean;
  overrides?: Partial<Themes>;
}
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  isDefaultDark,
  overrides = {},
}) => {
  const [isDark, setDark] = React.useState(!!isDefaultDark);
  const sendThemeToExtension = () =>
    sendMessageToExtension<ThemeChangeMessage>(
      {
        theme: isDark ? 'dark' : 'light',
        type: ExtensionMessageType.THEME,
      },
      '*'
    );

  const toggleTheme = () => {
    setDark(!isDark);
    localStorage.setItem('theme', (!isDark).toString());
  };

  useEffect(() => {
    sendThemeToExtension();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDark]);

  const themes = {
    light,
    dark,
    ...overrides,
  };
  const theme = createTheme(isDark ? themes.dark : themes.light);

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        sendThemeToExtension,
        toggleTheme,
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
