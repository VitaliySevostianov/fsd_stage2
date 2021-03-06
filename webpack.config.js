const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
require('dotenv').config();

module.exports = {
    entry: __dirname + "/src/index.js", // webpack entry point. Module to start building dependency graph
    output: {
        path: __dirname + '/dist', // Folder to store generated bundle
        filename: './bundle.js',  // Name of generated bundle after build
        publicPath: '' // public URL of the output directory when referenced in a browser
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: [
                    /node_modules/
                ]
            },

            {
                test: /\.(sass|scss)$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                options: {
                    extract: true,
                    publicPath: '/'
                }
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            },

        ]
    },
    plugins: [  // Array of plugins to apply to build chunk
        new HtmlWebpackPlugin({
            title: 'UI Kit',
            template: `./src/index.pug`
        }),
    ],
    devServer: {  // configuration for webpack-dev-server
        contentBase: './src/index.pug',  //source of static assets
        port: 3000, // port to run dev-server
    } 
  };
  