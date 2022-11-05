// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = {
  //是否在保存时语法检查
  lintOnSave: false,

  // 打包配置
  // publicPath: process.env.NODE_ENV === "production" ? "/vue/" : "./",

  //基本路径
  publicPath: "./",

  //生成的文件目录
  outputDir: 'dist',

  //静态文件目录
  assetsDir: './static',

  //index主页面路径
  // indexPath: './index.html',

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

