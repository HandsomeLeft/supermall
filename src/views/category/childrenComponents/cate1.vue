<template>
   <ul >
      <li class="cate_item" v-for="(item,index) in cate1_items" 
      :key='index'
      :class="{active:index===current}"
      @click="colorChange(index)"
       >{{item}}</li>
   </ul>
</template>
<script>
export default {
    name:'cate1',
    data(){
        return{
            cate1_items:['推荐分类','品牌','外设产品','电脑整机','电脑配件','游戏设备','网络产品','办公设备','手机通讯','手机配件','摄影摄像','数码配件','智能设备','电子教育','电脑工具',],
            current:0
        }
    },
    methods:{
        colorChange(index){
            this.current=index;
          
            //将点击事件传给父
            this.$emit('cate1item_click',index)
          
        }
    }
}
</script>
<style scoped>
    .cate_item{
        box-sizing: border-box;
        font-size: 16px;
        text-align: center;
        line-height: 40px;
        height: 40px;
        /* border: 1px solid rgb(202, 202, 202); */
        border-radius: 0 10px 10px 0;
        background-color: #eee;
        margin-left: 1px;
        overflow: hidden;
    }
    .active{
        
        color: #146fc3;
        background-color: #fff;
         border: 1px solid rgb(255, 255, 255);
        border-radius: 0;
        border-left:5px solid #3692e8;
        border-radius: 2px 0 0 2px;
      
    }
    .left {
        list-style: none;
  /* width: 80%; */
  background-color: #eee;
  /* margin-left: 10px; */
  box-shadow: 20px;
}
</style>