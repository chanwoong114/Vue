<template>
  <div id="app">
    <nav>
      <h1>캐릭터 진화 단계 가이드</h1>
      <div>
        <router-link class="btn btn-outline-warning mx-5" style="color: black;" to="/">Home</router-link>
        <router-link class="btn btn-outline-warning mx-5" style="color: black;" to="/happeed">Start</router-link>
      </div>
    </nav> 
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}


</style>
