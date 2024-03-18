const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js', // [name] what ever entry name is, can run npm build and it'll change the dist.js
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader', ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Elysium',
            filename: 'index.html',
            template: 'src/template.html',
        }),
    ],
}