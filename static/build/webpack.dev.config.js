var merge = require('webpack-merge')
var webpack = require('webpack')
var baseWebpackConfig = require('./webpack.base.config');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path=require('path');
module.exports = merge(baseWebpackConfig, {

  devtool: 'source-map',
  plugins: [

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new CleanWebpackPlugin(['dist']),
    new CleanWebpackPlugin(
            ['/static/output/dist/*.js'],　 //匹配删除的文件
            {
                root: __dirname,       　　　　　　　　　　//根目录
                // verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
                dry:      false        　　　　　　　　　　//启用删除文件
            }
        ),

    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // 打开浏览器
    new OpenBrowserPlugin({url: 'http://localhost:8080'})
  ]

});
