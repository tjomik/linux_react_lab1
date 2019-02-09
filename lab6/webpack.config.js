const webpack = require("webpack");
const path = require('path');
const src = path.resolve(__dirname, 'src');
const build = path.resolve(__dirname, 'build');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        'webpack/hot/only-dev-server',
        'webpack-dev-server/client?http://localhost:8020',
        path.resolve(src, "index.js"),
        ],
    output: {
        path: build,
        filename: "bundle.js"
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.jpg$/,
                use:
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'static/img/[name].[ext]'
                        }
                    }
            },
            {
                test: /\.css$/,
                use:[
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            }
        ]
    },

    devServer: {
        //contentBase: build,
        compress: true,
        port: 8020
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "template.html",
        }),
    ]
};