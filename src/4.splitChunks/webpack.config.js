const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/4.splitChunks/index.js',
    another: './src/4.splitChunks/another-module.js',
  },
  optimization: {
    // 可以把 index another 都引用的 lodash 分到单独的 bundle，减少打包体积
    splitChunks: {
      chunks: 'all',
    },
  },
  output: {
    filename: '[name].bundle.js', // 可根据入口名生成不同 bundles
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins:[
    new HtmlWebpackPlugin({ // 重新生成 html 文件，动态引入等
      title: '代码分割',
    })
  ]
};