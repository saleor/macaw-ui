import React from "react";

import { ThemeProvider } from "../src/theme";

export const Decorator = (storyFn) => (
  <ThemeProvider defaultTheme="light">
    <div
      style={{
        padding: 24,
      }}
    >
      {storyFn()}
    </div>
  </ThemeProvider>
);
