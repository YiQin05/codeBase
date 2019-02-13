<template>
  <div class="hello">
    <div class="hell1">{{ msg }}</div>
    <div class="btn-group" role="group" aria-label="...">
      <button type="button" class="btn btn-default">Left</button>
      <button type="button" class="btn btn-default">Middle</button>
      <button type="button" class="btn btn-default">Right</button>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide" style="background-color:red">Slide 1</div>
          <div class="swiper-slide" style="background-color:blue">Slide 2</div>
          <div class="swiper-slide" style="background-color:green">Slide 3</div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-scrollbar"></div>
    </div>
  </div>
</template>
<script>
import { Vehicle } from '../plugin/pluginTest/objectJs.js'
import Swiper from 'swiper'
import Vue from 'vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '这是一个测试'
    }
  },
  mounted () {
    var MyObject = new Vehicle()
    MyObject.count()
    var mySwiper = new Swiper('.swiper-container', {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      }
    })
    Vue.use(mySwiper)
  }
}
</script>
<style lang="less">
@import '../plugin/swiper-4.4.6/css/swiper.css';
.hello{
  border: 1px solid gray;
  .hell1 {
    font-size: 20px;
    font-weight: bolder;
    color: aquamarine;
  }
  .swiper-container {
    width: 600px;
    height: 300px;
  }
}
</style>
