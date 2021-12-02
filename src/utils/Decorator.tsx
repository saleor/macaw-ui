import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import React from "react";

import { ThemeProvider } from "../theme";

export const Decorator = (storyFn: any) => (
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

export const GuideDecorator = (storyFn: any) => (
  <Card style={{ margin: "auto", width: 700 }}>
    <CardContent>{storyFn()}</CardContent>
  </Card>
);
