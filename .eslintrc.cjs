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
    /**
     * Possible Problems
     */
    'no-unreachable-loop': 'error',

    /**
     *  Suggestions
     */
    'arrow-body-style': [
      'error',
      'as-needed',
    ],
    'curly': [
      'error',
      'all',
    ],
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: true,
      },
    ],
    'no-mixed-operators': [
      'error',
      {
        groups: [['&&', '||']],
      }
    'no-multi-assign': 'error',
    'no-negated-condition': 'warn',
    'no-unneeded-ternary': [
      'error',
      { defaultAssignment: false },
    ],
    'no-useless-computed-key': 'error',
    'no-var': 'error',
    'one-var': [
      'error',
      'never',
    ],
    'object-shorthand': [
      'error',
      'always',
    ],
    'operator-assignment': [
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
    'quote-props': [
      'error',
      'consistent',
    ],

    /**
     * Layout & Formatting
     */
    'array-bracket-spacing': [
      'error',
      'never',
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
    'block-spacing': [
      'error',
      'always',
    ],
    'no-multi-spaces': [
      'error',
      { ignoreEOLComments: false },
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
        allowObjectStart: true,
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
    'newline-per-chained-call': [
      'error',
      { ignoreChainWithDepth: 2 },
    ],
    'no-multiple-empty-lines': [
      'error',
      { max: 1 },
    ],
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
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
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: 'function',
        next: '*',
      },
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

