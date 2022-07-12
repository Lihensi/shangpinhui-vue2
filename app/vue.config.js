const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    proxy:{
      '/api':{
        target:'http://zerolist.cn',
        // 路径重写
        // pathRewrite:{'^/api':''},
      },
    },
  },
})
