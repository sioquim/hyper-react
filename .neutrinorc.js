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
		(neutrino) => {
			neutrino.config.resolve.alias.set('react-dom', '@hot-loader/react-dom');
			neutrino.config.output.publicPath('/hyper-react');
		},
		airbnb({
			eslint: {
				baseConfig: {
					extends: [ 'eslint-config-hyper-react' ],
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
			},
			publicPath: process.env.NODE_ENV === 'production' ? '/hyper-react' : '/'
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
			title: 'Hyper React'
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
				logLevel: 'debug',
				ignore: [ '*.ejs' ]
			},
			pluginId: 'copy'
		})
	]
};
