const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/2.output/index.js',
    print: './src/2.output/print.js',
  },
  output: {
    filename: '[name].bundle.js', // 可根据入口名生成不同 bundles
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins:[
    new HtmlWebpackPlugin({ // 重新生成 html 文件，动态引入等
      title: '管理输出',
    })
  ]
};