<template>
  <div>
    <input type="text" v-focus>
    <h3 v-hover>hover测试</h3>
    <anchored-heading :level="level">
      <h1>
        <a name="hello-world" href="#hello-world">
          Hello world!
        </a>
      </h1>
    </anchored-heading>
  </div>
</template>

<script>
// import anchoredHeading from './anchoredHeading.vue'
import Vue from 'vue'
Vue.component('anchored-heading', {
  render: function (createElement) {
    return createElement(
      'h' + this.level, // 标签名称
      this.$slots.default // 子元素数组
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})
export default {
  name: 'instruction',
  data () {
    return {
      level: 2
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    },
    hover: {
      inserted: function (el) {
        // el.mouseenter()
      }
    }
  }
  // components: {
  //   anchoredHeading: 'anchored-heading'
  // }
}
</script>
<style lang="less" scoped>
h3:hover{
  color: red;
}
</style>
