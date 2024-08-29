import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  {
    ignores: ['node_modules', 'dist', '.astro'],
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  ...eslintPluginAstro.configs.recommended,

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
