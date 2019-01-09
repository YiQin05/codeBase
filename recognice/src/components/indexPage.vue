<template>
  <div class="home">
    <MyHeader/>
    <router-view/>
    <MyFooter/>
  </div>
</template>

<script>
import MyHeader from '@/components/tabbar/MyHeader'
import MyFooter from '@/components/tabbar/MyFooter'
export default {
  name: 'indexPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
