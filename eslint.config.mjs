import eslint from '@eslint/js'
import globals from 'globals'
import pluginStylistic from '@stylistic/eslint-plugin'
import pluginVue from 'eslint-plugin-vue'
import pluginImport from 'eslint-plugin-import'
import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from '@vue/eslint-config-typescript'

export default defineConfigWithVueTs([
  {
    ignores: ['dist'],
  },
  eslint.configs.recommended,
  vueTsConfigs.strict,
  vueTsConfigs.stylistic,
  ...pluginVue.configs['flat/recommended'],
  pluginStylistic.configs['disable-legacy'],
  pluginStylistic.configs.recommended,
  pluginImport.flatConfigs.recommended,
  pluginImport.flatConfigs.typescript,
  {
    files: ['**/*.{ts,vue}'],
    languageOptions: {
      globals: {
        ...globals['shared-node-browser'],
      },
      parserOptions: {
        parser: '@typescript-eslint/parser',
        projectService: {
          allowDefaultProject: ['*.js', 'vite.config.ts'],
        },
      },
    },
    plugins: {
      '@stylistic': pluginStylistic,
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.vue'],
      },
      'import/resolver': {
        typescript: {
          project: ['./tsconfig.json'],
        },
      },
    },
    rules: {
      'no-eval': 'error',
      'no-template-curly-in-string': 'error',
      'no-void': 'error',
      'no-empty-pattern': 'error',

      'dot-notation': ['error', {
        allowKeywords: true,
      }],

      'eqeqeq': ['error', 'smart'],
      'func-style': ['error', 'declaration', { allowTypeAnnotation: true }],

      'new-cap': ['error', {
        newIsCap: true,
        capIsNew: false,
      }],

      'no-console': ['warn', {
        allow: ['info', 'warn', 'error', 'groupCollapsed', 'groupEnd'],
      }],

      'no-multi-assign': 'error',
      'no-negated-condition': 'warn',

      'no-unneeded-ternary': ['error', {
        defaultAssignment: false,
      }],

      'one-var': ['error', 'never'],
      'operator-assignment': ['error', 'always'],
      'arrow-body-style': ['error', 'as-needed'],

      'camelcase': ['error', {
        allow: ['^GM_'],
      }],

      'curly': ['error', 'multi-line'],
      'no-useless-computed-key': 'error',
      'no-var': 'error',
      'object-shorthand': ['error', 'always', {
        avoidQuotes: true,
        ignoreConstructors: false,
      }],

      'prefer-arrow-callback': ['error', {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      }],

      'prefer-const': ['error', {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      }],

      'prefer-spread': 'off',
      'prefer-template': 'error',

      '@typescript-eslint/ban-ts-comment': ['error', {
        'ts-ignore': 'allow-with-description',
      }],

      '@typescript-eslint/consistent-type-imports': ['error', {
        prefer: 'type-imports',
        disallowTypeAnnotations: false,
      }],

      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      // 打開會報錯。TypeError: Cannot read properties of undefined (reading 'isolatedDeclarations'
      '@typescript-eslint/consistent-generic-constructors': 'off',
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/no-duplicate-enum-values': 'error',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
      '@typescript-eslint/no-require-imports': 'error',

      '@typescript-eslint/no-unused-vars': ['warn', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      }],

      '@typescript-eslint/prefer-ts-expect-error': 'error',

      '@stylistic/dot-location': ['error', 'property'],

      '@stylistic/type-annotation-spacing': ['error', {}],

      '@stylistic/no-multi-spaces': ['error', {
        ignoreEOLComments: false,
      }],

      '@stylistic/array-bracket-spacing': ['error', 'never'],
      '@stylistic/block-spacing': ['error', 'always'],
      '@stylistic/brace-style': ['error', '1tbs'],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],

      '@stylistic/comma-spacing': ['error', {
        before: false,
        after: true,
      }],

      '@stylistic/comma-style': ['error', 'last'],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/func-call-spacing': 'off',

      '@stylistic/indent': ['error', 2, {
        ignoredNodes: ['PropertyDefinition'],
        SwitchCase: 1,
      }],

      '@stylistic/key-spacing': ['error', {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
      }],

      '@stylistic/keyword-spacing': ['error', {
        before: true,
        after: true,
      }],
      '@stylistic/space-unary-ops': ['error', {
        nonwords: false,
        words: true,
      }],

      '@stylistic/operator-linebreak': ['error', 'before', {
        overrides: {
          '=': 'after',
          '||=': 'after',
          '&&=': 'after',
        },
      }],

      '@stylistic/lines-around-comment': ['error', {
        beforeBlockComment: true,
        allowBlockStart: true,
      }],

      '@stylistic/lines-between-class-members': ['error', 'always', {
        exceptAfterSingleLine: true,
      }],

      '@stylistic/newline-per-chained-call': ['error', {
        ignoreChainWithDepth: 2,
      }],

      '@stylistic/no-mixed-operators': 'error',

      '@stylistic/no-trailing-spaces': ['error', {
        skipBlankLines: false,
        ignoreComments: false,
      }],

      '@stylistic/object-curly-newline': ['error', {
        multiline: true,
        consistent: true,
      }],

      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/padded-blocks': ['error', 'never'],
      '@stylistic/quote-props': ['error', 'consistent-as-needed'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/space-before-blocks': ['error', 'always'],

      '@stylistic/object-property-newline': ['error', {
        allowAllPropertiesOnSameLine: true,
      }],

      '@stylistic/space-before-function-paren': ['error', {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      }],

      '@stylistic/space-in-parens': 'error',
      '@stylistic/space-infix-ops': 'error',

      '@stylistic/switch-colon-spacing': ['error', {
        before: false,
        after: true,
      }],

      '@stylistic/arrow-parens': ['error', 'as-needed'],

      '@stylistic/arrow-spacing': ['error', {
        before: true,
        after: true,
      }],

      '@stylistic/no-multiple-empty-lines': ['error', {
        max: 2,
      }],

      // https://eslint.org/docs/latest/use/migrate-to-10.0.0#-removal-of-deprecated-sourcecode-methods
      'import/order': ['off', {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
      }],

      // https://typescript-eslint.io/troubleshooting/typed-linting/performance/#eslint-plugin-import
      'import/default': 'off',
      'import/namespace': 'off',
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
    },
  },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/component-name-in-template-casing': ['error', 'PascalCase', {
        registeredComponentsOnly: false,
      }],
      'vue/component-options-name-casing': ['error', 'PascalCase'],

      'vue/custom-event-name-casing': ['error', 'camelCase'],

      'vue/define-macros-order': ['error', {
        order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots'],
      }],

      'vue/dot-location': ['error', 'property'],
      'vue/dot-notation': ['error', {
        allowKeywords: true,
      }],

      'vue/eqeqeq': ['error', 'smart'],

      'vue/html-indent': ['error', 2],
      'vue/html-quotes': ['error', 'double'],
      'vue/html-comment-content-spacing': ['error', 'always', {
        exceptions: ['-'],
      }],

      'vue/max-attributes-per-line': 'off',
      'vue/multi-word-component-names': 'off',

      'vue/no-empty-pattern': 'error',
      'vue/no-irregular-whitespace': 'error',
      'vue/no-restricted-syntax': ['error', 'DebuggerStatement', 'LabeledStatement', 'WithStatement'],
      'vue/no-restricted-v-bind': 'error',
      'vue/no-setup-props-reactivity-loss': 'error',
      'vue/no-useless-v-bind': 'error',
      'vue/no-v-html': 'off',

      'vue/object-shorthand': ['error', 'always', {
        avoidQuotes: true,
        ignoreConstructors: false,
      }],

      'vue/prefer-separate-static-class': 'error',
      'vue/prefer-template': 'error',

      'vue/prop-name-casing': ['error', 'camelCase'],

      'vue/space-infix-ops': 'error',
      'vue/space-unary-ops': ['error', {
        nonwords: false,
        words: true,
      }],

      'vue/array-bracket-spacing': ['error', 'never'],

      'vue/arrow-spacing': ['error', {
        after: true,
        before: true,
      }],

      'vue/block-spacing': ['error', 'always'],
      'vue/block-tag-newline': ['error', {
        multiline: 'always',
        singleline: 'always',
        maxEmptyLines: 1,
      }],
      'vue/block-order': ['error', {
        order: ['script', 'template', 'style'],
      }],

      'vue/comma-dangle': ['error', 'always-multiline'],
      'vue/comma-spacing': ['error', {
        after: true,
      }],
      'vue/comma-style': 'error',

      'vue/key-spacing': ['error', {
        afterColon: true,
        beforeColon: false,
      }],

      'vue/keyword-spacing': 'error',

      'vue/object-curly-newline': 'off',
      'vue/object-curly-spacing': ['error', 'always'],
      'vue/object-property-newline': ['error', {
        allowAllPropertiesOnSameLine: true,
      }],

      'vue/operator-linebreak': ['error', 'before', {
        overrides: {
          '=': 'after',
          '||=': 'after',
          '&&=': 'after',
        },
      }],
      'vue/padding-line-between-blocks': 'error',
      'vue/quote-props': ['error', 'consistent-as-needed'],
      'vue/space-in-parens': 'error',
      'vue/template-curly-spacing': 'error',

      // false positive: https://github.com/vuejs/eslint-plugin-vue/issues/2660
      'no-useless-assignment': 'off',
    },
  },
])
