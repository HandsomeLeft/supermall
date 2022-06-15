<template>
  <div>
    <div class="category">
      <navbar class="navbar" >
        <div slot="left" class="nav_left">DM</div>
        <div slot="center" class="nav_center"><input type="text" v-model='search_in_cate' /></div>
        <div slot="right" class="nav_right" @click="show()">搜索</div>
      </navbar>
      <scroll class="cate1">
        <cate1 @cate1item_click="cate1item_click"> </cate1>
      </scroll>

      <div class="cate2">
        <cate2  :cates='cates'> </cate2>
      </div>
    </div>
  </div>
</template>
<script>
import scroll from "@/components/common/scroll/scroll.vue";
import cate1 from "./childrenComponents/cate1.vue";
import navbar from "@/components/common/navbar/navbar.vue";
import cate2 from "./childrenComponents/cate2.vue";
// 数据传导
// import {getCatedata} from '@/network/category'
import virtual_data from'./virtual_data/virtual_cate.json'
export default {
  components: {
    cate1,
    navbar,
    cate2,
    scroll,
  },
  name: "Category",
  created() {},
  data() {
    return {
      search_in_cate:'',
      simulate_data:[],
      currentIndex:0,
      test:'ab'
    };
  },
  methods: {
    show(){
       this.$router.push(
        {
          path:'/sreach/',
          query:{search_in_cate:this.search_in_cate}
        }
      
      )
    },
    cate1item_click(index) {
     this.currentIndex=index
       
    },
    
  },
  created(){
   this.simulate_data=virtual_data
  },
  //发送数据到子组件
  computed:{
    cates(){
      let index1=this.currentIndex;
      
     
      return this.simulate_data[index1].list;
     
    }
  }
};
</script>
<style scoped>
.category {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
 
}
.cate1 {
  box-sizing: border-box;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  width: 30%;
  overflow-y: hidden;
  box-shadow: 10px;
  background-color: #eee;
  margin-top: 5px;
  /* border-radius: 10px; */
}
.cate2 {
  box-sizing: border-box;
  position: absolute;
  background-color: rgb(255, 255, 255);
  box-shadow: 10px;
  top: 44px;
  bottom: 49px;
  left: 30%;
  width: 70%;
   margin-top: 5px;
}

.navbar{
   color: rgb(27, 48, 66);
    font-size: 18px;
    /* margin-bottom: 50px; */
    
}
.nav_left {
  /* background-color: rgb(56, 131, 181); */
  /* color: rgb(11, 52, 101); */
  
  text-align: center;
  letter-spacing: 6px;
  color: #fff;
}
.nav_center input {
  font-size: 14px;
  width: 100%;
  border: 1px solid rgb(220, 233, 245);
  padding: 4% 0px;
  border-radius: 10px;

  /* -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); */
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}
.nav_center input:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
}
.nav_right {
 
  text-align: center;
  color: #fff;
  
}
</style>
