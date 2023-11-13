module.exports = {
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    quotes: ['warn', 'single'],
    'prefer-const': [
      'warn',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
    'no-var': 'error',
    'no-new-object': 'error',
    'no-array-constructor': 'error',
    'prefer-template': 'warn',
    'template-curly-spacing': 'error',
    'no-eval': 'error',
    'no-undef': 'warn',
    'no-useless-escape': 'warn',
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
  },
};
