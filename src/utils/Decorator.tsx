import { StoryFn } from "@storybook/addons";
import React from "react";

import { ThemeProvider } from "../theme";

export const Decorator = (storyFn: StoryFn<React.ReactNode>) => (
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
