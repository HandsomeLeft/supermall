<template>
  <div class="recommend">
      <div v-for="item in recommends" :key="item.id" class="item">
          <a :href="item.image_link">
              <img :src="item.image_url" alt="">
              <span>{{item.title}}</span>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
.recommend {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    text-align: center;
    font-size: 15px;
    padding: 15px 0 10px;
    background-color: #fff;
    width: 93%;
    margin: 0 auto;
    border-radius: 10px;
    /* border-top: 8px solid #eee;
    border-bottom: 8px solid #eee;
    border-left: 8px solid #eee;
    border-right: 8px solid #eee; */
    /* border-radius: 25px; */
}
.item {
    width: 50%;
    height: 44px;
    margin-bottom: 40px;
}
.item a {
    width: 100%;
    height: 100%;
}
.item a img {
    width: 65px;
    border-radius: 50px;
    margin-bottom: 10px;
    position: relative;
    top:10px;
    right: -65px;
}
span {
    width: 50px;
    
    position: relative;
    left: -70px;
    top: -25px;
    /* top: 50; */
}
</style>