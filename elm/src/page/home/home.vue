<template>
  <div class="container home">
    <my-head/>
    <div class="locateCity whiteBgColor">
      <div class="city_tip">
        <span>当前定位城市：</span>
        <span>定位不准确，请在城市列表中选择</span>
      </div>
      <router-link :to="'/city/' + guessCity.id" class="guess_city">
        <span>{{ guessCity.name }}</span>
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <path d="
          M 6,3
          l 0,0 l7,7 l-7,7" class="svgIcon"></path>
        </svg>
      </router-link>
    </div>
    <div class="hotCity whiteBgColor">
      <div class="notice">热门城市</div>
      <div class="city">
        <ul>
          <router-link :to="'/city/' + item.id" tag="li" v-for="item in hotCity" :key="item.id" class="ellipsis">
            {{ item.name }}
          </router-link>
        </ul>
      </div>
    </div>
    <div class="allcity">
      <!-- v-for="(item, index) in allCity" :key="index" -->
      <div class="cityGroup whiteBgColor" v-for="(value, index) in allCity" :key="index">
        <div class="notice">{{ index }}<span v-if="index === 'A'" class="msg">(按字母排序)</span></div>
        <div class="city">
          <ul>
            <router-link :to="'/city/' + item.id" tag="li" v-for="item in value" :key="item.id" class="ellipsis">{{ item.name }}</router-link>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyHead from '@/components/header/MyHead'
import { cityGuess, hotCity, groupCity } from '../../config/getData.js'
// import axios from 'axios'
export default {
  name: 'home',
  data () {
    return {
      guessCity: {},
      hotCity: [],
      key: [],
      allCity: []
    }
  },
  components: {
    MyHead
  },
  mounted () {
    cityGuess().then(data => {
      this.guessCity = data
    })
    hotCity().then(data => {
      this.hotCity.length = 0
      for (let i of data) {
        this.hotCity.push(i)
      }
    })
    groupCity().then(data => {
      this.allCity.length = 0
      this.allCity = data
      this.allCity = this.sortgroupcity()
      console.log(this.allCity)
    })
  },
  methods: {
    sortgroupcity () {
      let sortobj = {}
      for (let i = 65; i <= 90; i++) {
        if (this.allCity[String.fromCharCode(i)]) {
          sortobj[String.fromCharCode(i)] = this.allCity[String.fromCharCode(i)]
        }
      }
      return sortobj
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../../style/mixin.scss';
.home .svgIcon{
  @include svgIcon($bgcolor);
}
.container{
  padding-top: 1.5rem;
  .locateCity{
    font-size: $fontSmall;
    box-sizing: border-box;
    border-bottom: 2px solid $borderColor;
    .city_tip{
      @include paddingAside(.4rem);
      border-bottom: 1px solid $borderColor;
      @include flexPosition(space-between);
      padding-top: .7rem;
      height: 2.2rem;
      span:nth-of-type(1){
        color: $titleFontColor;
      }
      span:nth-of-type(2){
        font-weight:900;
        color: $bgcolor;
        font-size: .475rem;
      }
    }
    .guess_city{
      @include paddingAside(.4rem);
      @include flexPosition(space-between);
      height: 2rem;
      font-size: $fontBig;
      span{
        color: $fontColor;
      }
    }
  }
  .hotCity{
    @include City($fontColor);
    .notice{
      @include paddingAside(.4rem);
    }
  }
  .allcity{
    .cityGroup{
      @include City($titleFontColor);
      .notice{
        @include paddingAside(.4rem);
        .msg{
          color: $bgcolor;
          font-size: $fontSmall;
          margin-left: .3rem;
        }
      }
    }
  }
}
</style>
