<template>
  <div>
    <!-- 全局组件直接使用，无须引用 -->
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <!-- props父子组件中通信 -->
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :list='floor'/>
    <!-- 有两组数据，会遍历，写一个就行 -->
    <!-- <Floor/> -->
    <Brand/>
  </div>
</template>

<script>
// 引用其他组件
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
import {mapState} from 'vuex'

export default {
name:'index',
components:{
  ListContainer,Recommend,Rank,Like,Floor,Brand
},mounted() {
  // 派发action，floor组件you俩个，在home父组件里派发
  this.$store.dispatch('floorList')
},
computed:{
...mapState({
  floorList:state=>state.home.floorList
})
},
}
</script>

<style>

</style>