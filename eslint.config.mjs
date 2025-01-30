import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        process: "readonly",
        console: "readonly",
        fetch: "readonly",
      },
      sourceType: "commonjs",
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];
