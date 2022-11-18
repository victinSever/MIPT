import Vue from 'vue'
import App from './App.vue'

//引入vuex
import store from '@/store'

//引入路由
import router from '@/router'

//引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

// 引入mavon-editor，md富文本编辑器
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)

// 引入md文章渲染器样式
import 'github-markdown-css/github-markdown.css'

// 引入代码高亮
import hljs from 'highlight.js'
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
import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
