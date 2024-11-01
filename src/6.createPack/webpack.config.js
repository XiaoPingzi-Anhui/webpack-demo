const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-numbers.js',
    library: { // 打包库有一个不同的地方——需要通过 output.library 配置项暴露从入口起点导出的内容。
      name:"webpackNumbers",
      type: 'umd', // type 设置成 umd 使其可以通过 CommonJS、AMD 模块以及脚本标签使用。
    }, 
  },
  externals: {
    // 外部化 lodash, 不把 lodash 打包到自身库，而是把 lodash 当作 peerDependency，使用者应该已经自行安装过 lodash
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
  },
};