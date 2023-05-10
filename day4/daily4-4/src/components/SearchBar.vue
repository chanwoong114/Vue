<template>
  <div>
    <h1 class="fw-bold text-primary">SSAFY TUBE</h1>
    <div class="d-flex justify-content-center align-item-center">
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "SearchBar",
  created() {
    axios({
        method: 'get',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          key: 'AIzaSyBWEEM2jwywXiMww1hKS6-42nqH9Cy9qz8',
          type: 'video',
          part: 'snippet',
          q: "코딩노래"
        }
      })
      .then(res => {
        this.$emit('fetch-videos', res.data.items[0])
      })
      .catch(error => {
        console.log(error)
      })
  },
}
</script>

<style>

</style>