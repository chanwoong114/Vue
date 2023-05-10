<template>
  <div>
    <h1>게시글</h1>
    <ArticleItem v-for="(article, index) in articles" :key="index"
    :article="article"
    />
    <button @click="goToCreate">CREATE</button>
  </div>
</template>

<script>
import ArticleItem from '@/components/ArticleItem.vue' 

export default {
  name: 'IndexView',
  components: {
    ArticleItem
  },
  computed: {
    articles() {
      return this.$store.state.articles
    }
  },
  methods: {
    goToCreate() {
      this.$router.push({ name: 'create' })
    },
  }
}
</script>

<style>

</style>