import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  {
    ignores: ['node_modules', 'dist', '.astro'],
  },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ['**/*.astro'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/no-unknown-property': 'off',
    },
  },
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['**/*.astro'],
    rules: {
      // override/add rules settings here, such as:
      'astro/no-set-html-directive': 'error',
    },
  },
];
