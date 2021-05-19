import React from "react";

import { ThemeProvider } from "../src/Theme";

export const Decorator = (storyFn) => (
  <ThemeProvider isDefaultDark={false}>
    <div
      style={{
        padding: 24,
      }}
    >
      {storyFn()}
    </div>
  </ThemeProvider>
);
