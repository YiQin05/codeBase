<template>
  <div class="login">
    <div class="title">登录</div>
    <div class="line">
      <img src="../assets/icon1.png" alt="" class="icon">
      <input type="text" placeholder="请输入账号">
    </div>
    <div class="line">
      <img src="../assets/icon2.png" alt="" class="icon">
      <input type="password" placeholder="请输入密码">
    </div>
    <el-button type="success" class="btn_success">登录</el-button>
    <button type="button" class="btn btn-success">（成功）Success</button>
  </div>
</template>

<script>
// import { baseURL } from '../api/env.js'
// import API from '../api/api_user'
import axios from 'axios'
// import func from './vue-temp/vue-editor-bridge.js';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    // this.getCity()
    // this.addFood()
    // this.getToken()
    // this.getAdmin()
    // this.getHttps()
    this.crpte()
  },
  methods: {
    // getToken () {
    //   console.log('进入获取token')
    //   let params = {
    //     username: 'test',
    //     password: 'test'
    //   }
    //   API.getToken(params).then(function (res) {
    //     console.log('拿token')
    //     console.log(res)
    //     window.sessionStorage.setItem('token', res.token)
    //   })
    // },
    // getCity () {
    //   API.cityGuess().then(function (res) {
    //     console.log('触发getCity')
    //     console.log(res)
    //   })
    // },
    // addFood () {
    //   let params = {
    //     name: '鸡',
    //     description: '脆皮鸡',
    //     restaurant_id: 1
    //   }
    //   API.addFood(params).then(function (res) {
    //     console.log('触发增加食品')
    //     console.log(res)
    //   })
    // },
    // getAdmin () {
    //   return axios({
    //     method: 'GET',
    //     url: `http://172.16.10.26:5000/api/resource`,
    //     auth: {'username': 'eyJhbGciOiJIUzI1NiIsImlhdCI6MTU1MzIyMzYyMCwiZXhwIjoxNTUzMjI0MjIwfQ.eyJpZCI6MX0.MIC6sk1FQ5JpJNi2WB8MK1QGbDy0Vun7RAPN6EUQpIQ', 'password': ''}
    //   })
    //     .then(res => res.data).then(function (res) {
    //       console.log('触发获取token111')
    //       console.log(res)
    //     })
    // }

    // getAdmin () {
    //   console.log('进入获取admin')
    //   console.log(window.sessionStorage.getItem('token'))
    //   let params = {
    //     'username': window.sessionStorage.getItem('token'),
    //     'password': ''
    //   }
    //   API.getAdmin(params).then(function (res) {
    //     console.log('触发获取token111')
    //     console.log(res)
    //   })
    // },
    getHttps () {
      return axios({
        method: 'GET',
        url: '/private-api/s',
        // url: '/private-api/internet/1522.html'
        params: {
          ie: 'UTF-8',
          wd: 'vue'
        },
        headers: {
          'Accept': 'text/html'
          // 'Origin': '',
          // 'Referer': 'www.baidu.com'
        }
      }).then(res => res.data).then(function (res) {
        console.log('触发https方法')
        console.log(res)
      })
    },
    crpte () {
      console.log(this)
      let jse = new this.$jsEncrypt()
      // 设置公钥
      jse.setPublicKey(`-----BEGIN PUBLIC KEY-----
      MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC8ygMKjJLSUpnfXqt8lRSAdDxA
      HWKi9GbTFkCbAjkRCR6VUakxxXLXHQUtPCizKcvNpuYqZ5bO8LEgpY7SL3JEdEI9
      OuMnZ6ToeHPfcHeS+EgN0oYmdQ49RB5wZkcBEFk80OBEAM6VhnE0IuHGkU5ko9oP
      Hq3boEQ3Ej6r3T+UhQIDAQAB
      -----END PUBLIC KEY-----`)
      // 设置要加密的字符串
      let encrypted = jse.encrypt('Hello, world')
      console.log('加密后的HelloWorld：' + encrypted)
      // 设置私钥，如果前端不需要将加密后的信息解密的话，可以不设置私钥
      jse.setPrivateKey(`-----BEGIN RSA PRIVATE KEY-----
      MIICXgIBAAKBgQC8ygMKjJLSUpnfXqt8lRSAdDxAHWKi9GbTFkCbAjkRCR6VUakx
      xXLXHQUtPCizKcvNpuYqZ5bO8LEgpY7SL3JEdEI9OuMnZ6ToeHPfcHeS+EgN0oYm
      dQ49RB5wZkcBEFk80OBEAM6VhnE0IuHGkU5ko9oPHq3boEQ3Ej6r3T+UhQIDAQAB
      AoGBAIO8JwEedHlE4FBovBsT4Bl+gmhu2NxC1NlpBq3jkDSd+3RQZlLvp6IJgwo8
      l13lxWv8kVF3tVkzxTW1sQJjz0RYShH8vXLl94gf6mFkJbeOPP6uA0mGDG81yINw
      KUpE0RM6ZM9yKEeVdK3u67TkEBcC6Td5KBl8Yof3q7qxiOWhAkEA4BXEtpnfhgm3
      7s1VjDxdIHTtWL1PihMT+SCOqp+Vv27ABVrxtDW/w2R3ZzR5ezROI2v1DVhj5wvs
      xPGXx6OpSQJBANetVvazS/5SQNvb+Cmjw9Rt5NilyxfX5IsSswaIojbwhZY2FVZy
      AlFH9K/YS2FYFyU7iIqN6IIkOxXpOcj/bV0CQQCRYM4MgWuotClmfkSgBJGOew14
      4uj1dUch+2NTgtFOLvXZA5WICs7sXwOwKzUdH2QKSwHitJOr0+q6ItsLpDwxAkBX
      zvDK+/CCmIZjfMkqWsxN3nf/ZHCtQm5/2Jsem94/M+mPYHGLgltDMGKEfTEjbrPt
      qrFKh8ATzCBqKUwncybZAkEAmVNW1dftWWoriZZXXMvfFkTDgYvRmytoVEThhnd0
      J/AOhZiUAs9+kHfGKivlTE209AY6Bw8aRzuTCziSwQhhBQ==
      -----END RSA PRIVATE KEY-----`)

      let decrypted = jse.decrypt(encrypted)
      console.log('解密后的HelloWorld：' + decrypted)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.login{
  width: 500px;
  background-color: white;
  padding: 50px;
  .title{
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-weight: bolder;
  }
  .line{
    border-bottom: 1px solid #d8d8d8;
    margin: 22px 1%;
    height: 34px;
    line-height: 34px;
    display: flex;
    .icon{
      height: 24px;
    }
    input{
      border: 0px;
      padding-left: 10px;
      font-size: 16px;
      &:focus{
        outline: -webkit-focus-ring-color auto 0px !important;
      }
    }
  }
  .btn_success{
    width: 50%;
  }
}
</style>
