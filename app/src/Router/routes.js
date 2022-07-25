// 路由配置文件
// 引入路由文件
import Home from '@/pages/Home'
import Search from "@/pages/Search"
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'

export default
  // 配置路由
  [
    {
      path: '/detail/:skuId?',
      component: Detail,
      meta: { show: true }
    },
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
    }
  ]
