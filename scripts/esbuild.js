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
const timerLabel = "Finished";
const logger = {
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
};

module.exports = (entryPoints, watch) => {
  const options = {
    bundle: true,
    entryPoints,
    outdir: "dist",
    plugins: [logger, lodash],
    external: [
      ...Object.keys(packageJson.peerDependencies),
      ...Object.keys(packageJson.dependencies),
    ],
    loader: {
      ".svg": "text",
    },
    splitting: true,
    sourcemap: true,
    minify: true,
    format: "esm",
    target: "es6",
    watch,
  };

  return esbuild.build(options);
};
