<template>
  <div id='app'>
    <router-view></router-view>
    <mainbar></mainbar>
  </div>
</template>

<script>
import mainbar from './components/mainbar'
export default {
  name:"App",
  components:{
    mainbar
  }
}
</script>

<style>

</style>
