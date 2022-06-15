<template>
  <swiper class="home_swiper">
    <swiper-item v-for="item in banners" :key="item.id">
      <a :href="item.image_link"></a>
      <img :src="item.image_url" alt="" @load="img_load()">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods:{
      img_load(){
        // console.log(111);
        this.$emit('swiper_img_load')
      }
    }
  }
</script>

<style>
.home_swiper {
  width: 93%;
  margin: 0 auto;
  border-radius: 10px;
  
  margin-bottom: 10px;
}
</style>