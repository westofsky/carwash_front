const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: "all"
  },
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  },
  lintOnSave : false,
})
