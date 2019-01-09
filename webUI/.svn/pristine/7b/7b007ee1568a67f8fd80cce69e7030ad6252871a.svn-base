import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from '../App.vue'
import Home from '../components/home/page-home.vue'
import mission from '../components/missiondetail/mission.vue'
import missionDetail from '../components/missiondetail/missionDetail.vue'
import scene from '../components/scene/scene.vue'
import inquire from '../components/inquire/inquire.vue'
import statistics from '../components/statistics/statistics.vue'
import system from '../components/system/system.vue'
import addUser from '../components/system/addUser.vue'
import addCell from '../components/system/addCell.vue'
import login from '../components/tabbar/login.vue'
import register from '../components/tabbar/register.vue'
// import map from '../components/mapTest.vue'
import 'font-awesome/css/font-awesome.css'

Vue.use(ElementUI)
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/App',
      name: 'App',
      component: App
    },
    // {
    //   path: '/map',
    //   name: 'map',
    //   component: map
    // },
    {
      path: '/home/:userID',
      name: 'home',
      component: Home
    },
    {
      path: '/missionDetail/:userID',
      name: 'missionDetail',
      component: missionDetail
    },
    {
      path: '/inquire/:userID',
      name: 'inquire',
      component: inquire
    },
    {
      path: '/scene/:userID',
      name: 'scene',
      component: scene
    },
    {
      path: '/statistics/:userID',
      name: 'statistics',
      component: statistics
    },
    {
      path: '/system/:userID',
      name: 'system',
      component: system
    },
    {
      path: '/mission/:userID',
      name: 'mission',
      component: mission
    },
    {
      path: '/home/login/:userID',
      name: 'login',
      component: login
    },
    {
      path: '/home/register/:userID',
      name: 'register',
      component: register
    },
    {
      path: '/system/addUser/:userID',
      name: 'addUser',
      component: addUser
    },
    {
      path: '/system/addCell/:userID',
      name: 'addCell',
      component: addCell
    }
  ]
})
