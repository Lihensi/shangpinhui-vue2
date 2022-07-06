// 配置路由
import Vue from "vue";
import VueRouter from 'vue-router'
// 使用插件
Vue.use(VueRouter)
// 引入路由文件
import Home from '@/pages/Home'
import Search from "@/pages/Search"
import Login from '@/pages/Login'
import Register from '@/pages/Register'

// 把VueRouter原型对象的push,先保存一份
let originPush=VueRouter.prototype.push;
// 重写push\replace
VueRouter.prototype.push=function(location,resolve,reject){
  // alert("123")
  if(resolve&& reject){
    originPush.call(this,location,resolve,reject)
  }else{
    originPush.call(this,location,()=>{},()=>{});
  }
}
VueRouter.prototype.replace=function(location,resolve,reject){
  if(resolve&&reject){
    originPush.call(this,location,resolve,reject)
  }else{
    originPush.call(this,location,()=>{},()=>{});
  }
}


export default new VueRouter({
  // 配置路由
  name:'index',
  routes: [
 {
  path:'/home',
  component:Home,
  meta:{show:true}
 },
 {
  name:'search',
  path:'/search/:keyword?',
  component:Search,
  meta:{show:true},
  // props:true
 },
{
  path:'/login',
  component:Login,
  meta:{show:false}
 },{
  path:'/register',
  component:Register,
  meta:{show:false}
 },
//  重定向，访问/ 立马让他回到首页
{
  path:'*',
  redirect:'/home'
}
  ]
})