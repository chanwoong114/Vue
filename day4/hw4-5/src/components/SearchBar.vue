<template>
  <div>
    <h1 class="fw-bold text-primary">SSAFY TUBE</h1>
    <div class="d-flex justify-content-center align-item-center">
      <input class="mx-3 border  border-primary rounded" size=50 type="text" v-model="query">
      <button class="btn btn-primary" @click="onClick">검색</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "SearchBar",
  data: function() {
    return {
      query: ""
    }
  },
  methods: {
    onClick: function() {
      axios({
        method: 'get',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          key: 'AIzaSyBWEEM2jwywXiMww1hKS6-42nqH9Cy9qz8',
          type: 'video',
          part: 'snippet',
          q: this.query
        }
      })
      .then(res => {
        this.$emit('fetch-videos', res.data.items)
      })
      .catch(error => {
        console.log(error)
      })
    }
  },
  created() {
    axios({
        method: 'get',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          key: 'AIzaSyBWEEM2jwywXiMww1hKS6-42nqH9Cy9qz8',
          type: 'video',
          part: 'snippet',
          q: "SSAFY"
        }
      })
      .then(res => {
        this.$emit('fetch-videos', res.data.items)
      })
      .catch(error => {
        console.log(error)
      })
  },
}
</script>

<style>

</style>