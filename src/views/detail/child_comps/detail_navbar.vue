<template>
  <navbar>
      <div slot="left">
          <img src="~assets/img/common/back.svg" alt="" class="back" @click="back">
      </div>
      <div slot="center" class="titles">
          <div v-for="(item,index) in titles" :key="item.id" class="titles_item" :class="{is_active:index==is_active_data}" @click="item_click(index)">
              {{item}}
          </div>
      </div>
  </navbar>
</template>

<script>
import navbar from 'components/common/navbar/navbar'
export default {
    components: {
        navbar
    },
    data() {
        return{
            titles:['商品','参数','评论','推荐'],
            is_active_data:0
        }
    },
    methods:{
        item_click(index){
            this.is_active_data=index
        },
        back(){
            this.$router.back()
        }
    }
}
</script>

<style>
.titles {
    display: flex;
}
.titles_item {
    flex: 1;
}
.is_active {
    /* color: var(--color-high-text) */
    color: white;
}
.back {
    margin-top: 10px;
}
</style>