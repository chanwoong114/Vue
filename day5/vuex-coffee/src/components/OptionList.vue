<template>
  <div>
    <h2>3. 옵션을 고르세요.</h2>
    <div class="container d-flex flex-column justify-content-center align-items-stretch">
      <OptionListItem class="container border border-black my-2 rounded" v-for="(shot, index) in optionList" :key="index"
      :shot="shot" />
    </div>
  </div>
</template>

<script>
import OptionListItem from './OptionListItem.vue';

export default {
  name: 'OptionList',
  components: {
    OptionListItem
  },
  computed: {
    optionList: function () {
      return this.$store.state.shotList
    },
  },
  methods: {
    increase: function () {
    },
    decrease: function () {
    },
  },
}
</script>

<style>
</style>