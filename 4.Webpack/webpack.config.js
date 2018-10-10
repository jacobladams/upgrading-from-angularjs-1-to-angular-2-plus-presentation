const webpack = require('webpack');
const path = require('path');

const sourcePath = path.join(__dirname, './app');
const destPath = path.join(__dirname, './dist');

module.exports = function(env) {
	const nodeEnv = env && env.prod ? 'production' : 'development';
	const isProd = nodeEnv === 'production';

	const plugins = [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			chunks: ['vendor', 'app'],
			minChunks: Infinity,
		})
	];

	return {
		devtool: isProd ? 'source-map' : 'eval',
		context: sourcePath,
		entry: {
			app: sourcePath + '/app.ts',
			vendor: [
                'angular/angular.js',
                'angular-route/angular-route.js',
			]
		},
		output: {
			path: destPath + '/scripts',
			filename: '[name].min.js'
		},
		module: {
			rules: [
				{
					test: /\.html$/,
					exclude: /node_modules/,
					loader: 'html-loader'
				},
				{
					test: /\.ts$/,
					exclude: /node_modules/,
					use: [
						'ts-loader'
					]
				}
			]
		},
		resolve: {
			extensions: ['.js', '.ts'],
			modules: [path.resolve(__dirname, 'node_modules'), sourcePath]
		},

		plugins
	};
};
