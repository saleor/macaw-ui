import { mergeConfig } from "vite";
import { resolve } from "path";

export default {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  staticDirs: [
    {
      from: "../public",
      to: "/assets",
    },
    "./public",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          "~": resolve(__dirname, "..", "src"),
        },
      },
      plugins: [require("@vanilla-extract/vite-plugin").vanillaExtractPlugin()],
      build: {
        ...config.build,
        sourcemap: false,
      },
    });
  },
};
