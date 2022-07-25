import { reqCartList } from "@/api"
const state={};
const mutations={};
const actions={
 async getCartList({commit}){
let result=await reqCartList();
if (result.code == 200) {
  commit('GETCARTLIST', result.code)
}
  },
};
const getters={};

export default{
  state,mutations,actions,getters
}
