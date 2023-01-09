const esbuild = require("./esbuild");

const entryPoints = ["./src/index.tsx"];
const watch = process.argv[2] === "watch";

if (watch) {
  esbuild(entryPoints, watch);
} else {
  esbuild(entryPoints, watch)
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}
