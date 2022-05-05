const path = require("path");

const template = (variables, { tpl }) => {
  const componentName = variables.componentName.replace("Svg", "");
  return tpl`
${variables.imports};

${variables.interfaces};

export const ${componentName} = (${variables.props}) => (
  ${variables.jsx}
);
`;
};

function indexTemplate(filePaths) {
  const exportEntries = filePaths.map((filePath) => {
    const basename = path.basename(filePath, path.extname(filePath));
    return `export * from './${basename}'`;
  });
  return exportEntries.join("\n");
}

module.exports = {
  expandProps: "end",
  typescript: true,
  svgo: false,
  template,
  indexTemplate,
};
