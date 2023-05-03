<template>
  <div id="app">
    <div class="container">
      <nav>
        <SearchBar @fetch-videos="onFetch"/>

      </nav>
      <section class="row">
        
        <VideoDetail class="col-lg-7 col-12 my-5 mx-2" v-if="isSelected()"
        :video="selectedvideo"
        />
        <div v-else class="col-lg-7 col-12 shadow p-3 my-5 mx-2 bg-body rounded">
          <img class="w-75 h-80" src="./1.jpg" alt="">
          <p class="mt-5">선택된 비디오가 없습니다.</p>
        </div>
        
        

        <VideoList class="col-lg-4 col-12" 
        :videos="videos"
        @select-video="onSelect" />
      </section>
    </div>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue';
import VideoDetail from './components/VideoDetail.vue';
import VideoList from './components/VideoList.vue';

export default {
  name: 'App',
  components: {
    SearchBar,
    VideoDetail,
    VideoList,
  },
  data: function() {
    return {
      videos: [],
      selectedvideo: {},
    }
  },
  methods: {
    onFetch: function(videos) {
      this.videos = videos
      console.log(this.videos)
    },
    onSelect: function(video) {
      this.selectedvideo = video
    },
    isSelected: function() {
      return !!Object.keys(this.selectedvideo).length
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
