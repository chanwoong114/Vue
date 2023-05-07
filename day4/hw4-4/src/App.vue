<template>
  <div id="app">
    <h1>진화 단계 가이드</h1>
    <div class="d-flex justify-content-center">
      <button class="fw-bold mx-5 my-5 btn border border-warning pt-2" 
      style="width:100px; height:50px;" @click="goHome">Home</button>
      <button class="fw-bold mx-5 my-5 btn border border-warning pt-2" 
      style="width:100px; height:50px;" @click="goStart">Start</button>
    </div>
    <HomeVue v-if="page == 0"/>
    <div v-if="page"  style="width: 640px; height: 360px;" class="container shadow">
      <div class="row w-100 h-100">
        <div class="col-2 d-flex justify-content-center align-items-center" >
          <div class="btn btn-primary " @click="pageDown">-</div>
        </div>
        <div class="col-8">
          <NoColor v-if="page == 1"/>
          <SsaFling v-if="page == 2"/>
          <SsafLeaf v-if="page == 3"/>
          <SsaFlower v-if="page == 4"/>
        </div>        
        <div class="col-2 d-flex justify-content-center align-items-center">
          <div class="btn btn-primary" @click="pageUp">+</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeVue from './components/Home.vue';
import NoColor from './components/Nocolor.vue';
import SsafLeaf from './components/Ssafleaf.vue';
import SsaFling from './components/Ssafling.vue';
import SsaFlower from './components/Ssaflower.vue';

export default {
  name: 'App',
  components: {
    HomeVue,
    NoColor,
    SsafLeaf,
    SsaFling,
    SsaFlower,
  },
  data: function() {
    return {
      page: 0,
    }
  },
  methods: {
    goHome() {
      this.page = 0
    },
    goStart() {
      this.page = 1
    },
    pageUp() {
      if (this.page === 4) {
        this.page = 0
        alert('Home으로 돌아갑니다!')
        return
      }
      this.page += 1
    },
    pageDown() {
      this.page -= 1
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
