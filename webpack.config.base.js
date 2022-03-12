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
    module: {
        rules: [
            {
                test: /\.less$/i,//如果一个文件是以.开头的less结束
                use: [
                    // compiles Less to CSS
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ],
            },
            {
                test: /\.scss$/i, //如果一个文件是以.开头的scss结束
                use: [//使用这些
                    "style-loader",  //JS字符串转化为style标签               
                    "css-loader",//CSS代码转化为JS字符串
                    {
                        loader: "sass-loader",//sass代码转化为CSS代码
                        options: {
                            // Prefer `dart-sass`
                            implementation: require('dart-sass'),
                        },
                    },
                ],
            },
            {
                test: /\.styl/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "stylus-loader",
                        options: {
                            webpackImporter: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"],
            },
        ],
    },
}

