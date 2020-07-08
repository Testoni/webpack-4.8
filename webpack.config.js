const webpack = require('webpack')

module.exports = {
    mode: 'development', // production
    entry: './src/main.js',
    output: {
        filename: 'main.js',
        path: __dirname + '/public'
    }
}