import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../views/Auth.vue'
import graf from '../views/graf.vue'
import guid from '../views/guid.vue'
import test1 from '../views/1.vue'
import test2 from '../views/2.vue'
import test3 from '../views/3.vue'
import test4 from '../views/4.vue'
import test5 from '../views/5.vue'
import test6 from '../views/6.vue'
import test7 from '../views/7.vue'
import test8 from '../views/8.vue'
import test9 from '../views/9.vue'
import test10 from '../views/10.vue'
import test11 from '../views/11.vue'
import test12 from '../views/12.vue'
import test13 from '../views/13.vue'
import test14 from '../views/14.vue'
import popups from '../views/popups.vue'
import test999 from '../views/test999.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/guid',
    name: 'guid',
    component: guid
  },
  {
    path: '/graf',
    name: 'graf',
    component: graf
  },
  {
    path: '/1',
    name: 'test1',
    component: test1
  },
  {
    path: '/2',
    name: 'test2',
    component: test2
  },
  {
    path: '/3',
    name: 'test3',
    component: test3
  },
  {
    path: '/4',
    name: 'test4',
    component: test4
  },
  {
    path: '/5',
    name: 'test5',
    component: test5
  },
  {
    path: '/6',
    name: 'test6',
    component: test6
  },
  {
    path: '/7',
    name: 'test7',
    component: test7
  },
  {
    path: '/8',
    name: 'test8',
    component: test8
  },
  {
    path: '/9',
    name: 'test9',
    component: test9
  },
  {
    path: '/10',
    name: 'test10',
    component: test10
  },
  {
    path: '/11',
    name: 'test11',
    component: test11
  },
  {
    path: '/12',
    name: 'test12',
    component: test12
  },
  {
    path: '/13',
    name: 'test13',
    component: test13
  },
  {
    path: '/14',
    name: 'test14',
    component: test14
  },
  {
    path: '/popups',
    name: 'popups',
    component: popups
  },
  {
    path: '/test999',
    name: 'test999',
    component: test999
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
