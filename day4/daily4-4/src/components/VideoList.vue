<template>
  <div class="shadow p-3 my-5 bg-body rounded col">
    <div class="row-12 col">
      <iframe id="player" width="640px" height="480px"
      :src="videoSrc"
      frameborder="0"></iframe>
      <div class="shadow p-3 mb-5 bg-body">
        <h3 class="fw-bold text-start">{{ video?.snippet.title }}</h3>
        <p>{{ video?.snippet.description }}</p>
      </div>
    </div>
    <!-- <p v-for="(video, index) in videos" :key="index">
      {{ video.snippet.title }}
    </p> -->
  </div>
</template>

<script>

export default {
  name: "VideoList",
  props: {
    video: Object,
  },
  computed: {
    videoSrc: function() {
      console.log(this.video?.id.videoId)
      return `https://www.youtube.com/embed/${this.video?.id.videoId}`
    }
  }
}
</script>

<style>

</style>