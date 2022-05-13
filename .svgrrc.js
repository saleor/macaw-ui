const path = require("path");

const template = (variables, { tpl }) => {
  const componentName = variables.componentName.replace("Svg", "");
  return tpl`
import { createSvgIcon } from "@material-ui/core/utils";
${variables.imports};

${variables.interfaces};

export const ${componentName} = createSvgIcon(
    ${variables.jsx},
    "${componentName}"
);`;
};

function indexTemplate(filePaths) {
  const exportEntries = filePaths.map((filePath) => {
    const basename = path.basename(filePath, path.extname(filePath));
    return `export * from './${basename}'`;
  });
  return exportEntries.join("\n");
}

module.exports = {
  expandProps: false,
  typescript: true,
  svgo: false,
  template,
  indexTemplate,
  prettier: false,
};
