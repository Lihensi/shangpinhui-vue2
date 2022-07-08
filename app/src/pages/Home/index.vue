<template>
  <div>
    <!-- 全局组件直接使用，无须引用 -->
    <TypeNav/>
    <ListContainer/>
  </div>
</template>

<script>
// 引用其他组件
import ListContainer from '@/pages/Home/ListContainer'
export default {
name:'index',
components:{
  ListContainer
}
}
</script>

<style>

</style>