<template>
  <div class="bottom">
      <div class="left">
          <img src="~assets/img/detail/3.1店铺.svg" alt="" class="one">
          <span>店铺</span>
          <img src="~assets/img/detail/客服.svg" alt="" class="two">
          <span>客服</span>
      </div>
      <div class="right" @click="add_cart_list">加入购物车</div>
  </div>
</template>

<script>
export default {
    methods: {
        add_cart_list() {
            this.$emit('add_cart_list')
        }
    }
}
</script>

<style scoped>
.one {
    width: 30px;
    position: relative;
    left: 20px;
}
.two {
    width: 30px;
    position: relative;
    left: 20px;
}
.bottom {
    display: flex;
    flex: 1;
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 49px;
    width: 95%;
    height: 49px;
    margin: 0 auto;
    border-radius: 10px;
    background-color: #fff;
}
.left {
    flex: 1;
    border-radius: 10px;
    display: flex;
}
.left span {
    text-align: center;
    line-height: 49px;
    display: block;
    flex: 1;
}
.right {
    height: 100%;
    background-color: #0086f6;
    width: 100px;
    border-radius: 10px;
    line-height: 49px;
    text-align: center;
    font-size: 15px;
    color: #eee;
}
</style>