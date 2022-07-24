const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  env: {
    es2022: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
})
