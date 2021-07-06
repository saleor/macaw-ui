module.exports = {
  extends: [
    "react-app",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  plugins: ["simple-import-sort"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    quotes: ["off"],
    "simple-import-sort/sort": ["error"],
    "sort-imports": "off", // imports are handled by simple-import-sort/sort
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: false,
        },
      },
    ],
  },
};
