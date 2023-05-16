import Vue from 'vue'
import VueRouter from 'vue-router'
import ArticleView from '../views/ArticleView'
import CreateView from '@/views/CreateView'
import LoginView from '@/views/LoginView'
import SignupView from '@/views/SignupView'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ArticleView',
    component: ArticleView
  },
  {
    path: '/create',
    name: 'CreateView',
    component: CreateView
  },
  {
    path: '/accounts/login',
    name: 'LoginView',
    component: LoginView,
    beforeEnter(to, from, next) {
      if (!store.getters.isLogin) {
        next({name: 'ArticleView'})
      } else{
        next()
      }
    }
  },
  {
    path: '/accounts/signup',
    name: 'SignupView',
    component: SignupView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
