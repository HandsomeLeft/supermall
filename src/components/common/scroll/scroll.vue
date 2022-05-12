<template>
  <div class="wrapper1" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import better_scroll from 'better-scroll'
export default {
    data(){
    return {
      b_s:null
    }
    },
    props:{
      probeTybe:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      }
    },
    mounted(){
    this.b_s=new better_scroll('.wrapper1',{
      probeType:this.probeTybe,
      pullUpLoad:this.pullUpLoad,
      observeDOM:true,
      click:true
    })
    this.b_s.on('scroll',position=>{
      // console.log(position);
      this.$emit('scroll',position)
    })
    this.b_s.on('pullingUp',()=>{
      // console.log('sdgsdgshf');
      this.$emit('pullingUp')
    })
  }
}
</script>

<style>

</style>