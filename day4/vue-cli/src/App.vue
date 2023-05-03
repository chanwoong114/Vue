<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>App</h1>
    <input type="text" v-model="appNum">
    <p>parentData : {{ appParentNum }}</p>
    <p>childData : {{ childData }}</p>
    <hr>
    <MyComponent :appNum="goAppNum" @appParentNum="InputAppParentNum"
    @childData="InputChildData" />
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'

export default {
  name: 'App',
  components: {
    MyComponent,
  },
  data: function() {
    return {
      appNum: null,
      appParentNum: null,
      childData: null,
    }
  },
  methods: {
    InputAppParentNum: function(appParentNum) {
      this.appParentNum = appParentNum
    },
    InputChildData: function(childData) {
      this.childData = childData
    }
  },
  computed: {
    goAppNum: function() {
      return this.appNum
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
