module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@babel/eslint-parser',
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
    'react/static-property-placement': 0,
    'react/state-in-constructor': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-props-no-spreading': 0,
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
      },
      node: {
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        paths: ['~'],
      },
    },
  },
};
