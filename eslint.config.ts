import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
// @ts-expect-error: Le module n'a pas de types
import pluginReactConfig from 'eslint-plugin-react/configs/jsx-runtime.js';

export default [
  {
    ignores: [
      '**/node_modules/',
      '**/dist/',
      '**/.husky/',
      'backend/dist/',
      'frontend/dist/',
    ],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
  },

  pluginJs.configs.recommended,

  ...tseslint.config({
    files: ['frontend/src/**/*.tsx', 'backend/src/**/*.ts'],
    extends: [...tseslint.configs.recommended, ...tseslint.configs.strict],
    languageOptions: {
      parserOptions: {
        project: ['frontend/tsconfig.app.json', 'backend/tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  }),

  ...tseslint.config({
    files: ['*.js', '*.ts'],
    extends: [tseslint.configs.base],
    languageOptions: {
      globals: { module: 'readonly', require: 'readonly' },
    },
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
    },
  }),

  {
    files: ['frontend/src/**/*.tsx'],
    ...pluginReactConfig,
    rules: {
      ...pluginReactConfig.rules,
      'react/prop-types': 'off',
    },
  },
];
