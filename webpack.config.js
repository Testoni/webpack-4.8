const webpack = require('webpack')

module.exports = {
    mode: 'development', // production
    entry: './src/main.js',
    output: {
        filename: 'main.js',
        path: __dirname + '/public'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', // add css into dom inject tag <style></style>
                    'css-loader' // @import, url() ...
                ]
            }
        ]
    }
}