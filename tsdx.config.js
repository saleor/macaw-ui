const svg = require("rollup-plugin-svg");

module.exports = {
  rollup(config) {
    config.plugins.push(svg());
    return config;
  },
};
