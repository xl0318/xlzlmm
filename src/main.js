import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 导入路由
import router from './router/index'

new Vue({
  render: h => h(App),
  // 注入路由
  router
}).$mount('#app')
