const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");
const { title } = require('process');

module.exports = {
    
    entry: './src/index.js',//入口文件
    output: {//输出
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.[contenthash].js'
    },
    plugins: [//插件都用得到
        new HtmlWebpackPlugin({
            title: 'My App',
            template: 'src/assets/index.html'
        }),
    ],
}

