import { Card, CardContent } from "@material-ui/core";
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

export const GuideDecorator = (storyFn: StoryFn<React.ReactNode>) => (
  <Card style={{ margin: "auto", width: 600 }}>
    <CardContent>{storyFn()}</CardContent>
  </Card>
);
