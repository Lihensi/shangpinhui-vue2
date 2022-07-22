<template>
  <div class="swiper-container" ref="cur">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(carousel,index) in list" :key="carousel.id">
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Carousel",
  props: ["list"],
    watch: {
    // 立即监听，不管数据是否变化一上来就监听一次，
    // 因为是父组件给的，数据不变
    list: {
      immediate:true,
            handler(newValue, oldValue) {
        this.$nextTick(() => {
          var mySwiper = new Swiper(
            this.$refs.cur,
            {
              // direction: 'vertical', // 垂直切换选项
              loop: true, // 循环模式选项

              // 如果需要分页器
              pagination: {
                el: ".swiper-pagination",
                // 点小球可以切换
                clickable: true,
              },

              // 如果需要前进后退按钮
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },

              // 如果需要滚动条
              // scrollbar: {
              //   el: '.swiper-scrollbar',
              // },
            }
          );
        });
      },
    },
  },
};
</script>

<style>
</style>