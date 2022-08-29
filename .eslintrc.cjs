module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  'parser': 'vue-eslint-parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module',
  },
  'plugins': [
    'vue',
    '@typescript-eslint',
  ],
  'settings': {
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
  'ignorePatterns': ['dist/*.user.js'],
  'rules': {
    'curly': [
      'error',
      'all',
    ],
    'no-multi-spaces': [
      'error',
      { ignoreEOLComments: false },
    ],
    'array-bracket-spacing': [
      'error',
      'never',
    ],
    'block-spacing': [
      'error',
      'always',
    ],
    'brace-style': [
      'error',
      '1tbs',
    ],
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'comma-style': [
      'error',
      'last',
    ],
    'eol-last': [
      'error',
      'always',
    ],
    'implicit-arrow-linebreak': [
      'error',
      'beside',
    ],
    'indent': [
      'error',
      2,
      { 'SwitchCase': 1 },
    ],
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
      },
    ],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'linebreak-style': [
      'error',
      'windows',
    ],
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        allowBlockStart: true,
      },
    ],
    'lines-between-class-members': [
      'error',
      'always',
      { 'exceptAfterSingleLine': true },
    ],
    'multiline-ternary': [
      'error',
      'always',
    ],
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: true,
      },
    ],
    'newline-per-chained-call': [
      'error',
      { ignoreChainWithDepth: 2 },
    ],
    'no-mixed-operators': 'error',
    'no-multi-assign': 'error',
    'no-negated-condition': 'warn',
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],
    'no-unneeded-ternary': [
      'error',
      { defaultAssignment: false },
    ],
    'object-curly-newline': [
      'error',
      {
        multiline: true,
        consistent: true,
      },
    ],
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: false },
    ],
    'one-var': [
      'error',
      'never',
    ],
    'operator-assignment': [
      'error',
      'always',
    ],
    'operator-linebreak': [
      'error',
      'after', {
        'overrides': {
          '?': 'before',
          ':': 'before',
        },
      },
    ],
    'padded-blocks': [
      'error',
      'never',
    ],
    'quote-props': [
      'error',
      'consistent',
    ],
    'quotes': [
      'error',
      'single',
    ],
    'semi': [
      'error',
      'never',
    ],
    'space-before-blocks': [
      'error',
      'always',
    ],
    'space-before-function-paren': [
      'error',
      {
        'anonymous': 'never',
        'named': 'never',
        'asyncArrow': 'always',
      },
    ],
    'space-in-parens': [
      'error',
      'never',
    ],
    'space-infix-ops': 'error',
    'switch-colon-spacing': [
      'error',
      {
        'before': false,
        'after': true,
      },
    ],
    'arrow-body-style': [
      'error',
      'as-needed',
    ],
    'arrow-parens': [
      'error',
      'as-needed',
    ],
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'no-useless-computed-key': 'error',
    'no-var': 'error',
    'object-shorthand': [
      'error',
      'always',
    ],
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    'prefer-const': [
      'error',
      {
        'destructuring': 'any',
        'ignoreReadBeforeAssign': false,
      },
    ],
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'no-multiple-empty-lines': [
      'error',
      { max: 1 },
    ],
    'import/order': ['error',
      {
        'groups':
        [
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
      },
    ],
  },
}

