<template>
  <div class="home">
    <div v-for="article in articles" :key="article.id">
      <p>글 번호 : {{ article.id }}</p>
      <p>글 제목 : {{ article.title }}</p>
      <p>작성자 : {{ article.user.username }}</p>
      <hr>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'ArticleView',
  methods: {
    getArticles() {
      this.$store.dispatch('getArticles')
    }
  },
  created() {
    this.getArticles()
  },
  computed: {
    articles() {
      return this.$store.getters.articles
    }
  }
}
</script>
