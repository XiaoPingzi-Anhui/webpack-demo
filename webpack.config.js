const path = require('path');
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map', // 开发环境开启后可直接定位代码错误警告源文件代码位置
  devServer: {
    static: path.join(__dirname, 'public'), // webpack-dev-server 在编译之后不会写入任何输出文件，而是将 bundle 文件保留在内存中，然后将它们作为可访问资源部署在 server 中，就像是挂载在 server 根路径上的真实文件一样
  },
  optimization: {
    runtimeChunk: 'single',
  },
  entry: {
    output:'./src/输出管理/index.js',
    print:'./src/输出管理/print.js',
    assets: './src/资源管理/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // 每次构建清除原打包文件
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
        ], // loader 执行顺序由后往前
      },
      { // 资源模块加载图片
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      { // 资源模块加载字体 其实可以和上方合并
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
      { // 自定义解析器替代特定的 webpack loader
        test: /\.toml$/i,
        type: 'json',
        parser: {
          parse: toml.parse,
        },
      },
      {
        test: /\.yaml$/i,
        type: 'json',
        parser: {
          parse: yaml.parse,
        },
      },
      {
        test: /\.json5$/i,
        type: 'json',
        parser: {
          parse: json5.parse,
        },
      },
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({ // 重新生成 html 文件，动态引入等
      title: 'Development',
    })
  ]
};