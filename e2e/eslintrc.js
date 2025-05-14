const path = require('path');

const resolve = {
  extensions: ['.js', '.ts'],
  alias: {
    '@': path.resolve(__dirname, 'src'),
    '@tests': path.resolve(__dirname, 'tests'),
  },
  projectPath: path.resolve(__dirname, 'tsconfig.json'),
};

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: resolve.projectPath,
    tsconfigRootDir: __dirname,
  },
  extends: [
    'airbnb/base',
    'plugin:@typescript-eslint/recommended',
    '@mate-academy/eslint-config-internal',
  ],
  plugins: [
    '@typescript-eslint',
    'deprecation',
    'playwright',
  ],
  env: {
    es2021: true,
  },
  globals: {
    models: true,
    apiServer: true,
    graphqlClient: true,
    fail: true,
  },
  rules: {
    // typescript
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/ban-types': 'off',

    // rest
    'no-underscore-dangle': ['error', { allow: ['__resolveType'] }],
    'default-param-last': 'off',
    'function-paren-newline': 'off',
    'no-useless-constructor': 'off',
    'global-require': 'off',
    'import/no-dynamic-require': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'max-classes-per-file': 'off',
    'max-len': ['error', 80, {
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
      ignoreComments: true,
    }],
    'arrow-parens': ['error', 'always'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'no-console': 'off',
    'no-return-await': 'off',
    'class-methods-use-this': 0,
    semi: ['error', 'always'],
    'import/order': ['error', {
      groups: [
        'builtin',
        'external',
        'internal',
        ['parent', 'sibling'],
        'index',
      ],
      'newlines-between': 'ignore',
    }],
    'no-shadow': 'off',
    // rewrite from api
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      { selector: 'default', format: ['camelCase', 'UPPER_CASE'] },
      { selector: 'typeLike', format: ['PascalCase'] },
      { selector: 'enumMember', format: ['PascalCase', 'camelCase'] },
    ],
    'deprecation/deprecation': 'error',
    'playwright/no-skipped-test': 'error',
  },
  ignorePatterns: [
    '**/node_modules/*',
    '.eslintrc.js',
    'playwright.config.ts',
    'wdio.appium.conf.ts',
  ],
  overrides: [
    {
      files: ['**/*.spec.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '.*' }],
      },
    },
  ],
  settings: {
    'import/resolver': {
      alias: {
        extensions: resolve.extensions,
        map: [
          ...Object.entries(resolve.alias),
        ],
      },
      node: {
        extensions: resolve.extensions,
      },
    },
  },
};
