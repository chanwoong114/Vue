<template>
  <div class="shadow p-3 my-5 bg-body rounded col">
    <div class="row-12 col">
      <VideoListItem class="py-2 row-2 border-bottom" v-for="video in videos"
      :key="video.id.videoid"
      :video="video"
      @select-video="onSelect" />
    </div>
    <!-- <p v-for="(video, index) in videos" :key="index">
      {{ video.snippet.title }}
    </p> -->
  </div>
</template>

<script>
import VideoListItem from './VideoListItem.vue';

export default {
  name: "VideoList",
  components: {
    VideoListItem,
  },
  props: {
    videos: Array,
  },
  methods: {
    onSelect(video) {
      this.$emit('select-video', video)
    }
  }
}
</script>

<style>

</style>