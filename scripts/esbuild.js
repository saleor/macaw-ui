const esbuild = require("esbuild");
const { esbuildPluginImport } = require("@linjiajian999/esbuild-plugin-import");
const packageJson = require("../package.json");
const Timer = require("./timer");

const formatEsbDiagnostic = (esbDiagnostic) =>
  `${esbDiagnostic.location.file}:${esbDiagnostic.location.line} ${esbDiagnostic.text}`;

const lodash = esbuildPluginImport([
  {
    libraryName: "lodash",
    libraryDirectory: "",
    camel2DashComponentName: false,
  },
]);
const logger = {
  name: "logger",
  setup: (build) => {
    const timer = new Timer();

    build.onStart((result) => {
      console.log("Building files...");
      timer.reset();
    });
    build.onEnd((result) => {
      result.errors.forEach((esbErr) => console.log(esbErr));
      result.warnings.forEach((esbWarn) => console.log(esbWarn));
      console.log(`Built in ${timer.getTime()}ms`);
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
