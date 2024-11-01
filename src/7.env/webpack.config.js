const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  // 要使用 env 变量，你必须将 module.exports 转换成一个函数
  console.log('Goal: ', env.goal); // 'local'
  console.log('Production: ', env.production); // true

  return {
    mode: 'development',
    entry: {
      index: './src/7.env/index.js',
    },
    optimization: {
      // optimization.runtimeChunk 选项将 runtime 代码拆分为一个单独的 chunk。将其设置为 single 以便为所有 chunk 创建一个 runtime bundle
      runtimeChunk: 'single',
      splitChunks: {
      //由于像 lodash 或 react 这样的第三方库很少像本地源代码一样频繁修改，因此通常推荐将第三方库提取到单独的 vendor chunk 中。这一步将减少客户端对服务器的请求
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    output: {
      filename: '[name].[contenthash].js', // [contenthash] 可在文件名上加上内容 hash,保证文件修改后浏览器缓存不命中
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    plugins:[
      new HtmlWebpackPlugin({ // 重新生成 html 文件，动态引入等
        title: 'env',
      })
    ]
  };
};