// api统一管理
import requests from './request';
import mockRequests from './mockRequests'
// 三级联动接口
// /api/product/getBaseCategoryList get 无参数

// export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' });
export const reqCategoryList = () => {
  //箭头函数可以在程序任意地方使用,箭头函数返回即为服务器的数据
  //下面箭头函数返回值：返回的是什么? promise,即为返回服务器的数据
  //return关键字，千万别忘记书写，如果忘记书写，你在任意地方获取的都是undeinfed
  return requests({ method: 'get', url: '/product/getBaseCategoryList' });
}
// 获取banner（首页轮播图接口）
// export const reqGetBannerList=()=>mockRequests.get('/banner')
export const reqBannerList = () => mockRequests.get('/banner');

// floor数据
export const reqFloorList = () => mockRequests.get('/floor')
// 搜索模块search post请求 /api/list axios 带参数
// 至少是一个空对象
export const reqSearchInfo = (params) => requests({ url: '/list', method: 'post', data: params })

// 商品详情信息
// export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get'});
//详情模块商品的数据
export const reqDetailList = (skuId)=>requests({url:`/item/${skuId}`,method:'get'});


//加入购物车|将来修改商品个数的接口
export const reqAddOrUpdateCart = (skuId,skuNum)=>requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'});

// 获取购物车列表数据接口
export const reqCartList=()=>({url:'/cart/cartlist',method:'get'})