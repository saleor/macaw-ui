const chalk = require("chalk");
const tsc = require("./tsc");
const esbuild = require("./esbuild");

const log = console.log;
const entryPoints = ["./src/index.tsx"];

const printLog = (scope, msg, lvl) => {
  let color;
  switch (lvl) {
    case "err":
      color = chalk.red;
      break;
    case "warn":
      color = chalk.yellow;
      break;
    default:
      color = chalk.blue;
  }

  log(`${color(scope)} ${msg}`);
};

const esbLog = (msg, lvl) => printLog("ESB", msg, lvl);
const tscLog = (msg, lvl) => printLog("TSC", msg, lvl);

const watch = process.argv[2] === "watch";

if (watch) {
  esbuild(entryPoints, esbLog, watch);
  tsc(entryPoints, tscLog, watch);
} else {
  esbuild(entryPoints, esbLog, watch)
    .then(() => {
      return tsc(entryPoints, tscLog, watch);
    })
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}
