const esbuild = require("esbuild");
const { esbuildPluginImport } = require("@linjiajian999/esbuild-plugin-import");
const packageJson = require("../package.json");

const formatEsbDiagnostic = (esbDiagnostic) =>
  `${esbDiagnostic.location.file}:${esbDiagnostic.location.line} ${esbDiagnostic.text}`;

const lodash = esbuildPluginImport([
  {
    libraryName: "lodash",
    libraryDirectory: "",
    camel2DashComponentName: false,
  },
]);
const logger = (timerLabel) => ({
  name: "logger",
  setup: (build) => {
    build.onStart((result) => {
      console.log("Building files...");
      console.time(timerLabel);
    });
    build.onEnd((result) => {
      console.timeEnd(timerLabel);
    });
  },
});

module.exports = (entryPoints, watch) => {
  const commonOptions = {
    entryPoints,
    loader: {
      ".svg": "text",
    },
    bundle: true,
    external: [
      ...Object.keys(packageJson.peerDependencies),
      ...Object.keys(packageJson.dependencies),
    ],
    sourcemap: true,
    minify: true,
    target: "es6",
    watch,
  };

  const optionMatrix = [
    {
      ...commonOptions,
      outfile: "dist/cjs/index.js",
      plugins: [logger("Finished cjs"), lodash],
      platform: "node",
    },
    {
      ...commonOptions,
      outdir: "dist/esm",
      splitting: true,
      format: "esm",
      plugins: [logger("Finished esm"), lodash],
    },
  ];

  return Promise.all(optionMatrix.map((options) => esbuild.build(options)));
};
