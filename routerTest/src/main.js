// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

Vue.prototype.setCookie = (cName, value, expiredays) => {
  var exdate = new Date()
  exdate.setDate(exdate.getDate() + expiredays)
  if (isNaN(value)) {
    var val = value.split(/[=&]/g)[1]
  } else {
    val = value
  }
  document.cookie =
    cName +
    '=' +
    escape(val) +
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

Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
