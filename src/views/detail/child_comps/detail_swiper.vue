<template>
  <div class="detail_swiper">
      <Swiper class="swiper1">
          <SwiperItem v-for="item in top_images" :key="item.id">
              <img :src="item" alt="">
          </SwiperItem>
          <!-- <img src="top_images" alt=""> -->
      </Swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
    props: {
        top_images: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    components: {
        Swiper,
        SwiperItem
    },
    created(){
        this.top_images=[]
    },
    destroyed(){
        this.top_images=[]
    }
}
</script>

<style scoped>
.swiper1 {
    /* height: 300px;
    overflow: hidden; */
    width: 95%;
    margin: 0 auto;
    background-color: #eee;
    border-radius: 10px;
}
</style>