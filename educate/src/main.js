// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'jquery'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
// import axios from 'axios'
// 引入颜色皮肤css
import './comment/css/_all-skins.css'

import 'font-awesome/css/font-awesome.css'

// 引入vue-qriously生成二维码插件
import VueQriously from 'vue-qriously'

// 引入echart提示框,标题颜色块和标题组件
// import 'echarts/lib/component/legend'
// import 'echarts/lib/component/tooltip'
// import 'echarts/lib/component/title'

// 引入加密和解密插件
import JsEncrypt from 'jsencrypt'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueQriously)
Vue.prototype.$jsEncrypt = JsEncrypt
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
new Vue({
  el: '#app',
  router
})
