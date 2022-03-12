const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");
const { title } = require('process');

const base = require('./webpack.config.base.js')

module.exports = {
    ...base,//把base所有属性放过来 再去覆盖他的属性
    mode: 'production',
    plugins: [
        ...base.plugins,//没办法只能拿进来再加属性，不能直接覆盖
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
             ignoreOrder:false,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i, 
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
}




 