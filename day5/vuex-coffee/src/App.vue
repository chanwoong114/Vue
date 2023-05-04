<template>
  <div id="app" class="container">
    <div class="container row">
      <MenuList class="col-6"/>
      <SizeList class="col-6"/>
    </div>
    <div class="rounded btn btn-success w-100" @click="addCart">장바구니 담기</div>
    <OrderList/>
  </div>
</template>

<script>
import MenuList from './components/MenuList.vue';
import OrderList from './components/OrderList.vue';
import SizeList from './components/SizeList.vue';

export default {
  name: 'App',
  components: {
    MenuList,
    OrderList,
    SizeList
  },
  methods: {
    addCart() {
      this.$store.dispatch('addCart')
    },
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
