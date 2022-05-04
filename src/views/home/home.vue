<template>
<div id="home">
  <navbar class="home_nav">
    <div slot="center">SuperMall</div>
  </navbar>

  <home_swiper :banners="banners"></home_swiper>

  <recommend_views :recommends="recommends"></recommend_views>
</div>
</template>

<script>
import navbar from 'components/common/navbar/navbar'
import home_swiper from './child_comps/home_swiper'
import recommend_views from './child_comps/recommend_views'

import {getHomeMultidata} from 'network/home'


export default {
  components:{
    navbar,
    home_swiper,
    recommend_views
  },
  data(){
    return {
      banners: [],
      recommends: []
    }
  },
  created(){
    // request({
    //   url: '/home/multidata'
    // }).then (res=>this.message=res)
    getHomeMultidata().then(res => {
          // this.result = res;
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
    })
  }
}
</script>

<style>
.home_nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>