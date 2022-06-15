<template>
  <div class="goods">
    <goods_list_item v-for="item in goods" :key="item.id" :goods_item="item"></goods_list_item>
  </div>
</template>

<script>
import goods_list_item from 'components/content/goods/goods_list_item'
import goods_list from 'components/content/goods/goods_list'


export default {
    components:{
    goods_list_item

    },
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
.goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }
</style>