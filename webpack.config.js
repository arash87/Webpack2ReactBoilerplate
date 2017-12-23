const webpack = require('webpack');
const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');

let cleanOptions = {
    exclude: ['index.html'],
    verbose: false
}

module.exports = {
    entry: path.resolve(__dirname, "index.js"),
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: "/assets/",
        filename: 'bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin(['public'], cleanOptions)
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, "public"),
        port: 9000
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    }
    
};