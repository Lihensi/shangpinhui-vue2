import { reqCartList } from "@/api"
const state={
  cartList:[]
};
const mutations={
  GETCARTLIST(state,cartList){
    state.cartList=cartList
  }
};
const actions={
 async getCartList({commit}){
let result=await reqCartList();
if (result.code == 200) {
  commit('GETCARTLIST', result.code)
}
  },
};
const getters={
  cartList(state){
    return state.cartList[0]||{}
  },
  cartInfoList(state){

  }
};

export default{
  state,mutations,actions,getters
}