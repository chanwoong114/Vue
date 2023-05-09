<template>
  <div id="app" class="container">
    <div class="row">
      <MenuList class="col"/>
      <SizeList class="col"/>
      <OptionList class="col"/>
    </div>
    <div class="rounded btn btn-success w-100" @click="addCart">장바구니 담기</div>
    <OrderList/>
  </div>
</template>

<script>
import MenuList from './components/MenuList.vue';
import OrderList from './components/OrderList.vue';
import SizeList from './components/SizeList.vue';
import OptionList from './components/OptionList.vue';

export default {
  name: 'App',
  components: {
    MenuList,
    OrderList,
    SizeList,
    OptionList
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
