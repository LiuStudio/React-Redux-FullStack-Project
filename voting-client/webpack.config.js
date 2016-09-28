var webpack = require('webpack');
module.exports ={
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./src/index.jsx'
	],
	module:{
		loaders:[{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query:{
				presets: ['react', 'es2015','stage-0'],
				plugins: ['react-html-attrs', 'transform-decorators-legacy','transform-class-properties']
			}
		}]
	},
	resolve:{
		extensions: ['', '.js', '.jsx']
	},
	output:{
		path: __dirname+'/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer:{
		contentBase: './dist',
		hot: true
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
};