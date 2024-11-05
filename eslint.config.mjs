import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
import vue from 'eslint-plugin-vue'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import globals from 'globals'
import parser from 'vue-eslint-parser'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [{
  ignores: ['dist/*.user.js'],
}, ...fixupConfigRules(compat.extends(
  'eslint:recommended',
  'plugin:vue/vue3-recommended',
  'plugin:@typescript-eslint/recommended',
  'plugin:import/recommended',
  'plugin:import/typescript',
)), {

  plugins: {
    'vue': fixupPluginRules(vue),
    '@typescript-eslint': fixupPluginRules(typescriptEslint),
  },
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
    },
    parser,
    ecmaVersion: 'latest',
    sourceType: 'module',
    parserOptions: {
      parser: '@typescript-eslint/parser',
    },
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'no-unreachable-loop': 'error',
    'curly': ['error', 'all'],
    'new-cap': ['error', {
      newIsCap: true,
      capIsNew: true,
    }],
    'no-mixed-operators': ['error', {
      groups: [['&&', '||']],
    }],
    'no-multi-assign': 'error',
    'no-negated-condition': 'warn',
    'no-unneeded-ternary': ['error', {
      defaultAssignment: false,
    }],
    'no-useless-computed-key': 'error',
    'no-var': 'error',
    'one-var': ['error', 'never'],
    'object-shorthand': ['error', 'always'],
    'operator-assignment': ['error', 'always'],
    'prefer-arrow-callback': ['error', {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    }],
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: false,
    }],
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'consistent'],
    'array-bracket-spacing': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': ['error', {
      before: true,
      after: true,
    }],
    'block-spacing': ['error', 'always'],
    'no-multi-spaces': ['error', {
      ignoreEOLComments: false,
    }],
    'brace-style': ['error', '1tbs'],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', {
      before: false,
      after: true,
    }],
    'comma-style': ['error', 'last'],
    'eol-last': ['error', 'always'],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'indent': ['error', 2, {
      SwitchCase: 1,
    }],
    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true,
      mode: 'strict',
    }],
    'keyword-spacing': ['error', {
      before: true,
      after: true,
    }],
    'linebreak-style': ['error', 'windows'],
    'lines-around-comment': ['error', {
      beforeBlockComment: true,
      allowBlockStart: true,
      allowObjectStart: true,
    }],
    'lines-between-class-members': ['error', 'always', {
      exceptAfterSingleLine: true,
    }],
    'multiline-ternary': ['error', 'always'],
    'newline-per-chained-call': ['error', {
      ignoreChainWithDepth: 2,
    }],
    'no-multiple-empty-lines': ['error', {
      max: 1,
    }],
    'no-trailing-spaces': ['error', {
      skipBlankLines: false,
      ignoreComments: false,
    }],
    'object-curly-newline': ['error', {
      multiline: true,
      consistent: true,
    }],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: false,
    }],
    'operator-linebreak': ['error', 'after', {
      overrides: {
        '?': 'before',
        ':': 'before',
      },
    }],
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': ['error', {
      blankLine: 'always',
      prev: 'function',
      next: '*',
    }],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'switch-colon-spacing': ['error', {
      before: false,
      after: true,
    }],
    'import/order': ['error', {
      'groups': [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
        'object',
        'type',
      ],
      'newlines-between': 'always',
    }],
  },
}]
