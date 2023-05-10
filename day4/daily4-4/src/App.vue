<template>
  <div id="app">
    <div class="container">
      <nav>
        <SearchBar @fetch-videos="onFetch"/>

      </nav>
      <section class="row">

        <VideoList class="col-lg-4 col-12" 
        :video="video"/>
      </section>
    </div>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue';
import VideoList from './components/VideoList.vue';

export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList,
  },
  data: function() {
    return {
      video: null,
    }
  },
  methods: {
    onFetch: function(video) {
      this.video = video
      console.log(this.video)
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
