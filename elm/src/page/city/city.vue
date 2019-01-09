<template>
  <div class="address">
    <div>
      <mt-header fixed id="headContain" :title="selectedCity.name">
        <mt-button slot="left" class="headMsg">
          <router-link to="/">
            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" version="1.1">
              <path d="
              M 11,7
              l 0,0 l-9,9 l9,9" class="svgIcon"></path>
            </svg>
          </router-link>
        </mt-button>
        <mt-button slot="right" class="headMsg">切换城市</mt-button>
      </mt-header>
    </div>
    <div class="detail whiteBgColor">
      <form v-on:submit.prevent>
        <div>
          <input type="search" name="city" placeholder="输入学校、商务楼、地址" class="city_input input_style border" required v-model='searchInput'>
        </div>
        <div>
          <mt-button @click.native="submitSearch" type="primary">提交</mt-button>
        </div>
      </form>
    </div>
    <div class="history" v-show="show">
      <div class="historyTitle">搜索历史</div>
      <div class="whiteBgColor">
        <ul>
          <li v-for="item in historyList" :key="item.geohash" @click="selectAddress(item)">
            <h5>{{ item.name }}</h5>
            <p>{{ item.address }}</p>
          </li>
          <li @click="clearAll" v-show="historyList.length">清空所有</li>
        </ul>
      </div>
    </div>
    <div class="searchResult whiteBgColor" v-show="!show">
      <ul v-show="searchList">
        <li v-for="item in searchList" :key="item.geohash" @click="selectAddress(item)">
          <h5>{{ item.name }}</h5>
          <p>{{ item.address }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { selectedCity, searchCity } from '../../config/getData.js'
import { setStore, getStore } from '../../config/storage.js'
// import store from '../../store/store.js'
export default {
  name: 'city',
  data () {
    return {
      cityid: '',
      selectedCity: {},
      show: true,
      historyList: [],
      searchInput: '',
      searchList: []
    }
  },
  mounted () {
    this.cityid = this.$route.params.cityid
    selectedCity(this.cityid).then(data => {
      this.selectedCity = data
    })
    let history = getStore('historyCity')
    if (history.length > 0) {
      for (let i of history) {
        this.historyList.push(i)
      }
    }
  },
  watch: {
  },
  methods: {
    submitSearch () {
      searchCity(this.cityid, this.searchInput).then(data => {
        this.searchList.length = 0
        if (data.length !== 0) {
          for (let item of data) {
            this.searchList.push(item)
          }
          if (this.searchInput) {
            this.show = false
          }
        } else {
          let obj = {
            name: '无数据！'
          }
          this.searchList.push(obj)
        }
      })
    },
    selectAddress (locate) {
      let flag = false
      setStore('selectedCity', locate)
      if (locate.name !== '无数据！') {
        if (this.historyList.length > 0) {
          for (let i of this.historyList) {
            if (i.geohash === locate.geohash) {
              flag = true
            }
          }
          if (!flag) {
            this.historyList.push(locate)
            setStore('historyCity', this.historyList)
          }
        } else {
          this.historyList.push(locate)
          setStore('historyCity', this.historyList)
        }
      }
      this.$router.push({
        name: 'mysite'
        // params: { geohash: locate.geohash }
      })
    },
    clearAll () {
      this.historyList.splice(0)
      setStore('historyCity', this.historyList)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../../style/mixin.scss';
.address {
  .mint-header-title {
    font-size: .8rem;
    color: white;
    font-weight: bolder;
    height: 1rem;
    margin-top: .4rem;
  }
  .svgIcon{
    @include svgIcon(white);
  }
  .detail {
    margin-top: 2.3rem;
    @include borderTB(1px, 2px);
    @include paddingAside(.8rem);
    div:nth-of-type(1){
      padding-top: .4rem;
      margin-bottom: .5rem;
      .input_style{
        width: 100%;
        height: 1.4rem;
        padding: 0 .4rem;
      }
    }
    div:nth-of-type(2){
      padding-bottom: .5rem;
      button{
        width: 100%;
        height: 1.4rem;
      }
    }
  }
  .history{
    .historyTitle{
      font-size: $fontSmall;
      text-align: left;
      padding-left: .5rem;
      border-bottom: 2px solid $borderColor;
    }
    // @include paddingAside(.5rem);
    .whiteBgColor{
      @include listStyle();
      li:last-of-type {
        text-align: center;
        font-size: $fontBig;
        color: $titleFontColor;
      }
    }
  }
  .searchResult{
    @include listStyle();
  }
}
</style>
