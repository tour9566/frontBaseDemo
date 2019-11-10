const webpack = require("webpack");

module.exports = {
  publicPath: "./",
  pages: {
    index: {
      entry: "./src/main.js"
    }
  },
  devServer: {
    open: true,
    port: 4000
  },
  // transpileDependencies: ['vue-echarts', 'resize-detector'],
  lintOnSave: true,
  productionSourceMap: true,
  css: {
    // 向所有 Sass 样式传入共享的全局变量
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        modules: true,
        // 格式化类名：name是当前文件名称，hash是hash生成的字符串，长度为5
        localIdentName: "[name]-[hash]",
        // 在类名有中横线时，'only'在标签上绑定类名时只支持大驼峰，true：支持大驼峰也支持中括号命名
        camelCase: "only",
        data: '@import "@/style/index.scss";'
      }
    }
  },
  configureWebpack: {
    devtool: "sourcemap"
  },
  chainWebpack: config => {
    config.plugin("provide").use(webpack.ProvidePlugin, [
      {
        _: "lodash"
      }
    ]);
  }
};
