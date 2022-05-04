<template>
  <div class="recommend">
      <div v-for="item in recommends" :key="item.id" class="item">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
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

<style>
.recommend {
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 15px 0 30px;
    border-bottom: 8px solid #eee;
}
.item {
    flex: 1;
}
.item img {
    width: 70px;
    margin-bottom: 10px;
}
</style>