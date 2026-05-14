import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import next from "@next/eslint-plugin-next";
import globals from "globals";

export default tseslint.config(
  { ignores: [".next/", "node_modules/"] },
  {
    files: ["*.js", "*.cjs"],
    languageOptions: { globals: { ...globals.node, ...globals.commonjs } },
  },
  js.configs.recommended,
  tseslint.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  jsxA11y.flatConfigs.recommended,
  {
    plugins: { "@next/next": next },
    rules: next.configs.recommended.rules,
  },
  {
    settings: { react: { version: "detect" } },
    linterOptions: { reportUnusedDisableDirectives: true },
  },
);
