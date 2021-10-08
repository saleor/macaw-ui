const { DiagnosticCategory } = require("typescript");
const ts = require("typescript");
const Timer = require("./timer");

const formatHost = {
  getCanonicalFileName: (path) => path,
  getCurrentDirectory: ts.sys.getCurrentDirectory,
  getNewLine: () => ts.sys.newLine,
};

function getTsConfigPath(production) {
  const configPath = ts.findConfigFile(
    "./",
    ts.sys.fileExists,
    production ? "tsconfig.prod.json" : "tsconfig.json"
  );
  if (!configPath) {
    throw new Error("Could not find a valid 'tsconfig.json'.");
  }

  return configPath;
}

function build(entryPoints, log, watch) {
  const reportDiagnostic = (diagnostic) => {
    const { code } = diagnostic;
    const hidden = ["6032", "6031"];
    const warns = ["6193"];

    if (!hidden.includes(code)) {
      log(
        ts.formatDiagnostic(diagnostic, formatHost),
        diagnostic.category === DiagnosticCategory.Error
          ? "err"
          : warns.includes(code)
          ? "warn"
          : "info"
      );
    }
  };

  const configPath = getTsConfigPath(!watch);
  const createProgram = ts.createSemanticDiagnosticsBuilderProgram;
  const timer = new Timer();

  if (watch) {
    const host = ts.createWatchCompilerHost(
      configPath,
      { incremental: true, tsBuildInfoFile: "./.tsbuildinfo" },
      ts.sys,
      createProgram,
      reportDiagnostic,
      () => undefined
    );

    const origCreateProgram = host.createProgram;
    host.createProgram = (rootNames, options, host, oldProgram) => {
      log("Building types...");
      timer.reset();
      return origCreateProgram(rootNames, options, host, oldProgram);
    };

    host.afterProgramCreate = (program) => {
      const emitResult = program.emit();
      emitResult.diagnostics.forEach(reportDiagnostic);
      log(`Built in ${timer.getTime()}ms`);

      ts.getPreEmitDiagnostics(program).forEach(reportDiagnostic);

      log(`Checked in ${timer.getTime()}ms`);
    };

    ts.createWatchProgram(host);
  } else {
    return new Promise((resolve, reject) => {
      log("Building types...");
      timer.reset();
      const configFile = ts.readConfigFile(configPath, ts.sys.readFile);
      const { options } = ts.parseJsonConfigFileContent(
        configFile.config,
        ts.sys,
        "./"
      );

      const program = ts.createProgram(entryPoints, {
        ...options,
        noEmitOnError: true,
      });

      const emitResult = program.emit();

      emitResult.diagnostics.forEach(reportDiagnostic);

      if (!emitResult.emitSkipped) {
        log(`Built in ${timer.getTime()}ms`);
        resolve();
      } else {
        log(`Failed in ${timer.getTime()}ms`);
        reject();
      }
    });
  }
}

module.exports = build;
