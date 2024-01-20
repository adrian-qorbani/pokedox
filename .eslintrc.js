module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
        jest: true,
        "cypress/globals": true
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    plugins: ['react', "jest", "cypress"],
    globals: {
      Atomics: "readonly",
      SharedArrayBuffer: "readonly",
      process: true,
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: "module",
      jsx: true,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
        "react/prop-types": "off"
    },
    "ignorePatterns": ["cypress.config.js"],
  };
  