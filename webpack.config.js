const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js', // [name] what ever entry name is, can run npm build and it'll change the dist.js
    },
}