import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { mergeConfig } from "vite";
import type { StorybookConfig } from "@storybook/react-vite";
import type { Plugin } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Vite plugin to resolve file:// URLs that Storybook's MDX plugin
 * generates via import.meta.resolve() in pnpm environments.
 */
function resolveFileUrls(): Plugin {
  return {
    name: "resolve-file-urls",
    resolveId(source) {
      if (source.startsWith("file://")) {
        return fileURLToPath(source);
      }
    },
  };
}

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-docs"],
  staticDirs: [
    {
      from: "../public",
      to: "/assets",
    },
    "./public",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {
      strictMode: true,
    },
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          "~": resolve(__dirname, "..", "src"),
        },
      },
      plugins: [vanillaExtractPlugin(), resolveFileUrls()],
      build: {
        ...config.build,
        sourcemap: false,
      },
    });
  },
};

export default config;
