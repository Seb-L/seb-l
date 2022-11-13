module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint',
		'simple-import-sort',
		'no-relative-import-paths',
		'filenames-simple',
	],
	extends: [
		'next',
		'plugin:json/recommended',
	],
	rules: {
		'filenames-simple/naming-convention': [
			'error',
			{
				'rule': 'kebab-case',
				'excepts': ['index', '\\[.*\\]', '_.*'],
			},
		],

		'dot-notation': 'off',
		'no-case-declarations': 'off',
		'no-console': 'warn',
		'no-debugger': 'warn',
		'no-multi-spaces': 'error',
		'no-multiple-empty-lines': ['error', { 'max': 1, 'maxBOF': 0, 'maxEOF': 0 }],
		'no-nested-ternary': 'error',
		// 'no-warning-comments': 'warn',
		'func-style': ['error', 'expression', { allowArrowFunctions: true }],
		camelcase: 'off',
		'@typescript-eslint/camelcase': 'off',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', ignoreRestSiblings: true }],
		'no-redeclare': 'off',
		'@typescript-eslint/no-redeclare': 'error',
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
		'brace-style': 'off',
		'@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: false }],
		'comma-dangle': 'off',
		'@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
		'object-curly-spacing': 'off',
		'@typescript-eslint/object-curly-spacing': ['error', 'always'],
		semi: 'off',
		'@typescript-eslint/semi': ['error', 'never'],
		quotes: 'off',
		'@typescript-eslint/quotes': ['error', 'single'],
		'space-before-blocks': 'off',
		'@typescript-eslint/space-before-blocks': ['error', 'always'],
		'space-before-function-paren': ['error', 'always'],
		'prefer-template': 'error',
		'prefer-const': ['off'],

		// Import
		'import/order': 'off',
		// 'no-relative-import-paths/no-relative-import-paths': [
		// 	'warn',
		// 	{ 'allowSameFolder': true },
		// ],
		'simple-import-sort/imports': [
			'error',
			{
				groups: [
					['^@?\\w'], // libs
					['^@/', '^~/'], // absolute path
					['^', '^\\.'], // relative path
				],
			},
		],
		'import/newline-after-import': 1,
		'import/no-duplicates': 1,
		'simple-import-sort/exports': 'error',

		// Spacing
		'padding-line-between-statements': [
			'error',
			{ blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
			{ blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
			{
				blankLine: 'always',
				prev: '*',
				next: [
					'function',
					'return',
					'multiline-const',
				],
			},
			{
				blankLine: 'always',
				prev: [
					'case',
					'default',
					'block-like',
					'multiline-block-like',
					'multiline-const',
				],
				next: '*',
			},
			{ blankLine: 'always', prev: ['multiline-expression'], next: ['multiline-expression'] },
			{ blankLine: 'always', prev: ['const', 'let', 'var'], next: ['expression'] },
		],
		'indent': ['error', 'tab'],

		'react/jsx-indent': ['error', 2, { indentLogicalExpressions: true }],
		'react/jsx-indent-props': ['error', 2],
		'react/jsx-one-expression-per-line': ['error'],
		'react/jsx-props-no-multi-spaces': ['error'],
		'react/jsx-max-props-per-line': ['error', { maximum: 1 }],
		'react/jsx-first-prop-new-line': ['error', 'multiline'],
		'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
		'react/jsx-wrap-multilines': ['error', {
			declaration: 'parens-new-line',
			assignment: 'parens-new-line',
			return: 'parens-new-line',
			arrow: 'parens-new-line',
			condition: 'parens-new-line',
			logical: 'parens-new-line',
			prop: 'parens-new-line',
		}],
		'react/jsx-newline': ['error'],
		'react/jsx-indent': ['error', 'tab', { 'indentLogicalExpressions': true }],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-sort-props': ['error', {
			'callbacksLast': true,
			'reservedFirst': true,
			'noSortAlphabetically': true,
			// "multiline": "last"
		}],
	},
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true,
		},
	},
}
