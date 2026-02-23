import js from '@eslint/js';
import globals from 'globals';
import json from '@eslint/json';
import css from '@eslint/css';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
  },
  {
    files: [
      '*.config.{js,mjs}',
      'rollup.config.*',
      'webpack.config.*',
      'vite.config.*',
      '.eslintrc.js',
      'babel.config.js',
      'postcss.config.js',
    ],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: globals.node, // включаем поддержку Node.js здесь
    },
  },
  {
    files: ['**/*.jsonc'],
    plugins: { json },
    language: 'json/jsonc',
    extends: ['json/recommended'],
  },
  {
    files: ['**/*.css'],
    plugins: { css },
    language: 'css/css',
    extends: ['css/recommended'],
  },
]);
