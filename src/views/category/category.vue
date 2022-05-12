<template>
  <div class="wrapper">
    <ul class="content">
    <li>3242</li>
    <li>3242</li>
    <li>3242</li>
    <li>3242</li>
    <li>3242</li>
    <li>3242</li>
    <li>3242</li>
    <li>3242</li>
    <li>3242</li>
    <li>3242</li>
    <li>3242</li>
    <li>3242</li>
    <li>3242</li>
    <li>3242</li>
    <li>3242</li>
    <li>3242</li>
    <li>3242</li>
    <li>3242</li>
    <li>3242</li>
    <li>3242</li>
    <li>3242</li>
    <li>3242</li>
    <li>3242</li>
    <li>3242</li>
    <li>3242</li>
    <li>3242</li>
    <li>3242</li>
    <li>3242</li>
    <li>3242</li>
    <li>3242</li>
    <li>3242</li>
    <li>3242</li>
    <li>3242</li>
    <li>3242</li>
    <li>3242</li>
    <li>3242</li>
    <li>3242</li>
    <li>3242</li>
    <li>3242</li>
    <li>3242</li>
    <li>3242</li>
    <li>3242</li>
  </ul>
  </div>
</template>

<script>
import better_scroll from 'better-scroll'
export default {
  data(){
    return{
      b_s:null
    }
  },
  mounted(){
    this.b_s=new better_scroll('.wrapper',{
      probeType:3,
      pullUpLoad:true
    })
    this.b_s.on('scroll',position=>{
      console.log(position);
    })
    this.b_s.on('pullingUp',()=>{
      console.log('sdgsdgshf');
    })
  }
  
}
</script>

<style>
.wrapper {
  height: 150px;
  background-color: aqua;
  overflow: hidden;
}
</style>