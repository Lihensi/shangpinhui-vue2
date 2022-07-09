<template>
  <div>
    <!-- 全局组件直接使用，无须引用 -->
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
  </div>
</template>

<script>
// 引用其他组件
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
export default {
name:'index',
components:{
  ListContainer,Recommend,Rank
}
}
</script>

<style>

</style>