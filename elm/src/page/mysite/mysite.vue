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
      <div class="slideComponet">
        <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide">
                <ul>
                  <li v-for="item in foodType1" :key="item.id">
                    <img :src="item.image_url" :alt="item.title">
                    <span>{{ item.title }}</span>
                  </li>
                </ul>
              </div>
              <div class="swiper-slide">
                <ul>
                  <li v-for="item in foodType2" :key="item.id">
                    <img :src="item.image_url" :alt="item.title">
                    <span>{{ item.title }}</span>
                  </li>
                </ul>
              </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="shop">
        <div class="shopTitle">
          <svg t="1547623545851" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1486" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25">
            <path d="M777.9 890H248.4c-41.7 0-75.6-37.4-75.6-83.3V516.3H214v290.4c0 23.2 15.5 42.2 34.4 42.2h529.5c19 0 34.5-18.9 34.5-42.2V516.3h41.2v290.4c0 45.9-34 83.3-75.7 83.3z" fill="#999" p-id="1487"></path>
            <path d="M661.5 545.9c-27.4 0-53.5-9.6-74.3-26.8-20.8 17.1-46.8 26.7-74 26.7h-0.3c-27.2-0.1-53.2-9.6-73.9-26.8-20.8 17.2-46.9 26.7-74.2 26.7-27.3 0-53.4-9.6-74.3-26.8-20.8 17.2-46.9 26.8-74.2 26.8h-0.1c-60-0.2-110.4-46-117.2-106.5l-0.2-1.8 2-30.3c0.4-4.6 1.4-9.2 3.2-13.5l0.2-0.5 74.1-170.2c1.7-4.4 14.8-35.8 37.7-60 18.5-19.6 47.5-29.9 83.8-29.9 5.2 0 9.1 0.2 10.9 0.4l406.8-0.1c2.9-0.2 7-0.3 9.2-0.3 25.3 0 60.4 5.2 83.7 29.9 22.2 23.5 35 53.3 37.7 59.9l74.3 170.5c1.8 4.2 2.9 8.8 3.3 13.7l2 25.1-0.2 1.9c-6.9 64.7-56.2 111.7-117.3 111.7-27.3 0-53.4-9.6-74.2-26.8-21 17.4-47.1 27-74.5 27z m-74.2-88.1l15.9 19.2c14.6 17.6 35.8 27.7 58.4 27.7s43.8-10.1 58.4-27.8l15.8-19.2 15.9 19.2c14.6 17.6 35.9 27.8 58.4 27.8 39.1 0 70.9-30.6 76.1-73l-1.7-21.2c0-0.6-0.1-0.9-0.2-1L810 238.9l-0.1-0.3c-0.5-1.1-11.3-28.1-29.4-47.2-14-14.8-39.7-17-53.8-17-3.1 0-5.4 0.1-6.3 0.1l-0.8 0.1-410.7 0.1-0.9-0.1s-3.3-0.3-8.3-0.3c-17.2 0-40.5 3-53.9 17-15.5 16.4-26.5 39.5-29.4 47l-0.3 0.8L142 409.2c-0.1 0.3-0.2 0.7-0.2 1l-1.7 26.1c5.2 38.9 37.6 68.1 76.1 68.2 22.5 0 43.7-10.1 58.3-27.7l15.9-19.2 15.9 19.2c14.6 17.6 35.9 27.7 58.4 27.7s43.8-10.1 58.4-27.7l15.9-19.2 16 19.4c14.5 17.5 35.6 27.6 58 27.7h0.2c22.4 0 43.6-10.1 58.2-27.7l15.9-19.2zM721 174.5h-0.2 0.2z" fill="#999" p-id="1488"></path>
          </svg>
          <span>附近商家</span>
        </div>
        <div class="shop_list">
          <shop-list></shop-list>
        </div>
      </div>
    </div>
    <my-footer/>
  </div>
</template>

<script>
import MyFooter from '../../components/footer/MyFooter.vue'
import shopList from '../../components/common/shopList.vue'
import { getStore } from '../../config/storage.js'
import Swiper from 'swiper'
import Vue from 'vue'
import { foodType } from '../../config/getData'
import rootUrl from '../../config/imgRootUrl.js'
export default {
  name: 'mysite',
  data () {
    return {
      selectedCity: {},
      foodType1: [],
      foodType2: []
    }
  },
  mounted () {
    this.selectedCity = getStore('selectedCity')
    var swiper = new Swiper('.swiper-container', {
      initialSlide: 0,
      // autoplay: true,
      pagination: {
        el: '.swiper-pagination'
      }
    })
    Vue.use(swiper)
    foodType().then(data => {
      console.log(data)
      for (let i = 0, len = data.length; i < len; i++) {
        data[i].image_url = rootUrl.foodTypeUrl + data[i].image_url
        if (i < len / 2) {
          this.foodType1.push(data[i])
        } else {
          this.foodType2.push(data[i])
        }
      }
    })
  },
  components: {
    MyFooter,
    shopList
  },
  methods: {
  }
}
</script>

<style lang="scss">
@import '../../style/mixin.scss';
@import '../../../node_modules/swiper/dist/css/swiper.min.css';
.mint-header-title{
  font-size: .8rem;
  width: 50%;
  color: white;
}
#headContain{
  z-index: 9999;
}
.badge_yellow{
  color: black;
  font-size: .5rem;
}

.mainContain{
  margin-top: 1.8rem;
  .slideComponet{
    background-color: white;
    border-bottom: 1px solid $borderColor;
    .swiper-container{
      width: 100%;
      height: 8rem;
      .swiper-wrapper{
        .swiper-slide{
          ul{
            margin-top: .5rem;
            padding-bottom: 1rem;
            height: 100%;
            li{
              width: 25%;
              height: 45%;
              float: left;
              text-align: center;
              position: relative;
              span{
                font-size: 0.55rem;
                color: $titleFontColor;
                width: 100%;
                text-align: center;
                position: absolute;
                bottom: .5rem;
                left: 0;
              }
              img{
                width: 1.8rem;
                height: 1.8rem;
              }
              &::after{
                content: "";
                clear: both;
              }
            }
          }
        }
      }
      .swiper-pagination{
        margin-top: 1rem;
      }
    }
  }
  .shop{
    margin-top: .4rem;
    background-color: white;
    border-top: 1px solid $borderColor;
    .shopTitle{
      font-size: $fontSmall;
      text-align: left;
      margin-left: .2rem;
      color: $bgcolor;
      height: 1rem;
      line-height: 1rem;
      position: relative;
      svg{
        margin-top: .2rem;
      }
      span{
        color: $bgcolor;
        top: .3rem;
        left: 1.3rem;
        position: absolute;
      }
    }
    .shop_list{
      padding-top: .5rem;
    }
  }
}
</style>
