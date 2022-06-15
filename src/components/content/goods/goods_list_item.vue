<template>
  <div class="goods_list_item" @click="good_click">
      <!-- <img :src="goods_item.show.img" alt=""> -->
      <img :src="goods_item.image_url" alt="">
      <div class="goods_info">
          <p>{{goods_item.title}}</p>
          <span class="price">{{goods_item.price}}</span>
          <span class="collect">{{goods_item.cfav}}</span>
      </div>
  </div>
</template>

<script>

export default {
    props:{
        goods_item:{
            type: Object,
            default(){
                return {}
            }
        }
    },
    methods:{
      good_click(){
        // console.log(1);
        this.$router.push('/detail/' + this.goods_item.iid)
      }
    }
}
</script>

<style>
.goods_list_item {
    padding-bottom: 40px;
    position: relative;

    width: 48%;
}
.goods_list_item img {
    width: 100%;
    border-radius: 5px;
}
.goods_info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

.goods_info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

.goods_info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

.goods_info .collect {
    position: relative;
  }

.goods_info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>