// 配置路由
import Vue from "vue";
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import routes from './routes'
// 使用插件


// 把VueRouter原型对象的push,先保存一份
import store from '@/store'
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 重写push\replace
VueRouter.prototype.push = function (location, resolve, reject) {
  // alert("123")
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => { }, () => { });
  }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(this, location, () => { }, () => { });
  }
}

//第二步:暴露VueRouter类的实例
//对外暴露一个路由器,实质是VueRouter类的实例,一个路由器可以管理多个路由
export default new VueRouter({
  //配置路由
  routes,
  //设置滚动条的位置
  scrollBehavior(to, from, savePosition) {
    //滚动行为这个函数,需要有返回值,返回值为一个对象。
    //经常可以设置滚动条x|y位置 [x|y数值的设置一般最小是零]
    return {  y: 0 };
  }
});
