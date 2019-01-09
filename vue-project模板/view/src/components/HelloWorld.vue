<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>sass测试</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
body{
  font-size: 20px;
}
h2{
  font-size: 1rem;
}
</style>
