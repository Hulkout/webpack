const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");
const { title } = require('process');

const base = require('./webpack.config.base.js')

module.exports = {
    ...base,//把base所有属性放过来 再去覆盖他的属性
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    mode: 'development',
    module: {
        rules: [
            ...base.module.rules,
            {test: /\.css$/i,
                use: ['style-loader', "css-loader"]}
        ],
    },

}




 