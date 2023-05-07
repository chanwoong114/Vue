<template>
  <div class="container">
    <h2>주문 내역</h2>
    <h3>총 {{ totalOrderCount }}건 : {{ totalOrderPrice }}</h3>
    <div v-for="(order, index) in orderList" :key="index">
      {{ order.menu.title }} - {{ order.size.name }} : {{ order.menu.price + order.size.price }}원
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderList',
  computed: {
    orderList: function () {
      return this.$store.state.orderList
    },
    totalOrderCount: function () {
      return this.$store.getters.totalOrderCount
    },
    totalOrderPrice: function () {
      return this.$store.getters.totalOrderPrice
    },
  },
}
</script>

<style>
</style>