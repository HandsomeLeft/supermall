<template>
  <div class="cart">

    <!-- 导航栏 -->
    <nav-bar class="nav-bar">
      <!-- <div slot="center">购物车{{Length}}</div> -->
      <div slot="center">购物车({{this.$store.state.number}})</div>
    </nav-bar>

    <!-- 商品 -->
    <cart-list />
    <!-- 汇总 -->
    <cart-bottom-bar v-show="is_show" />
    <div class="attention" v-show="!is_show">
      登录一下，你的购物车开起来~<span class="to_login" @click='to_login'>登录</span>
    </div>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/navbar'
  import CartList from './childComps/CartList'
  import CartBottomBar from './childComps/CartBottomBar.vue'

  export default {
    name:"cart",
    components:{
      NavBar,
      CartList,
      CartBottomBar
    },
    data(){
      return{
        is_show:true
      }
    },
    
    methods:{
    to_login(){
            this.$router.push(
        {
          path:'/login/',
        }
      )
        }
  },
    created(){
     
    },
  activated() {
      if(!this.$store.state.user_id){
            this.is_show=false
           }
           else{
            this.is_show=true;
           }
    }
  }
</script>

<style scoped>
  .nav-bar{
    background-color: #0086f6;
    color: #fff;
    font-weight: 700;
    /* margin-bottom: 10px; */
  }
  .attention{
    text-indent: 15px;
    width: 280px;
    height: 35px;
    font-size: 14px;
    line-height: 35px;
    background-color: #0086f6;
    position: absolute;
    top: 50%;
    left: 14%;
   color: #fff;
    border-radius:5px;
    
    
  }
  .to_login{
    text-indent: 0;
    display: inline-block;
  position: fixed;
  right: 11%;
    background-color: #fff;
    color: #0086f6;
    width: 50px;
    text-align: center;
    border-radius: 5px;
   
  }
</style>