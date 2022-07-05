const { defineConfig } = require('@vue/cli-service')
const target = 'https://carwash.iptime.org:8000';
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: "all",
    // proxy : {
    //   '/api' : {
    //       target: target,
    //         changeOrigin: true,
    //         pathRewrite : {
    //           '^/api' : ''
    //         }
    //    }
    // }
  },
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  },
  lintOnSave : false,
})
