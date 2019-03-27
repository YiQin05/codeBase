import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '../pages/login/login'
// import { getCookie } from '../comment/js/cookie.js'
import App from '../App.vue'
import mainContain from '../pages/mainContain/mainContain'
import sideBar from '../components/sideBar'
import echart from '../components/eChart'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          redirect: { name: 'login' }
        },
        {
          path: '/login',
          name: 'login',
          component: login
        },
        {
          path: '/mainContain',
          name: 'mainContain',
          component: mainContain
        },
        {
          path: '/sideBar',
          name: 'sideBar',
          component: sideBar
        },
        {
          path: '/echart',
          name: 'echart',
          component: echart
        },
        {
          path: '/HelloWorld',
          name: 'HelloWorld',
          component: HelloWorld
        }
      ]
      // redirect: to => {
      //   let userID = getCookie('userID')
      //   if (userID !== 0) {
      //     return { name: 'login', params: { userID: userID } }
      //   } else {
      //     return { name: 'login', params: { userID: ':userID' } }
      //   }
      // }
    }
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: login
    // }
  ]
})
