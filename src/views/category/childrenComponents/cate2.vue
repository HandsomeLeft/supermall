<template>
   <div  style=" background-color: rgb(255, 255, 255);" >
     
     <cateswiper ></cateswiper>
    
       <div class="introduce">常用分类</div>
       <scroll >
        <div class="show_cate" >
            <cate-item v-for="(item,index) in cates " :key="index"  :cateitems="item"></cate-item> 
       </div> 
       </scroll>
     
   </div>
</template>
<script>
import cateswiper from './cate_swiper.vue'
import cateItem from './cate_item.vue'
import scroll from "@/components/common/scroll/scroll.vue";
// 数据传导

export default {
    name:'cate2',
    components:{
        cateswiper,
        cateItem,
        scroll
    },
      props:{
          cates:{
              type:Array,
              default:[]
          },
        //    test:{
        //       type:String,
        //       default:''
        //   }
      },
    data(){
        return{
           
           
        }
    },
    methods:{
        
    },
    created(){
        // console.log(this.test);
    }
}
</script>
<style scoped>

.introduce{
    width: 80%;
    margin: 0 auto;
    height: 30px;
    font-size: 16px;
    line-height: 30px;
    padding-top: 20px;
    color: black;
    margin-bottom: 30px;
    
}
.show_cate{
    width: 100%;
    height: 400px;
    display: flex;
    align-content:flex-start;
    /* 解决间隙问题 */
     flex-wrap:wrap  ;
     overflow-y: scroll;
}
.show_cate::-webkit-scrollbar{
    width: 0;
    height: 0;

}
</style>