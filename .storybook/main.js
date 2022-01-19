module.exports = {
  stories: ["../stories/**/*.stories.tsx", "../src/**/*.stories.tsx"],
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  addons: ["storybook-dark-mode"],
};
