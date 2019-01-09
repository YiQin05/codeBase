<template>
  <div>
    <div>
      <mt-header fixed id="headContain" :title="selectedCity.name" class="ellipsis">
        <mt-button slot="left" class="headMsg">
          <router-link to="/search">
            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" version="1.1">
              <g>
                <circle cx="10"  cy="15" r="7" style="stroke:rgb(255,255,255);stroke-width:1;fill:none"/>
                <line x1="14.56" y1="20.31" x2="22" y2="29" style="stroke:rgb(255,255,255);stroke-width:2"></line>
              </g>
            </svg>
          </router-link>
        </mt-button>
        <mt-button slot="right" class="headMsg">切换城市</mt-button>
      </mt-header>
    </div>
    <div class="mainContain">
      <div class="foodType">
        <mt-swipe @change="handleChange" :auto="0">
          <mt-swipe-item>
            <ul>
              <li>美食</li>
              <li>美食</li>
              <li>美食</li>
              <li>美食</li>
              <li>美食</li>
              <li>美食</li>
              <li>美食</li>
              <li>美食</li>
            </ul>
          </mt-swipe-item>
          <mt-swipe-item>2</mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="shop"></div>
    </div>
    <my-footer/>
  </div>
</template>

<script>
import MyFooter from '../../components/footer/MyFooter.vue'
import { getStore } from '../../config/storage.js'
export default {
  name: 'mysite',
  data () {
    return {
      selectedCity: {}
    }
  },
  mounted () {
    this.selectedCity = getStore('selectedCity')
  },
  components: {
    MyFooter
  },
  methods: {
  }
}
</script>

<style lang="scss">
@import '../../style/mixin.scss';
.mint-header-title{
  font-size: .8rem;
  width: 50%;
  color: white;
}
.mainContain{
  margin-top: 1.8rem;
  .foodType {
    .mint-swipe{
      .mint-swipe-items-wrap{
        .mint-swipe-item{
          ul{
            height: auto;
            li{
              height: 4rem;
              width: 25%;
              float: left;
            }
          }
        }
      }
    }
  }
}
</style>
