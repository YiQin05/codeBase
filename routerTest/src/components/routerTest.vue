<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <router-link :to="{ name: 'newPage',path: 'relative/path'}" append >Go to newPage</router-link>
  </div>
</template>

<script>
export default {
  name: 'routerTest',
  data () {
    return {
      msg: '路由测试'
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log(1)
    console.log(from)
    next(vm => {
      // 因为当钩子执行前，组件实例还没被创建
      // vm 就是当前组件的实例相当于上面的 this，所以在 next 方法里你就可以把 vm 当 this 来用了。
      console.log(vm) // 当前组件的实例
    })
  },
  beforeRouteUpdate (to, from, next) {
    console.log(2)
    next(vm => {
      // 因为当钩子执行前，组件实例还没被创建
      // vm 就是当前组件的实例相当于上面的 this，所以在 next 方法里你就可以把 vm 当 this 来用了。
      console.log(vm) // 当前组件的实例
    })
  },
  beforeRouteLeave (to, from, next) {
    console.log(3)
    next(vm => {
      // 因为当钩子执行前，组件实例还没被创建
      // vm 就是当前组件的实例相当于上面的 this，所以在 next 方法里你就可以把 vm 当 this 来用了。
      console.log(vm) // 当前组件的实例
    })
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
