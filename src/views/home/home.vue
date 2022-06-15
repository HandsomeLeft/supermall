<template>
<div id="home">
  <navbar class="home_nav">
    <div slot="center">DM超级商城 beta</div>
    <div slot="right" @click="sreach()">
    <img src="~assets/img/home/搜索.svg" alt="">
    </div>
  </navbar>

  <tab_control :titles="titles" class="tab_control" @tab_click="tab_click" ref="tab_control" v-show="is_tab_fixed"></tab_control>

  <scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true" @scroll="content_scroll" @pullingUp="load_more">
    <home_swiper :banners="banners" @swiper_img_load="swiper_img_load"></home_swiper>
    <recommend_views :recommends="recommends"></recommend_views>
    <feature_view/>
    <tab_control :titles="titles" class="tab_control" @tab_click="tab_click" ref="tab_control" ></tab_control>
    <goods_list :goods="showGoods" class="goods_list"></goods_list>
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


import {getHomeMultidata,getHomeGoods,get_home_swiper,get_home_goods,get_recommoned_data} from 'network/home'







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
      is_show_top:false,
      tab_offset_top:0,
      is_tab_fixed:false
    }
  },
  computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
  created(){
    this.get_recommoned_data()
    this.get_home_swiper()
    // request({
    //   url: '/home/multidata'
    // }).then (res=>this.message=res)
    
    // this.getHomeGoods('pop')
    // this.getHomeGoods('new')
    // this.getHomeGoods('sell')
    this.get_home_goods('pop')
    this.get_home_goods('new')
    this.get_home_goods('sell')

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
    // getHomeMultidata(){
    //   getHomeMultidata().then(res => {
    //       // this.result = res;
    //       // this.banners = res.data.banner.list;
    //       // this.banners=res
    //       this.recommends = res.data.recommend.list;
    // })
    // },
    get_recommoned_data(){
      get_recommoned_data().then(res => {
          // this.result = res;
          // this.banners = res.data.banner.list;
          // this.banners=res
          this.recommends = res;
    })
    },
    get_home_swiper(){
      get_home_swiper().then(res=>{
        this.banners = res
      })
    },
    // getHomeGoods(type){
    //   const page=this.goods[type].page+1
    //   getHomeGoods(type,page).then(res=>{
    //     console.log(res.data.list);
    //     this.goods[type].list.push(...res.data.list)
    //     this.goods[type].page+=1
    //     this.$refs.scroll.b_s.finishPullUp()
    //   })
    // },
    get_home_goods(type){
      const page=this.goods[type].page+1
      get_home_goods(type,page).then(res=>{
        // console.log(...res);
        this.goods[type].list.push(...res)
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
      this.is_tab_fixed=(-position.y)>this.tab_offset_top
    },
    load_more(){
      // this.getHomeGoods(this.currentType)
      this.get_home_goods(this.currentType)
      this.$refs.scroll.b_s.refresh()
    },
    swiper_img_load(){
      // console.log(this.$refs.tab_control.$el.offsetTop);
      this.tab_offset_top=this.$refs.tab_control.$el.offsetTop;
    },
    sreach() {
      // console.log(1);
      this.$router.replace('/sreach')
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
.home_nav img {
  width: 30px;
  position: relative;
  top: 8px;
  right: -4px;
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
  width: 93%;
  margin: 0 auto;
  /* margin-top: 8px; */
  border-radius: 10px 10px 0px 0px ;
}
.goods_list {
  width: 93%;
  margin: 0 auto;
  border-radius: 0px 0px 10px 10px;
  background-color: #fff;
}
.content {
  position: absolute;
  top: 54px;
  bottom: 49px;
  left: 0;
  right: 0;
  /* height: 300px; */
  overflow: hidden;
  
}
.fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
}

</style>