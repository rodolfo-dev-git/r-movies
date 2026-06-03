import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js, react, reactHooks, eslintPluginImportHelpers }, extends: ["js/recommended", "plugin:react-hooks/recommended", "plugin:prettier/recommended"], languageOptions: { globals: globals.browser } },
  pluginReact.configs.flat.recommended,
]);
