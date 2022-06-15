<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item 
      v-for="(item,index) in cartList" :index="index" 
      :key="index" 
      :item-info="item"
      :list="cartList"/>
    </scroll>
    
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/scroll'
  import CartListItem from './CartListItem.vue'
  import { get_cart_list } from 'network/cart'
  
  export default{
    name:"CartList",
    components:{
      Scroll,
      CartListItem
    },
    activated(){
      // this.$refs.scroll.refresh()
      this.get_cart_list(this.$store.state.user_id)
  },
  // created() {
  //   this.get_cart_list(this.$store.state.user_id)
  // },
  data() {
    return {
      cartList: [],
      tatal_price:0   
    }     
  },
  methods: {
    get_cart_list(user_id) {
      this.cartList=[]
      get_cart_list(user_id).then(res=> {
        this.cartList = res
        // this.$store.commit("user_id_change", res.message.id);
        // console.log(this.cartList);
        let number = 0
        this.tatal_price=0
        for(let item of this.cartList){
        // console.log(Number(item.price));
          
          this.tatal_price += Number(item.price)
          number++
          // console.log(number);
        
        }
        
        this.$store.commit("total_number_change", number);
        this.$store.commit("total_price_change", this.tatal_price);

      // console.log(this.tatal_price);
      // console.log(1);
      })
      
    }
      
    }
  }
</script>

<style scoped>
  .cart-list{
    background-color: #eee;
  }
  .content{
    height: calc(100vh - 44px - 49px - 40px);
    overflow: hidden;
  } 

</style>