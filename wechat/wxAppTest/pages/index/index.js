//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    user: {}
  },
  login: function (e) {
    console.log(e.detail.value)
  }
})
