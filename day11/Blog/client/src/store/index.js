import Vue from 'vue'
import Vuex from 'vuex'
import createPresistedState from 'vuex-persistedstate'
import axios from 'axios'
import router from '@/router'

Vue.use(Vuex)

const API_URL = 'http://127.0.0.1:8000'

export default new Vuex.Store({
  plugins: [
    createPresistedState()
  ],
  state: {
    token: null,
    articles: []
  },
  getters: {
    articles(state) {
      return state.articles
    },
    isLogin(state) {
      return state.token == null 
    }
  },
  mutations: {
    SAVE_TOKEN(state, token) {
      state.token = token
    },
    GET_ARTICLES(state, articles) {
      state.articles = articles
    },
    LOGOUT(state) {
      state.token = null
    }
  },
  actions: {
    getArticles(context) {
      axios({
        method: 'get',
        url: `${API_URL}/articles/`,
      })
      .then(res => {
        context.commit('GET_ARTICLES', res.data)
      })
      .catch(error => {
        console.log(error)
      })
    },
    signup(context, payload) {
      const username = payload.username
      const password1 = payload.password1
      const password2 = payload.password2

      console.log(payload)

      axios({
        method: 'post',
        url: `${API_URL}/accounts/signup/`,
        data: {
          username, password1, password2
        }
      })
      .then(res => {
        console.log(res)
        context.commit('SAVE_TOKEN', res.data.key)
        router.push({name: 'home'})
      })
      .catch(error => {
        console.log(error)
      })
    },
    login(context, payload) {
      const username = payload.username
      const password = payload.password

      axios({
        method: 'post',
        url: `${API_URL}/accounts/login/`,
        data: {
          username, password
        }
      })
      .then(res => {
        console.log(res)
        context.commit('SAVE_TOKEN', res.data.key)
        router.push({name: 'home'})
      })
      .catch(error => {
        console.log(error)
      })
    },
    logout(context) {
      context.commit('LOGOUT')
    }
  },
  modules: {
  }
})
