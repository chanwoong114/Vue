<template>
  <div>
    <h3>게시물 작성</h3>
    <form @submit.prevent="createArticle">
      <label for="title">글 제목 : </label>
      <input type="text" v-model="title"><br>
      <label for="content">글 내용 : </label>
      <input type="text" v-model="content"><br>
      <input type="submit" value="글 생성">
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CreateView',
  data() {
    return {
      title: null, 
      content: null,
    }
  },
  methods: {
    createArticle() {
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/articles/',
        data:{
          title: this.title, content: this.content
        },
        headers: {
          Authorization: `Token ${this.$store.state.token}`
        }
      })
      .then(res => {
        console.log(res)
        this.$router.push({name: 'ArticleView'})
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style>

</style>
