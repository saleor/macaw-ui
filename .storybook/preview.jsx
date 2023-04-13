import React from "react";

import { Box, ThemeProvider, useTheme } from "../src";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "defaultLight",
    toolbar: {
      icon: "mirror",
      items: ["defaultLight", "defaultDark"],
      dynamicTitle: true,
    },
  },
};

const ThemeSwitcher = ({ children, context }) => {
  const { setTheme } = useTheme();
  React.useEffect(() => {
    setTheme(context.globals.theme);
  }, [context.globals.theme]);

  return (
    <Box width="100vw" height="100vh" display="flex" justifyContent="center">
      {children}
    </Box>
  );
};

export const decorators = [
  (Story, context) => (
    <ThemeProvider defaultTheme={context.globals.theme}>
      <ThemeSwitcher context={context}>
        <Story />
      </ThemeSwitcher>
    </ThemeProvider>
  ),
];
