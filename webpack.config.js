const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const config = {
    context: path.resolve(__dirname, './src'),
    entry: ['./Main.js', './stylesheet/main.scss'],
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: './bundle.js',
		publicPath: '/'
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
                            sourceMap: (process.env ? false : true),
                            url: false //disable module path for background (publicPath is important)
                        }
                    },
                    {
                        loader: 'postcss-loader'
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
            'datas': path.resolve(__dirname, 'src/datas')
        },
        extensions: [
            '.js',
            '.jsx',
            '.json',
            '.scss'
        ]
    },
	plugins: [
		new ExtractTextPlugin({
			filename: 'style.css'
		}),
        new CopyWebpackPlugin(
            [
                { from: 'index.html' },
                { from: 'images/**/*'  },
                { from: 'fonts/**/*'  },
            ]
        )
	],	
};

module.exports = env => {
    if (env.production) {
        config.plugins.push(
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                    drop_console: true,
                }
            })
        );
    } 
    if(env.dev) {
        console.log('developpement')
        config.devServer = {
            contentBase: path.resolve(__dirname, "./src"),
            https: false,
            open: false
        }
    }

    return config;
};