import { reqSearchInfo } from "@/api";
// search模块的小仓库
const state = {
  // 初始
  searchList: {},
};
const mutations = {
  SEARCHLIST(state, searchList) {
    state.searchList = searchList
  },
};
const actions = {
  // 获取search模块数据
  async getSearchList({ commit }, params = {}) {
    // 当前这个函数在调用获取服务器数据时，至少传递一个参数（）空对象
    // params形参，适当用户派发action的时候，第二个参数传递过来，至少是一个空对象
    let result = await reqSearchInfo(params);
    if (result.code == 200) {
      commit('SEARCHLIST', result.data);
    }
  }
};
const getters = {
  // 简化数组 a 是当前仓库的state
  goodsList(state) {
    // 有问题的，返回的可能是undefined,
    // 没有网络返回空数组
    return state.searchList.goodsList||[];
  },
  trademarkList(state) {
    // 有问题的，返回的可能是undefined
    return state.searchList.trademarksList||[];
  },
  attrsList(state) {
    // 有问题的，返回的可能是undefined
    return state.searchList.attrsList||[];
  },
};
export default {
  state, mutations, actions, getters
}