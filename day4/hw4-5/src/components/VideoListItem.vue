<template>
  <div @click="onSelect" class="d-flex">
    <img :src="videoUrl" :alt="video.id.videoid" >
    <p class="mx-2" >{{ video.snippet.title}}</p>
  </div>
</template>

<script>
export default {
  name: "VideoItemList",
  props: {
    video: Object,
  },
  computed: {
    videoUrl: function() {
      return this.video.snippet.thumbnails.default.url
    }
  },
  methods: {
    onSelect: function() {
      this.$emit('select-video', this.video)
    }
  }
  
}
</script>

<style>

</style>