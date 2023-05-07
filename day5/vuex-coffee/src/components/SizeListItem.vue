<template>
  <div @click="updateSize(size)" class="row" style="height:70px;"
  :class="{'bg-success': size.selected}">
    <div class="col-8 d-flex justify-content-center align-items-center">
      <p>{{ size.name }}</p>
    </div>
    <div class="col-2 d-flex justify-content-center align-items-center">
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