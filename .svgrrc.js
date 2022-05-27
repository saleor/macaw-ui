const path = require("path");

function changeSvgToMaterial(jsx) {
  // replace svg -> SvgIcon
  jsx.openingElement.name.name = "SvgIcon";
  jsx.closingElement.name.name = "SvgIcon";

  // adds classes={{ root: classes.root }}
  jsx.openingElement.attributes.push({
    type: "JSXAttribute",
    name: { type: "JSXIdentifier", name: "classes" },
    value: {
      type: "JSXExpressionContainer",
      expression: {
        type: "ObjectExpression",
        properties: [
          {
            type: "ObjectProperty",
            method: false,
            computed: false,
            shorthand: false,
            key: {
              type: "Identifier",
              name: "root",
            },
            value: {
              type: "MemberExpression",
              computed: false,
              optional: false,
              object: {
                type: "Identifier",
                name: "classes",
              },
              property: {
                type: "Identifier",
                name: "root",
              },
            },
          },
        ],
      },
    },
  });

  // adds {...props}
  jsx.openingElement.attributes.push({
    type: "JSXSpreadAttribute",
    argument: {
      type: "Identifier",
      name: "props",
    },
  });

  // adds ref={ref}
  jsx.openingElement.attributes.push({
    type: "JSXAttribute",
    name: {
      type: "JSXIdentifier",
      name: "ref",
    },
    value: {
      type: "JSXExpressionContainer",
      expression: {
        type: "Identifier",
        name: "ref",
      },
    },
  });
  return jsx;
}

const template = (variables, { tpl }) => {
  const componentName = variables.componentName.replace("Svg", "");
  changeSvgToMaterial(variables.jsx);
  return tpl`
import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import { useIconStyles } from "../styles";
import { IconProps } from "../types";

${variables.interfaces};

export const ${componentName} = React.forwardRef(
  (props: IconProps, ref: React.Ref<SVGSVGElement>) => {
    const classes = useIconStyles();

    return (
      ${variables.jsx}
    )
  }
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
  expandProps: "end",
  typescript: true,
  svgo: false,
  ref: true,
  template,
  indexTemplate,
  prettier: false,
};
