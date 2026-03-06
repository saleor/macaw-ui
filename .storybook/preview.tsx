import {
  DocsContainer,
  DocsContainerProps,
} from "@storybook/addon-docs/blocks";
import React, { PropsWithChildren } from "react";
import { Box, ThemeProvider, useTheme } from "../src";
import "./styles.css";

const MacawDocsContainer = ({
  children,
  ...props
}: PropsWithChildren<DocsContainerProps>) => {
  return (
    <ThemeProvider>
      <DocsContainer {...props}>{children}</DocsContainer>
    </ThemeProvider>
  );
};

export const parameters = {
  controls: {
    matchers: {
      date: /Date$/,
    },
  },
  docs: {
    container: MacawDocsContainer,
  },
  options: {
    storySort: (a, b) => {
      const parsedA = a.importPath.match(/([0-9]+)/);
      const parsedB = b.importPath.match(/([0-9]+)/);
      const orderA = parsedA ? parsedA[0] : "0";
      const orderB = parsedB ? parsedB[0] : "0";

      return orderA === orderB
        ? 0
        : orderB.localeCompare(orderA, undefined, { numeric: true });
    },
  },
};

export const tags = ["autodocs"];

export const globalTypes = {
  theme: {
    description: "Global theme for components",
    toolbar: {
      title: "Theme",
      icon: "mirror",
      items: ["defaultLight", "defaultDark"],
      dynamicTitle: true,
    },
  },
};

export const initialGlobals = {
  theme: "defaultLight",
};

const ThemeSwitcher = ({ children, theme }) => {
  const { setTheme } = useTheme();
  React.useEffect(() => {
    setTheme(theme);
  }, [theme]);

  return (
    <Box display="flex" justifyContent="center">
      {children}
    </Box>
  );
};

export const decorators = [
  (Story, context) => (
    <ThemeProvider defaultTheme={context.globals.theme}>
      <ThemeSwitcher theme={context.globals.theme}>
        <Story />
      </ThemeSwitcher>
    </ThemeProvider>
  ),
];
