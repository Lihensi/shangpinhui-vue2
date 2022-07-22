import { reqCategoryList, reqBannerList,reqFloorList } from "@/api";
import { result } from "lodash";
// home模块的小仓库
let state = {
  // 根据接口返回值初始化
  categoryList: [],
  // 轮播图数据
  bannerList: [],
  // floor
  floorList:[],
};
let mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  BANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  FLOORLIST(state, floorList) {
    state.floorList = floorList;
  },
};
// 通过api里面的接口函数调用，向服务器发请求，获取服务器的数据
let actions = {
  async categoryList({ commit }) {
    let result = await reqCategoryList();
    if (result.code == 200) {
      commit("CATEGORYLIST", result.data)
    }
  },
  async bannerList({ commit }) {
    let result = await reqBannerList();
    if (result.code == 200) {
      commit("BANNERLIST", result.data)
    }
  }, async floorList({ commit }) {
    let result = await reqFloorList();
    if (result.code == 200) {
      commit("FLOORLIST", result.data)
    }
  },
};
let getters = {};
export default {
  state, mutations, actions, getters
}