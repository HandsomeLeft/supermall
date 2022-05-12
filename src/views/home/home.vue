<template>
<div id="home">
  <navbar class="home_nav">
    <div slot="center">SuperMall</div>
  </navbar>

  <scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true" @scroll="content_scroll" @pullingUp="load_more">
    <home_swiper :banners="banners"></home_swiper>
    <recommend_views :recommends="recommends"></recommend_views>
    <feature_view/>
    <tab_control :titles="titles" class="tab_control" @tab_click="tab_click"></tab_control>
    <goods_list :goods="showGoods"></goods_list>
  </scroll>

  <back_top @click.native="top_click" v-show="is_show_top"></back_top>
    
</div>
</template>

<script>
import navbar from 'components/common/navbar/navbar'
import home_swiper from './child_comps/home_swiper'
import recommend_views from './child_comps/recommend_views'
import feature_view from './child_comps/feature_view'
import tab_control from 'components/common/tab_control/tab_control'
import goods_list from 'components/content/goods/goods_list'
import scroll from 'components/common/scroll/scroll'
import back_top from 'components/content/back_top/back_top'


import {getHomeMultidata,getHomeGoods} from 'network/home'







export default {
  components:{
    navbar,
    home_swiper,
    recommend_views,
    feature_view,
    tab_control,
    goods_list,
    scroll,
    back_top
  },
  data(){
    return {
      banners: [],
      recommends: [],
      titles:['流行','新款','精选'],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType: 'pop',
      b_s:null,
      is_show_top:false
    }
  },
  computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
  created(){
    this.getHomeMultidata()
    // request({
    //   url: '/home/multidata'
    // }).then (res=>this.message=res)
    
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  
  methods:{
    tab_click(index){
      switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
    },
    getHomeMultidata(){
      getHomeMultidata().then(res => {
          // this.result = res;
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
    })
    },
    getHomeGoods(type){
      const page=this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{
        // console.log(res);
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page+=1
        this.$refs.scroll.b_s.finishPullUp()
      })
    },
    top_click(){
      this.$refs.scroll.b_s.scrollTo(0,0,500)
    },
    content_scroll(position){
      // console.log(position);
      this.is_show_top=(-position.y)>1000
    },
    load_more(){
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.b_s.refresh()
    }
  }
}
</script>

<style scoped>
.home_nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
#home {
  padding-top: 44px;
  position: relative;
  height: 100vh;
}
.home_nav {
  background-color: var(--color-tint);
  color: #fff;
}
.tab_control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  /* height: 300px; */
  overflow: hidden;
  
}
</style>