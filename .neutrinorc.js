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
						'eslint-config-super-react'
					],
					parserOptions: {
						ecmaFeatures: {
							jsx: true
						}
					},
					rules: {
            			'babel/semi': 'off',
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
