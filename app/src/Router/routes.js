// 路由配置文件
// 引入路由文件
import Home from '@/pages/Home'
import Search from "@/pages/Search"
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Center from '@/pages/Center'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'

import MyOrder from '@/pages/Center/myOrder';
import TeamOrder from '@/pages/Center/teamOrder'

export default
  // 配置路由
  [

  {
    path: '/home',
    component: Home,
    meta: { show: true }
  },
  {
    name: 'search',
    path: '/search/:keyword?',
    component: Search,
    meta: { show: true },
    // props:true
  },
  {
    path: '/login',
    component: Login,
    meta: { show: false }
  }, {
    path: '/register',
    component: Register,
    meta: { show: false }
  },
    //  重定向，访问/ 立马让他回到首页
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/shopcart',
      component: ShopCart,
      meta: { show: true }
    },
    {
    path: '/addcartsuccess',
    // name: 'addcartsuccess',
    component: AddCartSuccess,
    meta: { show: true }
  },
  {
    path: '/detail/:skuId?',
    component: Detail,
    meta: { show: true }
  },
  {
    path: '/trade',
    component: Trade,
    meta: { show: true }
},
  {
    path: '/pay',
    component: Pay,
    meta: { show: true }
},
{
    path: '/paysuccess',
    component: PaySuccess,
    meta: { show: true }
},
{
  path: '/center',
  component: Center,
  meta: { show: true },
  //二级路由配置的地方
  children:[
       //我的订单
       {
            path:'myorder',
            component:MyOrder
       }
       ,
       {
           path:'teamorder',
           component:TeamOrder
       }
       ,
       {
           path:'/center',
           redirect:'/center/myorder'
       }
  ]
},
{
  path: '/communication',
  component: () => import('@/pages/Communication/Communication'),
  children: [
    {
      path: 'event',
      component: () => import('@/pages/Communication/EventTest/EventTest'),
      meta: {
       show: false
      },
    },
    {
      path: 'model',
      component: () => import('@/pages/Communication/ModelTest/ModelTest'),
      meta: {
          show: false
      },
    },
    {
      path: 'sync',
      component: () => import('@/pages/Communication/SyncTest/SyncTest'),
      meta: {
          show: false
      },
    },
    {
      path: 'attrs-listeners',
      component: () => import('@/pages/Communication/AttrsListenersTest/AttrsListenersTest'),
      meta: {
          show: false
      },
    },
    {
      path: 'children-parent',
      component: () => import('@/pages/Communication/ChildrenParentTest/ChildrenParentTest'),
      meta: {
          show: false
      },
    },
    {
      path: 'scope-slot',
      component: () => import('@/pages/Communication/ScopeSlotTest/ScopeSlotTest'),
      meta: {
          show: false
      },
    }
  ],
},

  ]
