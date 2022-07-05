<template>
<div>
  <Header></Header>
  <!-- 路由出口文件 -->
  <router-view></router-view>
  <!-- 处于这两个路由时才显示 -->
  <!--  v-show='$route.path=="/home"||$route.path=="/search"' -->
  <Footer></Footer>
</div>
  
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
name:'App',
components:{
  Header,Footer
}
}
</script>

<style>
</style>