<template>
  <div id="app">
    <img src="./assets/logo.png">
    <svg-icon></svg-icon>
    <router-view/>
  </div>
</template>

<script>
import svgIcon from './components/svg.vue'
export default {
  name: 'App',
  components: {
    svgIcon
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
