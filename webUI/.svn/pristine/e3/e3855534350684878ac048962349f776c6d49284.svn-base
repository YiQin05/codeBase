import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from '../App.vue'
import Home from '../components/home/page-home.vue'
import mission from '../components/missiondetail/mission.vue'
import missionEdit from '../components/missiondetail/missionEdit.vue'
import missionDetail from '../components/missiondetail/missionDetail.vue'
import missionAbout from '../components/missiondetail/missionAbout.vue'
import recognition from '../components/recognition/recognition.vue'
import scene from '../components/scene/scene.vue'
import inquire from '../components/inquire/inquire.vue'
import statistics from '../components/statistics/statistics.vue'
import management from '../components/management/management.vue'
import system from '../components/system/system.vue'
import addUser from '../components/system/addUser.vue'
import addCell from '../components/system/addCell.vue'
import editUser from '../components/system/editUser.vue'
import cellEdit from '../components/system/cellEdit.vue'
import login from '@/components/tabbar/login.vue'
import register from '@/components/tabbar/register.vue'
import 'font-awesome/css/font-awesome.css'
// import test from '../components/NewHello.vue'
// import test1 from '../components/NewHello1.vue'
// import newMission from '../components/mission/newMission.vue'

Vue.use(ElementUI)
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/App',
      name: 'App',
      component: App
    },
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
      path: '/recognition/:userID',
      name: 'recognition',
      component: recognition
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
      path: '/management/:userID',
      name: 'management',
      component: management
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
    },
    {
      path: '/system/editUser/:userID/:index',
      name: 'editUser',
      component: editUser
    },
    {
      path: '/system/cellEdit/:userID/:index',
      name: 'cellEdit',
      component: cellEdit
    },
    {
      path: '/:page/:userID/:index',
      name: 'missionEdit',
      component: missionEdit
    },
    {
      path: '/home/:page/:userID/:index',
      name: 'missionAbout',
      component: missionAbout
    }
  ]
})
