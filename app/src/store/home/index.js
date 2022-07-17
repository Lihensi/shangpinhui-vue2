import {reqCategoryList} from "@/api";
// home模块的小仓库
let state = {
  // 根据接口返回值初始化
  categoryList: [],
};
let mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  }
};
// 通过api里面的接口函数调用，向服务器发请求，获取服务器的数据
let actions = {
  async categoryList({ commit }) {
    let result = await reqCategoryList();
  if(result.code==200){
    commit("CATEGORYLIST",result.data)
  }
  }
};
let getters = {};
export default {
  state, mutations, actions, getters
}