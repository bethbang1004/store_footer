import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '',
    name: 'TestFooter',
    component: () => import('@/layouts/components/footer.vue'),
    children: [{
      path: '/',
      name: 'test1',
      component: () => import('@/views/test1.vue')
    }, {
      path: '/views/test2',
      name: 'test2',
      component: () => import('@/views/test2.vue')
    }, {
      path: '/views/test3',
      name: 'test3',
      component: () => import('@/views/test3.vue')
    }, {
      path: '/views/test4',
      name: 'test4',
      component: () => import('@/views/test4.vue')
    }]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
