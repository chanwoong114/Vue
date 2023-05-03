<template>
  <div>
    <h1>AppChild</h1>
    <input type="text" v-model="childData">
    <p>appdata : {{ appNum }}</p>
    <p>ParentData : {{ appParentNum }}</p>
  </div>
</template>

<script>
export default {
  name: 'MyChild',
  props: {
    appNum: String,
    appParentNum: String
  },
  methods: {
  },
  data: function() {
    return {
      childData: null,
    }
  },
  watch: {
    childData: function() {
      return this.$emit('childData', this.childData)
    }
  }
}
</script>

<style>
  
</style>
