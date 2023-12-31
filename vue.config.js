const { defineConfig } = require('@vue/cli-service');
// 引入vant
const { VantResolver } = require("unplugin-vue-components/resolvers");
const ComponentPlugin = require("unplugin-vue-components/webpack");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      // 按需引入element ui
      require('unplugin-element-plus/webpack')({
        // options
      }),
      ComponentPlugin({
        resolvers: [VantResolver()],
      })
    ]
  },
  /* 添加请求代理规则 */
  devServer: {
    proxy: {
      /* 博客相关的请求服务 */
      "/blogserve": {
        target: "http://localhost:8081",
        pathRewrite: {
          "^/blogserve": ""
        }
      },
    }
  }
})
