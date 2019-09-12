const path = require('path');


// 导入内存生成html的插件
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  devServer:{
    open : true
  },
  plugins:[
    new htmlWebpackPlugin({
      template:path.join(__dirname,'./src/index.html'),
      filename : "index.html"
    })
  ]
};