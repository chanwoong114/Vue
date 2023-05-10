import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    articleId: 1,
    articles: []
  },
  getters: {
  },
  mutations: {
    CREATE_ARTICLE(state, article) {
      state.articles.push(article)
      state.articleId += 1
    },
    DELETE_ARTICLE(state, article_id) {
      state.articles = state.articles.filter(article => {
        return !(article.id === article_id)
      })
    }
  },
  actions: {
    createArticle(context, article) {
      const payload = {
        id: context.state.articleId,
        ...article,
        createdAt: new Date().getTime()
      }
      context.commit('CREATE_ARTICLE', payload)
    },
    deleteArticle(context, article_id){
      context.commit('DELETE_ARTICLE', article_id)
    }
  },
  modules: {
  }
})
