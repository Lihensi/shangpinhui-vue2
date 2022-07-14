import Vue from 'vue'
import Vuex from 'vuex'
// 使用插件
Vue.use(Vuex);

// 引入小仓库
import home from './home'
import search from './search'
// const state={};

// const mutations={};

// const actions={};

// const getters={};


export default new Vuex.Store({
// state,mutations,actions,getters
modules:{
  home,search
}
})