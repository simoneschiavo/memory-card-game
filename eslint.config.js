import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: "latest", // Use the latest ECMAScript features
      sourceType: "module", // Enable ES modules
    },
    settings: {
      react: {
        version: "detect", // Automatically detects React version
      },
    },
    rules: {
      // Add or override rules here
      "react/react-in-jsx-scope": "off", // Disable React-in-JSX-Scope rule
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
