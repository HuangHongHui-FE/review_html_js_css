// webpack webpack-cli webpack-dev-server html-webpack-plugin

const HtmlWebpackPlugin = require('html-webpack-plugin'),
    { resolve } = require('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'src/index.html')
        })
    ],
    devServer: {
        contentBase: './',
        open: true
    }
}