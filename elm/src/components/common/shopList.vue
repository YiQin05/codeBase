<template>
  <div>
    <ul>
      <router-link :to="{ name: 'shop', query: {geohash: geohash, id: item.id } }" tag="li" class="shop_li" v-for="item in shopList" :key="item.id">
        <div class="shop_li_left">
          <img :src="item.image_path" alt="" class="shopImg">
        </div>
        <div class="shop_li_middle">
          <header>
            {{ item.name }}
          </header>
          <h5 class="middle_middle">
            <div class="star">
              <div class="star_contain">
                <svg class="grey_fill" v-for="num in 5" :key="num">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"></use>
                </svg>
              </div>
              <section :style="'width:' + item.rating*2/5 + 'rem'" class="star_overflow">
                <div class="star_contain">
                  <svg class="orange_fill" v-for="num in 5" :key="num">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"></use>
                  </svg>
                </div>
              </section>
            </div>
            <div class="sellMsg">
              <span>{{ item.rating }}</span>
              <span class="scale">月售{{ item.recent_order_num }}单</span>
            </div>
          </h5>
          <h5 class="middle_bottom">
            <span class="star">
              ¥{{ item.float_minimum_order_amount }}起送
            </span>
            <span>/</span>
            <span>配送费¥{{ item.float_delivery_fee }}</span>
          </h5>
        </div>
        <div class="shop_li_right">
          <ul class="right_top">
            <li v-for="i in item.supports" :key="i.id">{{ i.icon_name }}</li>
          </ul>
          <div class="clear"></div>
          <h5 class="right_middle rating_order_num_right">
            <span class="delivery_style delivery_left">{{ item.delivery_mode.text }}</span>
            <span class="delivery_style delivery_right" v-if="zhunshi(item.supports)">准时达</span>
          </h5>
          <h5 class="right_bottom">
            <span>{{ item.distance }}/</span>
            <span>{{ item.order_lead_time }}</span>
          </h5>
        </div>
        <div class="clear"></div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { shopList } from '../../config/getData.js'
import { getStore } from '../../config/storage.js'
import rootUrl from '../../config/imgRootUrl.js'
import { mapState } from 'vuex'
export default {
  name: 'shopList',
  data () {
    return {
      rating: 4.7,
      seletedCity: {},
      shopList: []
    }
  },
  mounted () {
    this.seletedCity = getStore('selectedCity')
    shopList(this.seletedCity.latitude, this.seletedCity.longitude).then(data => {
      for (let i of data) {
        i.image_path = rootUrl.shopListUrl + i.image_path
        this.shopList.push(i)
      }
    })
  },
  computed: {
    ...mapState([
      'geohash'
    ])
  },
  methods: {
    zhunshi (supports) {
      for (let i of supports) {
        if (i.icon_name === '准') {
          return true
        }
      }
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin.scss';
.shop_li{
  border-bottom: 1px solid $borderColor;
  padding-top: 1rem;
  @include paddingAside(.4rem);
  .shop_li_left{
    float: left;
    width: 2.7rem;
    height: 2.7rem;
    .shopImg{
     width: 100%;
     height: 100%;
    }
  }
  .shop_li_middle{
    width: 6.3rem;
    height: 3.5rem;
    float: left;
    padding-top: .1rem;
    padding-left: .3rem;
    span{
      color: $titleFontColor;
    }
    header{
      font: 0.65rem/0.65rem "PingFangSC-Regular";
      color: #333;
      font-weight: 700;
      text-align: left;
      &::before{
        content: '品牌';
        background-color: #ffd930;
        font-size: .5rem;
        padding-left: .1rem;
        padding-right: .1rem;
        border-radius: 3px;
      }
    }
    .middle_middle{
      font-size: .4rem;
      text-align: left;
      padding: .5rem 0;
      position: relative;
      .star{
        position: relative;
        .star_contain{
          display: flex;
          width: 2rem;
          height: .4rem;
          .grey_fill{
            fill: #d1d1d1;
          }
          .orange_fill{
            fill: #ff9a0d;
          }
        }
        .star_overflow{
          position: absolute;
          top: 0;
          overflow: hidden;
        }
      }
      .sellMsg{
        position: absolute;
        left: 2.5rem;
        top: .3rem;
        span:nth-of-type(1){
          color: #ff6000;
          padding: 0 .1rem;
          float: left;
        }
        span.scale{
          display: block;
          -webkit-transform: scale(.8);
          float: left;
        }
      }
    }
    .middle_bottom{
      font-size: .5rem;
      text-align: left;
      transform: scale(.9);
    }
  }
  .shop_li_right{
    float: right;
    width: 6.2rem;
    text-align: right;
    font-size: .5rem;
    .right_top{
      li{
        float: right;
        color: $bgcolor;
        border: 0.025rem solid #f1f1f1;
        border-radius: 0.08rem;
      }
    }
    .rating_order_num_right{
      display: flex;
      align-items: center;
      transform: scale(.7);
      min-width: 5rem;
      justify-content: flex-end;
      margin-right: -1rem;
      padding: .35rem 0;
      .delivery_style{
        font-size: 0.4rem;
        padding: 0.04rem 0.08rem 0;
        border-radius: 0.08rem;
        margin-left: 0.08rem;
        border: 1px;
      }
      .delivery_left{
        color: #fff;
        background-color: $fontColor;
        border: 0.025rem solid $fontColor;
      }
      .delivery_right{
        color: $fontColor;
        border: 0.025rem solid $fontColor;
      }
    }
    .right_bottom{
      display: flex;
      justify-content: flex-end;
      transform: scale(.9);
      span:nth-of-type(1){
        color: $bgcolor;
      }
      span:nth-of-type(2){
        color: $fontColor;
      }
    }
  }
}
</style>
