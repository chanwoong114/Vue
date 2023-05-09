<template>
  <div @click="updateSize(size)" class="row"
  :class="{'bg-success': size.selected}">
    <div class="col-6 d-flex justify-content-center align-items-center">
      {{ size.name }}
    </div>
    <div class="col-6 d-flex justify-content-center align-items-center">
      {{ size.price }}원
    </div>
  </div>
</template>

<script>
export default {
  name: 'SizeListItem',
  props: {
    size: Object,
  },
  methods: {
    updateSize: function(size) {
      this.$store.dispatch('updateSizeList', size)
    }
  }
}
</script>

<style>
</style>