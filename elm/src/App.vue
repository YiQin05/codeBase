<template>
  <div id="app">
    <svg-icon></svg-icon>
    <router-view/>
  </div>
</template>

<script>
import './style/common.scss'
import svgIcon from './components/common/svg.vue'
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
}
</style>
