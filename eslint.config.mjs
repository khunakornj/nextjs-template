// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettierPlugin from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import typescriptEnumPlugin from 'eslint-plugin-typescript-enum';
import ununsedImport from 'eslint-plugin-unused-imports';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  // Next.js presets
  ...nextVitals,
  ...nextTs,
  ...storybook.configs['flat/recommended'],

  // Project ignores
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),

  // TypeScript rules
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin,
      'typescript-enum': typescriptEnumPlugin,
      'simple-import-sort': simpleImportSort,
      'unused-imports': ununsedImport,
    },
    rules: {
      // --- Plugins Rules ---
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'prettier/prettier': ['error'],
      'unused-imports/no-unused-imports': 'error',

      // --- React Rules ---
      'no-trailing-spaces': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-restricted-imports': [
        'error',
        {
          patterns: ['../../*'],
        },
      ],
      'no-multiple-empty-lines': [
        'error',
        {
          max: 1, // Maximum 1 empty line between code blocks
          maxEOF: 0, // No empty lines at the end of the file
          maxBOF: 0, // No empty lines at the beginning of the file
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          ignoreRestSiblings: true,
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
]);
