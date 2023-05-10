<template>
  <div @click="goToDetail">
    <p>글번호 : {{ article.id }}</p>
    <p>제목 : {{ article.title }}</p>
    <p>내용 : {{ article.content }}</p>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'ArticleItem',
  props: {
    article: Object,
  },
  methods: {
    goToDetail() {
      this.$router.push({ name: 'detail', params: {id: this.article.id} })
    }
  }
}
</script>

<style>

</style>