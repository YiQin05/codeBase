<template>
  <div class="hello">
    <div class="header">
      <h1>头部</h1>
      <router-link :to="{ name: 'routerTest'}" append exact-active-class="_active">Go to routerTest</router-link>
      <router-link :to="{ name: 'newPage'}" append exact-active-class="_active">Go to newPage</router-link>
    </div>
    <router-view/>
    <div class="footer"><h2>尾部</h2></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {

  }
  // created () {
  //   console.log(this.$router) // 这个是跟路由
  //   console.log(this.$route) // 这个是链接路由，展示链接的参数等信息
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
._active{
  background-color : red;
}
.header {
  width: 100%;
  height: 200px;
  background-color: aqua;
}
.footer{
  width: 100%;
  height: 100px;
  background-color: gray;
}
</style>
