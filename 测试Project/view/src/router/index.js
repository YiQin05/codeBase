import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import swiper from '@/components/swiper'
import star from '@/components/star'
import treeTest from '@/components/treeTest'
import instruction from '@/components/instruction'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: swiper
    },
    {
      path: '/star',
      name: 'star',
      component: star
    },
    {
      path: '/treeTest',
      name: 'treeTest',
      component: treeTest
    },
    {
      path: '/instruction',
      name: 'instruction',
      component: instruction
    }
  ]
})
