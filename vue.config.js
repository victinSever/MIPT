// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = {
  lintOnSave: false, //关闭语法检查

  devServer: {
      proxy: {
        // 第三方接口获取用户ip地址
      '/ip': {
        target: 'http://pv.sohu.com', //服务端地址
        ws: true,
        changeOrigin: true, // 允许跨域
        pathRewrite: {
         '^/ip': ''   // 标识替换，使用 '/ip' 代替真实的接口地址
        }
      }
    }
  }
}

