import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import routerTest from '@/components/routerTest'
import newPage from '@/components/newPage'
// import test from '@/components/test'
import newHelloWord from '@/components/new'
import cellTree from '@/components/cellTree'

Vue.use(Router)

const newRouter = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '', // 可以作为index页面使用
          name: 'newHelloWord',
          component: newHelloWord
        },
        {
          path: '/routerTest',
          name: 'routerTest',
          component: routerTest
        },
        {
          path: '/newPage',
          name: 'newPage',
          component: newPage
        }
      ]
    },
    {
      path: '/cellTree',
      name: 'cellTree',
      component: cellTree
    }
    // {
    //   path: '/routerTest',
    //   name: 'routerTest',
    //   component: routerTest
    // },
    // {
    //   path: '/newPage',
    //   name: 'newPage',
    //   component: newPage
    // },
    // {
    //   path: '/newHelloWord',
    //   name: 'newHelloWord',
    //   component: newHelloWord
    // },
    // {
    //   path: '/test',
    //   name: 'test1',
    //   component: test
    // }
  ]
})
// newRouter.beforeEach((to, from, next) => {
//   console.log(54515)
// })
export default newRouter
