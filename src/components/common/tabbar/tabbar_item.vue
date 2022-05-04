<template>
  <div class="tabbar_item" @click="item_click">
        <div v-if="is_active"><slot name='item-icon'></slot></div>
        <div v-else><slot name='item-icon-active'></slot></div>

        <!-- <div :class="{active:!is_active}"><slot name='item-text'></slot></div> -->
        <div :style="active_style"><slot name='item-text'></slot></div>
  </div>
</template>

<script>
export default {
  props:{
    path:String,
    active_color:{
      path:String,
      default:'red'
    }
    
  },
  data(){
    return{
      // is_active: true
    }
  },
  computed:{
    is_active(){
      return this.$route.path.indexOf(this.path)
    },
    active_style(){
      return this.is_active ? {}:{color:this.active_color}
    }
  },
  methods:{
    item_click(){
      // console.log(this.$route);
      this.$router.replace(this.path)
    },
    
  }
}
</script>

<style>
.tabbar_item {
    flex: 1;
}
.tabbar_item img {
    width: 24px;
    vertical-align: middle;
}
.active {
  color: deeppink;
}
</style>