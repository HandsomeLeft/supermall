<template>
  <div id="tabbar">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#tabbar {
    display: flex;
    text-align: center;
    height: 49px;
    background-color: #f6f6f6;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 -2px 1px rgba(100, 100, 100, .1);
}
</style>