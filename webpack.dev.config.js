const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var webSite = {
    publicPath:'http://127.0.0.1:8080'
};
var config = {
    /*入口*/
    //entry: path.resolve(__dirname, 'src/index.js'),
    entry: path.resolve(__dirname, './src/index.js'),
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: ['babel-loader?cacheDirectory=true'],
                include: path.join(__dirname, 'src/')
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
                include: path.resolve(__dirname, 'src/')
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: 'file-loader?limit=81920',
                include: path.resolve(__dirname, 'src/')
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.optimize.UglifyJsPlugin()
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html'),
            title:'首页'
        }),
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist/'),
        publicPath: webSite.publicPath,
        hot:true,
        host:'0.0.0.0'

    },
    resolve:{
        alias:{
            pages: path.join(__dirname,'src/pages'),
            assets: path.join(__dirname,'src/assets')
        }
    }
};

module.exports = config;
