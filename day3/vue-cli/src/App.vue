<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <MyComponent/>
    <MyComponent/>
    <TestComponent1/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyComponent from '@/components/MyComponent'
import TestComponent1 from '@/components/test'

export default {
  name: 'App',
  components: {
    HelloWorld,
    MyComponent,
    TestComponent1,
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
