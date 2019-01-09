import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '@/components/indexPage'
import pageHome from '@/components/home/pageHome'
import event from '@/components/eventInquire/event'
import inOut from '@/components/inquireInOut/inOut'
import disposition from '@/components/dispositionCentre/disposition'
import cameraShoot from '@/components/dispositionCentre/cameraShoot'
import statistics from '@/components/dataStatistics/statistics'
// import ocx from '@/components/home/ocx.vue'
// import ocxTest from '@/components/home/ocxTest.vue'
// import newOcx from '@/components/home/newOcx.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'indexPage',
      component: indexPage,
      children: [
        {
          path: '',
          name: 'pageHome',
          component: pageHome
        },
        {
          path: '/eventInquire',
          name: 'event',
          component: event
        },
        {
          path: '/inOut',
          name: 'inOut',
          component: inOut
        },
        {
          path: '/disposition',
          name: 'disposition',
          component: disposition
        },
        {
          path: '/statistics',
          name: 'statistics',
          component: statistics
        }
      ]
    },
    {
      path: '/cameraShoot',
      name: 'cameraShoot',
      component: cameraShoot
    }
  ]
})
