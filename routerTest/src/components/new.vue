<template>
  <div class="sider_box">
      <p @click="go">第一个页面</p>
      <p @click="goTest">触发让它跳到test页面检查组件守卫功能</p>
  </div>
</template>
<script>
export default {
  name: 'new1',
  data () {
    return {

    }
  },
  methods: {
    go () {
      this.$router.push({name: 'routerTest'})
    },
    goTest () {
      this.$router.push({name: 'test1'})
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
