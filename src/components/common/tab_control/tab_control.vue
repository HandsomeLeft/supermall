<template>
  <div class="tab_control">
      <div v-for="(item,index) in titles" :key='item.id' class="tab_control_item" :class="{active: index===current_index}" @click="tab_click(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        titles:{
            type: Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            current_index:0
        }
    },
    methods:{
        tab_click(index){
            this.current_index=index
            this.$emit('tab_click',index)
        }
    }
}
</script>

<style>
.tab_control {
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
}
.tab_control_item {
    flex: 1;
    
}
.active {
    color: var(--color-high-text);
    
}
.active span {
    padding: 5px;
    border-bottom:3px solid var(--color-tint)
}
</style>