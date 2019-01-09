<template>
  <div class="hello">
    <div class="hell1">{{ msg }}</div>
    <div class="btn-group" role="group" aria-label="...">
      <button type="button" class="btn btn-default">Left</button>
      <button type="button" class="btn btn-default">Middle</button>
      <button type="button" class="btn btn-default">Right</button>
    </div>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank">
          Core Docs
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
// import $ from 'jquery'
// $(console.log('jquery'))
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '这是一个测试'
    }
  }
}
</script>
<style lang="less">
.hello{
  border: 1px solid gray;
  .hell1 {
    font-size: 20px;
    font-weight: bolder;
    color: aquamarine;
  }
}
</style>
