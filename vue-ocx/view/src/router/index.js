import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import vueOcx from '@/components/vueOcx'
import ocxnew from '@/components/ocxnew'
import flashImg from '@/components/flashImg'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'ocxnew',
      component: ocxnew
    },
    {
      path: '/vueOcx',
      name: 'vueOcx',
      component: vueOcx
    },
    {
      path: '/flashImg',
      name: 'flashImg',
      component: flashImg
    }
  ]
})
