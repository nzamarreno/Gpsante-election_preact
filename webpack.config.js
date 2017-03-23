const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: ['./Main.js', './stylesheet/main.scss'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: './bundle.js',
		publicPath: '/dist/'
	},
	module: {
		rules: [
        {
			test: /\.scss$/,
            exclude: /node_modules/,
			use: ExtractTextPlugin.extract({
				//postcss load postcss.config.js
				use: [
				    {
				        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        //load postcss.config.js with options plugins
                        options: {
                            sourceMap: 'inline'
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
			})
		},
        {
            test: /\.(woff|woff2|eot|ttf|svg)$/,
            exclude: /node_modules/,
            loader: 'url'
        },    
		{
            test: /\.(js|jsx)$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader'
			//load .babelrc for react with Preact
		}
		]
	},
    resolve: {
        alias: {
            'components': path.resolve(__dirname, 'src/components'),
            'core': path.resolve(__dirname, 'src/core'),
        },
        extensions: [
            '.js',
            '.jsx',
            '.json',
            '.scss'
        ]
    },
	devServer: {
        port: process.env.PORT || 8080,
        host: 'localhost',
        publicPath: '/',
        contentBase: './dist',
        historyApiFallback: true,
        open: true
	},
	plugins: [
		new ExtractTextPlugin({
			filename: 'style.css'
		})
	]	
}