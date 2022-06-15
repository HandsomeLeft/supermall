<template>
  <div id="detail">
    <div >
      <detail_navbar class="detail_navbar"></detail_navbar>
      <detail_swiper class="detail_swiper" :top_images="top_images"></detail_swiper>
      <div class="price">
          <span>￥{{this.cart_list[3]}}</span>
          <span class="two">{{this.cart_list[1]}}</span>
      </div>
      <div class="desc">
          <span>{{this.cart_list[2]}}</span>
      </div>
      <!-- <button @click="add_cart_list()">按钮</button> -->
      <detail_bottom_bar @add_cart_list="add_cart_list" />
      <div class="flxed" v-show="this.if_data">添加成功</div>
    </div>
       <div v-show="is_show" class="attention" @click="to_login()">
        <span class="attention1">您还未登录</span> <span class="attention2">(点击前往)</span></div>
  </div>
</template>

<script>
import detail_navbar from './child_comps/detail_navbar.vue'
import { get_detail,get_goods_detail,add_cart_list } from 'network/detail'
import detail_swiper from './child_comps/detail_swiper.vue'
import detail_bottom_bar from './child_comps/detail_bottom_bar'
export default {
    name:'detail',
    components: {
        detail_navbar,
        detail_swiper,
        detail_bottom_bar
    },
    data(){
        return {
            iid:null,
            top_images: [],
            // cart_list:['https://img12.360buyimg.com/n1/s450x450_jfs/t1/126423/17/23909/236205/62206f5bEb027007e/aa45654373db05cb.jpg','菠萝牌手机','1','127.00',2]

            cart_list: [],
            if_data: false,
            user_id:this.$store.state.user_id,
            is_show:false
        }
    },
    activated() {
        // console.log(this.$route.params);
        this.iid=this.$route.params.iid
        // get_detail('1m7s9c4').then(res=>{
        //     console.log(res);
        //     this.top_images=res.result.itemInfo.topImages
        //     console.log(this.top_images)
        // })
        get_goods_detail(this.iid).then(res=>{
            this.top_images = []
            this.cart_list = []
            this.top_images.push(res[0].top_image_list)
            this.top_images.push(res[0].top_image_list_two)
            this.top_images.push(res[0].top_image_list_three)
            // console.log(this.top_images);
            this.cart_list.push(res[0].top_image_list)
            this.cart_list.push(res[0].title)
            this.cart_list.push(res[0].desc)
            this.cart_list.push(res[0].price)
            this.cart_list.push(res[0].count)
            // console.log(this.cart_list);
        })
    },
    methods: {
        if_data_false() {
          this.if_data=false  
        },
        add_cart_list() {
            //判断是否登录
           if(this.$store.state.user_id){
            add_cart_list(this.cart_list[0], this.cart_list[1], this.cart_list[2], this.cart_list[3], this.cart_list[4],this.$store.state.user_id)
            let that=this
            that.if_data = true
            
            // this.if_data=false
            setTimeout(function () {
                that.if_data = false;
            }, 4000)
           }
           else{
            this.is_show=true
            setTimeout(()=>{
                this.is_show=false
            },2000)
            
            console.log('未登录');
           }
        },
        to_login(){
            this.$router.push(
        {
          path:'/login/',
          query:{search_in_cate:this.search_in_cate}
        }
      
      )
        }
    }
}
</script>

<style scoped>
.flxed {
    position: fixed;
    top: calc(46%);
    left: 40%;
    width: 80px;
    height: 30px;
    background-color: gray;
    border-radius: 10px;
    color: #eee;
    line-height: 30px;
    text-align: center;
}
.price {
    width: 95%;
    height: 100px;
    background-color: #0086f6;
    margin: 0 auto;
    border-radius: 20px ;
    margin-top: 15px ;
    color: #fff;
    line-height: 60px;
    font-size: larger;
}
.price span {
    position: relative;
}
.two {
    margin-left: 20px;
    overflow: hidden;
    font-size: small;
}

.desc {
    width: 95%;
    height: 30vh;
    background-color:#fff;
    margin: 0 auto;
    border-radius:20px 20px 0px 0px ;
    position: relative;
    top: -50px;
}
.desc span {
    position: relative;
    top: 20px;
}
.detail_navbar {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 1000;
    background-color: #0086f6;
}
.detail_swiper {
    margin-top: 44px;
}
/* 提示 */
.attention{
    background-color: grey;
    width: 200px;
    height: 40px;
    font-size: 20px;
    line-height: 40px;
    position: absolute;
    top: 50%;
    left: 25%;
   
    text-align: center;
    border-radius: 5px ;
}
.attention1{
    color: #eee;
}
.attention2{
    color: #6eb9fa;
}

</style>