<template>
  <div>
    <h1>상세</h1>
    <p>글 번호 : {{ article?.id }}</p>
    <p>글 내용 : {{ article?.title }}</p>
    <p>글 제목 : {{ article?.content }}</p>
    <p>글 작성시간 : {{ articleCreateAt }}</p>
    <hr>
    <button @click="deleteArticle">삭제</button><br>
    <router-link :to="{name: 'index'}">뒤로가기</router-link>
  </div>
</template>

<script>
export default {
  name: 'DetailView',
  data() {
    return {
      article: null
    }
  },
  computed: {
    articleCreateAt() {
      return new Date(this.article?.createdAt).toLocaleString()
    }
  },
  methods:{
    findArticle(id) {
      for (const article of this.$store.state.articles) {
        if (article.id === id) {
          this.article = article
          break
        }
      }
      if (!this.article) {
        this.$router.push({ name: '404'})
      }
    },
    deleteArticle() {
      this.$store.dispatch('deleteArticle', this.article.id)
      this.$router.push({ name: 'index' })
    }
  },
  created() {
    this.findArticle(this.$route.params.id)
  }
}
</script>

<style>

</style>