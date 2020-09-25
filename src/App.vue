<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <HelloWorld></HelloWorld>
    <div class="router">
    <router-view/>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'

export default {
  name: 'App',
  components:{
    HelloWorld
  }
}
</script>

<style lang="less">
.router{
  margin: 20px;
  padding: 20px;
  border-top: 1px solid black;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
