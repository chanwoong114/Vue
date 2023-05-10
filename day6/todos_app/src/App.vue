<template>
  <div id="app" class="row my-3" style="height: 800px;">
    <SideBar class="col-3 border border-dark ms-2 rounded " />
    <div class="col-8 border border-dark ms-2 rounded">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import SideBar from './components/SideBar.vue';

  export default {
    components: {
      SideBar
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
}

div {
  padding: 30px;
}

a {
  font-family: Avenir;
  font-size: 25px;
  color: #2c3e50;
  text-decoration-line: none;
}

a.router-link-exact-active {
  color: #42b983;
}
</style>
