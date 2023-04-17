import React from "react";
import { DocsContainer, DocsContainerProps } from "@storybook/blocks";
import { Box, ThemeProvider, useTheme } from "../src";
import { PropsWithChildren } from "react";

type MacawDocsContainerProps = {
  [K in keyof DocsContainerProps]: K extends "context"
    ? DocsContainerProps[K] & { store: Record<string, any> }
    : DocsContainerProps[K];
};

const MacawDocsContainer = ({
  children,
  ...props
}: PropsWithChildren<MacawDocsContainerProps>) => {
  return (
    <ThemeProvider defaultTheme={props.context.store.globals.globals.theme}>
      <ThemeSwitcher theme={props.context.store.globals.globals.theme}>
        <DocsContainer {...props}>{children}</DocsContainer>
      </ThemeSwitcher>
    </ThemeProvider>
  );
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      date: /Date$/,
    },
  },
  docs: {
    autodocs: "tag",
    container: MacawDocsContainer,
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

const ThemeSwitcher = ({ children, theme }) => {
  const { setTheme } = useTheme();
  React.useEffect(() => {
    setTheme(theme);
  }, [theme]);

  return (
    <Box display="flex" justifyContent="center" __backgroundColor="white">
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
