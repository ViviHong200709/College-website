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
            ['static/output/dist/*.js'],　 //匹配删除的文件
            {
                root: __dirname,       　　　　　　　　　　//根目录
                // verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
                dry:      false        　　　　　　　　　　//启用删除文件
            }
        ),
    // new HtmlWebpackPlugin({title: 'Hot Module Replacement'}),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),

    // 打开浏览器
    new OpenBrowserPlugin({url: 'http://localhost:8080'})
  ]
  // devServer: {
  //   proxy: {
  //      // 凡是 `/api` 开头的 http 请求，都会被代理到 localhost:3001 上，由 koa 提供 mock 数据。
  //      // koa 代码在 ./mock 目录中，启动命令为 npm run mock
  //     '/': {
  //       target: 'http://localhost:3001',
  //       secure: false
  //     }
  //   },
  //   contentBase: path.resolve(__dirname,'../output/dist'), //本地服务器所加载的页面所在的目录
  //   port:3001,
  //
  //   // colors: true, //终k端中输出结果为彩色
  //   historyApiFallback: true, //不跳转
  //   inline: true, //实时刷新
  //   hot: true
  // }
});
