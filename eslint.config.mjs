import { FlatCompat } from '@eslint/eslintrc';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
// import simpleImportSort from 'eslint-plugin-simple-import-sort';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': ts,
      import: importPlugin,
    },
    rules: {
      'import/order': [
        'error',
        {
          alphabetize: { order: 'asc', caseInsensitive: true },
          groups: [
            'type',
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'unknown',
          ],
          'newlines-between': 'always',
          pathGroups: [
            // React 관련 패키지가 가장 먼저
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'react-*',
              group: 'external',
              position: 'before',
            },
            // next/image가 next-intl보다 먼저 오도록 지정
            {
              pattern: 'next/image',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'next-intl',
              group: 'external',
              position: 'before',
            },
            // Mantine 패키지들
            {
              pattern: '@mantine/**',
              group: 'external',
              position: 'before',
            },
            // 내부 모듈 (type imports 먼저)
            {
              pattern: '@src/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@resources/**',
              group: 'internal',
              position: 'before',
            },
            // CSS 파일들 - 특정 순서 지정
            {
              pattern: '@mantine/core/styles.css',
              group: 'unknown',
              position: 'after',
            },
            // CSS 파일들은 맨 마지막
            {
              pattern: '**/*.css',
              group: 'unknown',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: [
            'builtin',
            'react',
            '@mantine/core/styles.css',
            '@mantine/carousel/styles.css',
            '@mantine/notifications/styles.css',
          ],
        },
      ],

      // Simple Import Sort 규칙 (Google C++ 스타일 기반)
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      // 'simple-import-sort/imports': 'error',
      // 'simple-import-sort/exports': 'error',

      // TypeScript 관련 규칙
      ...ts.configs.recommended.rules,
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-interface': 'off',

      // Google C++ 스타일 컨벤션
      // 네이밍 규칙
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: 'variable',
          format: ['snake_case', 'camelCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'function',
          format: ['PascalCase', 'camelCase'],
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        {
          selector: 'interface',
          format: ['PascalCase'],
          prefix: ['I'],
        },
        {
          selector: 'typeAlias',
          format: ['PascalCase'],
        },
      ],

      // 코드 스타일 (Google C++ 스타일 기반)
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      curly: ['error', 'multi-line', 'consistent'],
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'comma-dangle': ['error', 'always-multiline'],
      indent: ['warn', 2],
      'max-len': ['warn', { code: 100, ignoreUrls: true }],

      // 객체 및 배열 규칙
      'object-curly-newline': 'off', // import 3개 이상 시 줄바꿈 규칙 무시
      'object-property-newline': 'off',
      'array-element-newline': 'off',

      // 기타 규칙
      'no-unused-vars': 'off', // TypeScript 규칙 사용
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
      'prefer-arrow-callback': 'error',
      'arrow-spacing': 'error',
    },
  },
];

export default eslintConfig;
