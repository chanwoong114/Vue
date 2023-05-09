import Vue from 'vue'
import VueRouter from 'vue-router'
import LunchVue from '../views/LunchVue.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/lunch',
    name: 'lunch',
    component: LunchVue
  },
  {
    path: '/lotto/:num',
    name: 'lotto',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LottoVue.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   console.log(to)
//   console.log(from)
//   console.log(next)

  
//   if (to.name === 'about') {
//     return
//   }
//   next()
// })

export default router
