import Vue from 'vue'
import App from './App.vue'
// 三级联动组件
import TypeNav from '@/components/TypeNav'
import router from '@/router'
// 引入仓库
import store from '@/store'
// 引入mockServejs
import '@/mock/mockServe'
import 'swiper/css/swiper.css';

// import {reqCategoryList} from '@/api'
// reqCategoryList();
// 注册为全局组件
Vue.component(TypeNav.name,TypeNav)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注册路由
  router,
  // 注册仓库
  store
}).$mount('#app')
