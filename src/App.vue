<template>
  <div id="app">
    <router-view/>
    <maintabbar/>
  </div>
</template>

<script>
import maintabbar from 'components/content/mainTabbar/maintabbar'

export default {
  components: { 
    maintabbar
   },
  name: 'App',
  
}
</script>

<style>
@import "./assets/css/base.css"
</style>
