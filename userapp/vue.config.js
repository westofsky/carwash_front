const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: "all",
    host : '0.0.0.0',
    port : 80,
  },
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  },
  lintOnSave : false,
})
