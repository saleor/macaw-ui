const fs = require("fs");
const path = require("path");

const dir = path.resolve(__dirname, "../src/icons");
const iconRegexp = new RegExp(/.*Icon\.tsx/);

const files = fs.readdirSync(dir, {
  withFileTypes: true,
});

const imports = files
  .map((file) => file.name)
  .filter((fileName) => iconRegexp.test(fileName))
  .map((fileName) => fileName.replace(".tsx", ""))
  .reduce((acc, fileName) => acc + `export * from "./${fileName}"\n`, "");

fs.writeFileSync(path.join(dir, "index.ts"), imports);
