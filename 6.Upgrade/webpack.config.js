const webpack = require('webpack');
const path = require('path');

const sourcePath = path.join(__dirname, './app');
const destPath = path.join(__dirname, './dist');
const root = __dirname;

module.exports = function(env) {
	const nodeEnv = env && env.prod ? 'production' : 'development';
	const isProd = nodeEnv === 'production';

	const plugins = [
		new webpack.optimize.CommonsChunkPlugin({
		  name: 'common',
		  minChunks: Infinity,
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			chunks: ['vendor', 'app'],
			minChunks: 2,
		  }),
		//     new webpack.EnvironmentPlugin({
		//       NODE_ENV: nodeEnv,
		//     }),
		//     new webpack.NamedModulesPlugin(),

		new webpack.ContextReplacementPlugin(/\@angular(\\|\/)core(\\|\/)fesm5/, sourcePath),
	];

	return {
		devtool: isProd ? 'source-map' : 'eval',
		context: sourcePath,
		entry: {
			app: sourcePath + '/app.ts',
			ng2: root + '/main.ts',
			// ng2vendor: root + '/ng2vendor.ts',
			vendor: ['angular/angular.js', 'angular-route/angular-route.js']
		},
		// optimization: {
		// 	splitChunks: {
		// 		chunks: 'all'
		// 	}
		// },
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
					use: ['ts-loader', 'angular2-template-loader']
				}
			]
		},
		resolve: {
			extensions: ['.js', '.ts'],
			modules: [path.resolve(__dirname, 'node_modules'), sourcePath]
		},

		plugins,

		// performance: isProd && {
		// 	maxAssetSize: 100,
		// 	maxEntrypointSize: 300,
		// 	hints: 'warning'
		// },

		devServer: {
			contentBase: './src',
			historyApiFallback: true,
			port: 3000,
			compress: isProd,
			inline: !isProd,
			hot: !isProd,
			stats: {
				assets: true,
				children: false,
				chunks: false,
				hash: false,
				modules: false,
				publicPath: false,
				timings: true,
				version: false,
				warnings: true,
				colors: {
					green: '\u001b[32m'
				}
			}
		}
	};
};
