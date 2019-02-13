//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    user: {}
  },
  login: function (e) {
    console.log(e.detail.value)
    wx.setStorage({
      key: 'user',
      data: e.detail.value.user,
    })
    wx.navigateTo({
      url: '/pages/home/home'
    })
  }
})
