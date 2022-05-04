<template>
  <tabbar>
      <tabbar_item path='/home' active_color='deeppink'>
        <img slot='item-icon' src="~assets/img/tabbar/home.svg" alt="">
        <img slot='item-icon-active' src="~assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tabbar_item>
      <tabbar_item path='/category' active_color='deeppink'>
        <img slot='item-icon' src="~assets/img/tabbar/category.svg" alt="">
        <img slot='item-icon-active' src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tabbar_item>
      <tabbar_item path='/carts' active_color='deeppink'>
        <img slot='item-icon' src="~assets/img/tabbar/shopcart.svg" alt="">
        <img slot='item-icon-active' src="~assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tabbar_item>
      <tabbar_item path='/profile' active_color='deeppink'>
        <img slot='item-icon' src="~assets/img/tabbar/profile.svg" alt="">
        <img slot='item-icon-active' src="~assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tabbar_item>
    </tabbar>
</template>

<script>
import tabbar from 'components/common/tabbar/tabbar'
import tabbar_item from 'components/common/tabbar/tabbar_item'
export default {
components: { 
    tabbar,
    tabbar_item
   }
}
</script>

<style>

</style>