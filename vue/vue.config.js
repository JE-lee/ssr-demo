const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const nodeExternals = require("webpack-node-externals");
const merge = require("lodash.merge");
const path = require('path')
const TARGET = process.env.RUN_TARGET === 'server' ? 'server' : 'client'
const isTargetServer = TARGET === 'server'
// ./public/index.html 需要用到
process.env.VUE_APP_RUN_TARGET = TARGET

const webapckConfig = {
  // 将 entry 指向应用程序的 server / client 文件
  entry: `./src/entry-${TARGET}.js`,
  // 对 bundle renderer 提供 source map 支持
  devtool: 'source-map',
  target: isTargetServer ? "node" : "web",
  node: isTargetServer ? undefined : false,
  output: {
    libraryTarget: isTargetServer ? "commonjs2" : undefined
  },
  // https://webpack.js.org/configuration/externals/#function
  // https://github.com/liady/webpack-node-externals
  // 外置化应用程序依赖模块。可以使服务器构建速度更快，
  // 并生成较小的 bundle 文件。
  externals: isTargetServer
    ? nodeExternals({
        // 不要外置化 webpack 需要处理的依赖模块。
        // 你可以在这里添加更多的文件类型。例如，未处理 *.vue 原始文件，
        // 你还应该将修改 `global`（例如 polyfill）的依赖模块列入白名单
        whitelist: [/\.css$/]
      })
    : undefined,
  plugins: [isTargetServer ? new VueSSRServerPlugin() : new VueSSRClientPlugin()]
}

if (isTargetServer) {
  webapckConfig.optimization = {
    splitChunks: false
  }
}

module.exports = {
  outputDir: `dist-${TARGET}`,
  css: {
    extract: process.env.NODE_ENV === 'production'
  },
  configureWebpack: () => webapckConfig,
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap(options => {
        merge(options, {
          optimizeSSR: false
        });
      });
      
    // fix ssr hot update bug
    if (isTargetServer) {
      config.plugins.delete("hmr");
    }
  }
}