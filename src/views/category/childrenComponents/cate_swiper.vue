 <template>
  <Swiper class="cate_swiper">
    <Swiper-item v-for="(item) in imgs" :key="item">
        <img :src="item" alt="">
    </Swiper-item>
  <!-- <swiper-item  >
            <img src="@/assets/img/category/1.jpg" alt="">
            <img :src="imgs[0]" alt="">
        </swiper-item>
          <swiper-item >
            <img src="@/assets/img/category/3.webp" alt="">
        </swiper-item>
          <swiper-item >
            <img src="@/assets/img/category/4.webp" alt="">
        </swiper-item>
          <swiper-item >
            <img src="@/assets/img/category/5.webp" alt="">
        </swiper-item> -->
  </Swiper>
</template>
<script>
import { Swiper, SwiperItem } from "@/components/common/swiper/index";


export default {
  name: "homeswiper",
  components: {
    Swiper,
    SwiperItem
    
  },
 
  data() {
    return {
      imgs:['https://img12.360buyimg.com/babel/s1580x830_jfs/t1/197129/23/24172/73398/629841d8Ea7fdae27/cd83ae5e29527637.jpg!cc_1580x830.webp',
      '	https://img12.360buyimg.com/babel/s1580x830_jfs/t1/20931/23/16800/58962/62988a46Ecbe69245/04764ae6d67523d0.jpg!cc_1580x830.webp',
      '	https://img20.360buyimg.com/babel/s1580x830_jfs/t1/67793/35/18938/70567/62987bc2E0caa9cff/dfd620937596ca7a.jpg!cc_1580x830.webp',
      'https://img14.360buyimg.com/babel/s1580x830_jfs/t1/184940/29/23510/91245/6295c06eE7c88d9bb/a4dfd3a62291367c.jpg!cc_1580x830.webp'
      ]
    };
  },
 
};
</script>
<style scoped>
    .cate_swiper{
        width: 80%;
        margin: 0 auto;
        padding-top: 10px;
        background-color: #fff;
        height: 120px;
    }
    img{
        border-radius: 10px;
    }
</style>
 
  
  
  
  
 