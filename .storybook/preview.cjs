import React from "react";

import { ThemeProvider } from "../src/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
    return React.createElement(ThemeProvider, {
      children: React.createElement(Story),
    });
  },
];
