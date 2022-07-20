<template>
<div>
  <Header/>
  <!-- 路由出口文件 -->
  <router-view></router-view>
  <!-- 处于这两个路由时才显示 -->
   <!-- v-show='$route.path=="/home"||$route.path=="/search"' -->
  <Footer v-show="$route.meta.show"/>
</div>
  
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
name:'App',
components:{
  Header,Footer
},mounted() {
  // 放在这里，三级分类请求只执行一次派发一个action
      this.$store.dispatch("categoryList");
},
}
</script>

<style>
</style>