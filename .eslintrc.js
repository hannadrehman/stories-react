module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint', 'react', 'import'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': 1,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      useJSXTextNode: true,
    },

    ignorePatterns: [
      'dist/**/*', // Ignore built files.
    ],
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
