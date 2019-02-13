Page({
  data: {
    user: '',
    test: '这是测试'
  },
  onLoad (option) {
    console.log(1212)
    console.log(option)
  },
  onReady () {
    try {
      let storageUser = wx.getStorageSync('user')
      this.setData ({
        user: storageUser
      })
    } catch (e) {
      console.log(e)
    }
    console.log(5612321)
    console.log(this.data.user)
    console.log(this.data.test)
  }
})