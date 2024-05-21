import globals, { browser } from "globals";
import pluginJs from "@eslint/js";

export default [{ files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } }, { languageOptions: { globals: globals.browser } }, { env: { commonjs: true, es2021: true, jest: true } }, pluginJs.configs.recommended];
