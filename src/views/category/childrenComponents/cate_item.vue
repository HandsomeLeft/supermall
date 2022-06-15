<template>
  <div class="cate_item" @click="search()">
    <div class="cate_img">
      <img :src="cateitems.url" alt="">
    </div>
    <div class="cate_text">
      {{ cateitems.name }}
    </div>
  </div>
</template>
<script>
export default {
  name: "cate_item",
  props: {
    cateitems: {
      type: Object,
      default: [],
    },
  },
  methods:{
    search(){
      this.$router.push(
        {
          path:'/sreach/',
          query:{search_cate:this.cateitems.name}
        }
      
      )
     
    }
  }
};
</script>
<style scoped>
.cate_item {

  width: 50%;
  box-sizing: border-box;
  font-size: 13px;
  height: 100px;
  text-align: center;
}
img{
  width: 45%;
}
</style>
