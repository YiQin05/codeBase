<template>
  <div id="app">
    <!-- 放置路由空间 -->
    <MyHeader v-if="isRouterAlive"/>
    <router-view />
    <MyFooter/>
  </div>
</template>
<script>
import MyHeader from '@/components/tabbar/Header'
import MyFooter from '@/components/tabbar/footer'
export default {
  name: 'App',
  data () {
    return {
      isRouterAlive: true
    }
  },
  provide () {
    return {
      reload: this.reload
    }
  },
  components: {
    MyHeader,
    MyFooter
  },
  mounted () {
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      console.log('23333')
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
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
header{
  height: 106px;
}
</style>
