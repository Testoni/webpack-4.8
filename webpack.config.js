const modeDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Uglify = require('uglify-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimiza-css-assests-webpack-plugin')

module.exports = {
    mode: modeDev ? 'development' : 'production', // production - npm run build / npm run dev
    entry: './src/main.js',
    output: {
        filename: 'main.js',
        path: __dirname + '/public'
    },
    optimization: {
        minimizer: [
            new Uglify({
                cache: true,
                parallel: true
            }),
            new OptimizeCssAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/, // .css .scss .sass
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader', // add css into dom inject tag <style></style>
                    'css-loader', // @import, url() ...
                    'sass-loader'
                ]
            }
        ]
    }
}