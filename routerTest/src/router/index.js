import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import routerTest from '@/components/routerTest'
// import newPage from '@/components/newPage'
// import test from '@/components/test'
// import newHelloWord from '@/components/new'
import cellTree from '@/components/cellTree'
import header from '@/components/navi/header'
import home from '@/components/navi/home'
import inquire from '@/components/navi/inquire'
import missionDetail from '@/components/navi/missionDetail'
import scene from '@/components/navi/scene'
import system from '@/components/navi/system'

Vue.use(Router)

const newRouter = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'header'
    },
    {
      path: '/header',
      name: 'header',
      component: header
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/missionDetail',
      name: 'missionDetail',
      component: missionDetail
    },
    {
      path: '/inquire',
      name: 'inquire',
      component: inquire
    },
    {
      path: '/scene',
      name: 'scene',
      component: scene
    },
    {
      path: '/system',
      name: 'system',
      component: system
    },
    {
      path: '/cellTree',
      name: 'cellTree',
      component: cellTree
    }
  ]
})
// newRouter.beforeEach((to, from, next) => {
//   console.log(54515)
// })
// name: 'HelloWorld',
//       component: HelloWorld,
//       children: [
//         {
//           path: '', // 可以作为index页面使用
//           name: 'newHelloWord',
//           component: newHelloWord
//         },
//         {
//           path: '/routerTest',
//           name: 'routerTest',
//           component: routerTest
//         },
//         {
//           path: '/newPage',
//           name: 'newPage',
//           component: newPage
//         }
//       ]
export default newRouter
