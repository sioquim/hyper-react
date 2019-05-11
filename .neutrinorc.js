const airbnb = require('@neutrinojs/airbnb');
const react = require('@neutrinojs/react');
const jest = require('@neutrinojs/jest');
const template = require('@neutrinojs/html-template');
const copy = require('@neutrinojs/copy');
const { basename, join } = require('path');

module.exports = {
	options: {
		root: __dirname
	},
	use: [
		airbnb({
			eslint: {
				baseConfig: {
					extends: [ 'eslint-config-superreact' ],
					parserOptions: {
						ecmaFeatures: {
							jsx: true
						}
					},
					rules: {
						'babel/semi': 'off'
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
			// Target specific browsers with babel-preset-env
			targets: {
				browsers: [ 'last 1 Chrome versions', 'last 1 Firefox versions' ]
			}
		}),
		jest(),
		template({
			template: require.resolve('./src/public/index.ejs'),
			appMountId: 'root',
			lang: 'en',
			meta: {
				viewport: 'width=device-width, initial-scale=1'
			},
			// Override pluginId to add an additional html-template plugin instance
			pluginId: 'html',
			title: 'Super React'
		}),
		copy({
			patterns: [
				{
					context: 'src/public',
					from: '**/*',
					to: ''
				}
			],
			options: {
				logLevel: 'debug'
			},
			pluginId: 'copy'
		})
	]
};
