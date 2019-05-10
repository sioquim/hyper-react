const airbnb = require('@neutrinojs/airbnb');
const react = require('@neutrinojs/react');
const jest = require('@neutrinojs/jest');

module.exports = {
	options: {
		root: __dirname
	},
	use: [
		airbnb({
			eslint: {
				baseConfig: {
					extends: [
						'standard',
						'plugin:prettier/recommended',
						'prettier',
						'prettier/react',
						'prettier/standard'
					],
					plugins: [ 'prettier', 'standard', 'react-hooks' ],
					parserOptions: {
						ecmaFeatures: {
						jsx: true
						}
					},
					rules: {
            		'babel/semi': 'off',
						'react-hooks/rules-of-hooks': 'error',
						'prettier/prettier': [
							'error',
							{
								singleQuote: true,
								trailingComma: 'es5',
								semi: false,
								useTabs: false,
								bracketSpacing: true,
								arrowParens: 'always',
								spaceBeforeFunctionParen: false
							}
						],
						'jsx-a11y/href-no-hash': 'off',
						'no-tabs': 0,
						'import/no-unresolved': 0,
						'import/extensions': 0,
						'jsx-a11y/img-redundant-alt': 0,
						'arrow-body-style': [ 'off', 'as-needed' ],
						'comma-dangle': [ 'off' ],
						'import/first': [ 'off' ],
						'import/no-extraneous-dependencies': [ 'off' ],
						'import/no-named-default': [ 'error' ],
						'jsx-a11y/no-static-element-interactions': [ 'off' ],
						'jsx-a11y/anchor-is-valid': [
							'warn',
							{
								aspects: [ 'invalidHref' ]
							}
						],
						'new-cap': [ 'off' ],
						'no-console': [ 'off' ],
						'no-multi-assign': [ 'warn' ],
						'no-plusplus': [
							'warn',
							{
								allowForLoopAfterthoughts: true
							}
						],
						'no-restricted-syntax': [ 'error' ],
						'no-trailing-spaces': [ 'off' ],
						'no-underscore-dangle': [ 'off' ],
						'no-unused-vars': [
							'warn',
							{
								ignoreRestSiblings: true
							}
						],
						'no-nested-ternary': [ 'off' ],
						'object-curly-spacing': [ 'off' ],
						'padded-blocks': [ 'off' ],
						'react/forbid-prop-types': [ 'off' ],
						'react/jsx-boolean-value': [ 'warn' ],
						'react/jsx-filename-extension': [ 'off' ],
						'react/jsx-max-props-per-line': [ 'off' ],
						'react/no-array-index-key': [ 'off' ],
						'react/no-find-dom-node': [ 'warn' ],
						'react/no-string-refs': [ 'warn' ],
						'react/no-unescaped-entities': [ 'warn' ],
						'react/no-unused-prop-types': [ 'warn' ],
						'react/prefer-es6-class': [ 'off' ],
						'react/require-default-props': [ 'warn' ]
					},
					settings: {
						react: {
							version: '16.8'
						}
					}
				}
			}
		}),
		react({
			html: {
				title: 'super-react'
			}
		}),
		jest()
	]
};
