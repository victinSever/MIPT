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
      // 第三方ip地址
      '/ip': {
        target: 'http://pv.sohu.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/ip': ''  
        }
      },
      // 文件服务器地址
      '/imageSever': {
        // http://flpt-file.oss-cn-chengdu.aliyuncs.com
        // http://222.177.66.230:9898
        target: 'http://flpt-file.oss-cn-chengdu.aliyuncs.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/imageSever': '' 
        }
      },
      '/sever':{
        target:'https://53r23232p6.goho.co',
        ws:true,
      },
    }
  }
}

