import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateView from '../views/CreateView.vue'
import DetailView from '../views/DetailView.vue'
import IndexView from '../views/IndexView.vue'
import NotFound404 from '../views/NotFound404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/create',
    name: 'create',
    component: CreateView
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: DetailView
  },
  {
    path: '/',
    name: 'index',
    component: IndexView
  },
  {
    path: '/404',
    name: '404',
    component: NotFound404
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
