<template>
  <div>
    <h1>AppParent</h1>
    <input type="text" v-model="appParentNum">
    <p>appData : {{ appNum }}</p>
    <p>ChildData : {{ childData }}</p>
    <hr>
    <MyChild :appParentNum="appParentNum"
    :appNum="appNum"
    @childData="InputChildData" />
  </div>
</template>

<script>
import MyChild from '@/components/MyChild'

export default {
  name: 'MyComponent',
  components: {
    MyChild,
  },
  props: {
    appNum: String
  },
  data: function() {
    return {
      appParentNum: null,
      childData : null
    }
  },
  watch: {
    appParentNum: function() {
      return this.$emit('appParentNum', this.appParentNum)
    },
    childData: function() {
      return this.$emit('childData', this.childData)
    }
  },
  methods: {
    InputChildData: function(childData) {
      this.childData = childData
    }
  }
}

</script>

<style>
  .border {
    border: solid;
  }
</style>
