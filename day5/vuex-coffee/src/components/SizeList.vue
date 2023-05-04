<template>
  <div>
    <h1>2. 사이즈를 고르세요.</h1>
    <div class="container">
      <SizeListItem class="container border border-black my-2 rounded" v-for="(size, index) in sizeList" :key="index"
      :size="size" />
    </div>
  </div>
</template>

<script>
import SizeListItem from './SizeListItem.vue';

export default {
  name: 'SizeList',
  components: {
    SizeListItem
  },
  methods: {
    // onSelectMenu: function () {},
  },
  computed: {
    sizeList: function () {
      return this.$store.state.sizeList
    },
  },
}
</script>

<style>
</style>