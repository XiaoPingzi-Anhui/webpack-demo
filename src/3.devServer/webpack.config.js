const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  // watch: true, // 观察模式唯一的缺点是需要手动刷新浏览器才能看到修改后的实际效果
  devServer: { // webpack-dev-server 能够实时重新加载
    static: './dist', 
    // webpack-dev-server 会将在 output.path 中定义的目录中的 bundle 文件作为可访问资源部署在 server 中，即文件可以通过 http://[devServer.host]:[devServer.port]/[output.publicPath]/[output.filename] 进行访问。
    open: true, // 开启后打包内容不会输出到磁盘，而是保存在内存中
  },
  optimization: {
    runtimeChunk: 'single',
  },
  devtool: 'inline-source-map', // 开发环境开启 source map,可以帮助将编译后的代码映射回原始源代码
  entry: {
    index: './src/3.devServer/index.js',
    print: './src/3.devServer/print.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'dev-server',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
};