<template>
  <div>
    <iframe id="player" width="100%" height="50%"
    :src="videoSrc"
    frameborder="0"></iframe>
    <div class="shadow p-3 mb-5 bg-body">
      <h3 class="fw-bold text-start">{{ video.snippet.title }}</h3>
      <p>{{ video.snippet.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoDetail",
  props: {
    video: Object,
  },
  computed: {
    videoSrc: function() {
      console.log(this.video.id.videoId)
      return `https://www.youtube.com/embed/${this.video.id.videoId}`
    }
  }
}
</script>

<style>

</style>