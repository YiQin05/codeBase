import Vue from 'vue'
import Router from 'vue-router'
import fetch from '@/components/fetch'
// import App from '../App.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'fetch',
      component: fetch
    }
  ]
})
