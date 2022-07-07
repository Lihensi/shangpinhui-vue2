import Vue from 'vue'
import App from './App.vue'
// 三级联动组件
import TypeNav from '@/pages/Home/TypeNav'
import router from '@/router/index'

// 注册为全局组件
Vue.component(TypeNav.name,TypeNav)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注册路由
  router,
}).$mount('#app')
