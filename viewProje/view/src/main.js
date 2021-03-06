// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VueResource from 'vue-resource'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.css'
import axios from 'axios'
// import Vuex from 'vuex'
import AMap from 'vue-amap'
// Vue.use(Vuex)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(AMap)
Vue.use(VueResource)
Vue.use(router)
Vue.prototype.$axios = axios

Vue.use(AMap)
AMap.initAMapApiLoader({
  key: 'b780b44f8f55a82fede8eca6418afd15',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  v: '1.4.4'
})
// 设置cookie
Vue.prototype.setCookie = (cName, value, expiredays) => {
  var exdate = new Date()
  exdate.setDate(exdate.getDate() + expiredays)
  var val = value.split(/[=&]/g)[1]
  document.cookie =
    cName +
    '=' +
    escape(val) +
    (expiredays == null ? '' : ';expires=' + exdate.toGMTString())
}

Vue.prototype.setUrlCookie = (cName, value, expiredays) => {
  var exdate = new Date()
  exdate.setDate(exdate.getDate() + expiredays)
  document.cookie =
    cName +
    '=' +
    escape(value) +
    (expiredays == null ? '' : ';expires=' + exdate.toGMTString())
}

// 获取cookie、
function getCookie (name) {
  var arr
  var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  if ((arr = document.cookie.match(reg))) return arr[2]
  else return null
}
Vue.prototype.getCookie = getCookie

// 删除cookie
Vue.prototype.delCookie = name => {
  var exp = new Date()
  exp.setTime(exp.getTime() - 1)
  var cval = getCookie(name)
  if (cval != null) {
    document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
  }
}

// 设置接口路径
Vue.prototype.setAPIPath = path => {
  // return 'http://172.16.0.83:5000/' + path
  return 'http://172.16.10.26:5000/' + path
}

// 时间过滤器
Vue.prototype.dateFormat = second => {
  var date = new Date(second * 1000)
  var y = date.getFullYear()
  var m = date.getMonth() + 1
  var d = date.getDate()
  return `${y}/${m}/${d}`
}

// 将数据存为localstorage
Vue.prototype.setStorage = (storageName, obj) => {
  var storage = window.localStorage
  var d = JSON.stringify(obj)
  storage.setItem(storageName, d)
}
// 取localstorage的对象数据
Vue.prototype.getStorage = (storageName) => {
  var json = window.localStorage.getItem(storageName)
  var jsonObj = JSON.parse(json)
  return jsonObj
}
// 删除localstorage
Vue.prototype.delStorage = (storageName) => {
  window.localStorage.removeItem(storageName)
}
// 显示提示信息
Vue.prototype.openMsg = (mes, type, _this) => { // error,success,warning,什么type型参数也不传会是一条提示白色的信息
  this.loading = false
  _this.$message({
    showClose: true,
    message: mes,
    type: type
  })
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: c => c(App),
  router,
  // store,
  created () {
    this.checkLogin()
  },
  methods: {
    checkLogin () {
      // 检查是否存在session
      if (!this.getCookie('')) {
        console.log('2:有session')
        console.log(this.getCookie('session'))
        // this.$router.push('/login')
      } else {
        // this.$router.push('/user_info')
        console.log('3:没有session')
        this.$router.push('/home/:userID')
      }
    }
  }
})
