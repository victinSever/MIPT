/**
 * 引入vue
 */
import Vue from 'vue'
import App from './App.vue'

/**
 * 引入vuex
 */
import store from '@/store'

/**
 * 引入路由vue-router
 */
import router from '@/router'

/**
 * 引入element-ui
 */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

/**
 * 引入mavon-editor，md富文本编辑器
 */
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)

/**
 * 引入md文章渲染器样式
 */
import 'github-markdown-css/github-markdown.css' //github语法
import hljs from 'highlight.js' // 引入代码高亮
// 如果开启了typescript 需要额外安装 npm install @types/highlight.js
// 通过 import * as hljs from 'highlight.js' 引入
Vue.directive('highlight', function (el) {
  const blocks = el.querySelectorAll('pre code')
  blocks.forEach(block => {
    hljs.highlightBlock(block)
  })
})
// 也可以把这自定义指令封装 通过Vue.use()，来注入

// 引入echarts
// import * as echarts from 'echarts';
// Vue.prototype.$echarts = echarts

/**
 * 引入npgrogress
 */
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.prototype.$nprogress = nprogress

/**
 * 对axios做拦截处理，加上进度条和token
 */
import axios from 'axios';
// 添加请求拦截器
axios.interceptors.request.use(config => {
  nprogress.start()
  return config;
}, error => {
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(response => {
  nprogress.done()
  return response;
}, error => {
  return Promise.reject(error);
});


/**
 * 绑定一个bus，实现全局总线通信
 */
Vue.prototype.$bus = new Vue()

/**
 * 关闭生产提示
 */
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
