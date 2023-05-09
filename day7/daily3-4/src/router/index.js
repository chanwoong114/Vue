import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/404.vue'
import NoColor from '../views/Nocolor.vue'
import SsafLing from '../views/Ssafling.vue'
import SsafLeaf from '../views/Ssafleaf.vue'
import SsaFlower from '../views/Ssaflower.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/notfound',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/happeed',
    name: 'NoColor',
    component: NoColor
  },
  {
    path: '/happling',
    name: 'SsafLing',
    component: SsafLing
  },
  {
    path: '/happlossome',
    name: 'SsafLeaf',
    component: SsafLeaf
  },
  {
    path: '/happlower',
    name: 'SsaFlower',
    component: SsaFlower
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!to.name) {
    next({name: 'NotFound'})
  } 
  next()
})

export default router
