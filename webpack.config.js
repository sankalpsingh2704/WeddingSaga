const path = require("path");
const webpack = require('webpack');
//require("babel-core/register");
require("babel-polyfill");


module.exports = {
    entry: ['babel-polyfill',path.resolve(__dirname, "src/index.js")],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // style-loader
                    { loader: 'style-loader' },
                    // css-loader
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    // sass-loader
                    { loader: 'sass-loader' }
                ]
            },
            {
                test: /\.m?js|jsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react',{
                            'plugins': ['@babel/plugin-proposal-class-properties']}]
                    }
                }
            }
        ]

    },
    plugins: [],
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        quiet: true,
        stats:{
            noInfo: true
        }
      }
}