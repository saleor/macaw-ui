module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "simple-import-sort"],
  extends: ["plugin:storybook/recommended"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    quotes: ["off"],
    "simple-import-sort/sort": ["error"],
    "sort-imports": "off", // imports are handled by simple-import-sort/sort
    "no-console": "error",
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
    "import/no-extraneous-dependencies": ["error"],
    "no-restricted-imports": [
      "error",
      {
        paths: ["@material-ui/core"],
      },
    ],
    "no-unused-expressions": "error",
    "simple-import-sort/sort": ["error"],
    "sort-imports": "off", // imports are handled by simple-import-sort/sort
    "import/no-extraneous-dependencies": "off", // imports are handled by simple-import-sort/sort
    "import/no-internal-modules": "off", // imports are handled by simple-import-sort/sort
    "import/order": "off", // imports are handled by simple-import-sort/sort
  },
  overrides: [
    {
      files: ["**/*.stories.tsx"],
      rules: {
        "no-restricted-imports": "off",
        "no-console": "off",
      },
    },
  ],
};
