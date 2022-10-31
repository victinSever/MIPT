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

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
