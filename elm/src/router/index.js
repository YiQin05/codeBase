import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import home from '@/page/home/home'
import city from '@/page/city/city'
import mysite from '@/page/mysite/mysite'
import search from '@/page/search/search'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/city/:cityid',
      name: 'city',
      component: city
    },
    {
      // path: '/mysite?geohash=:geohash',
      path: '/mysite',
      name: 'mysite',
      component: mysite
    },
    {
      path: '/search',
      name: 'search',
      component: search
    }
  ]
})
