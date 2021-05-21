import React from "react";

import { ThemeProvider } from "../src/theme";

export const Decorator = (storyFn) => (
  <ThemeProvider>
    <div
      style={{
        padding: 24,
      }}
    >
      {storyFn()}
    </div>
  </ThemeProvider>
);
