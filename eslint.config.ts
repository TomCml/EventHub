import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import globals from 'globals';

export default tseslint.config(
  {
    ignores: [
      '**/node_modules/',
      '**/dist/',
      '**/build/',
      '.husky/',
      '**/*.env',
    ],
  },

  eslint.configs.recommended,

  {
    files: ['frontend/src/**/*.{ts,tsx}', 'backend/src/**/*.{ts,tsx}'],
    ...tseslint.configs.recommended,
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react: reactPlugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: true,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },

  {
    files: ['*.{js,cjs,mjs,ts,cts,mts}'],
    ...tseslint.configs.base,
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {},
      globals: {
        ...globals.node,
        module: 'readonly',
      },
    },
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
    },
  }
);
