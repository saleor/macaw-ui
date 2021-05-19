import React from 'react';

import { SaleorThemeContext } from './types';

export const ThemeContext = React.createContext<SaleorThemeContext>({
  isDark: false,
  sendThemeToExtension: () => undefined,
  toggleTheme: () => undefined,
});
