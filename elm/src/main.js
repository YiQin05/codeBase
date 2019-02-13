// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import Vuex from 'vuex'
import 'mint-ui/lib/style.css'
import './config/rem.js'
import store from './store/store.js'
// import './config/generator.js'
// import 'swiper/dist/js/swiper.min.js'

Vue.config.productionTip = false
Vue.use(Mint)
Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
