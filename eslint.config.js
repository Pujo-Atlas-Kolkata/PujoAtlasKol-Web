import { FlatCompat } from "@eslint/eslintrc";
import tseslint from "typescript-eslint";
import importAlias from "@limegrass/eslint-plugin-import-alias";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default tseslint.config(
  {
    ignores: [".next", "dist", "build"],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      "@limegrass/import-alias": importAlias,
    },
    languageOptions: {
      ecmaVersion: "latest", // ✅ explicitly define this
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/require-await": "off",
      "@typescript-eslint/no-misused-promises": [
        "error",
        { checksVoidReturn: { attributes: false } },
      ],
      "@limegrass/import-alias/import-alias": "error",
    },
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
);
