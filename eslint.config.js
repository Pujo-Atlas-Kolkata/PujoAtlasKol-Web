import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import { fixupPluginRules } from '@eslint/compat';
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  {
    ignores: ['node_modules', 'dist', '.astro'],
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginReact.configs.flat.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    plugins: {
      'react-hooks': fixupPluginRules(eslintPluginReactHooks),
    },
    rules: {
      ...eslintPluginReactHooks.configs.recommended.rules,
    },
  },
  {
    rules: {
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'react',
              importNames: ['default'],
              message:
                'You do not need to import React namespace, use destructured imports instead',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.astro'],
    rules: {
      'react/no-unknown-property': 'off',
      // override/add rules settings here, such as:

      'astro/no-set-html-directive': 'error',
    },
  },
];
