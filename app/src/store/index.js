import Vue from 'vue'
import Vuex from 'vuex'
// 使用插件
Vue.use(Vuex);

// 引入小仓库
import home from './home'
import search from './search'
import detail from './detail';
import shopcart from './shopcart'
import trade from './trade';
import user from './user';

export default new Vuex.Store({
// state,mutations,actions,getters
modules:{
  home,search,detail,shopcart,trade,user
}
})