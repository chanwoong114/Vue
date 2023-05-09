<template>
  <div class="container mt-5 text-start">
    <h3>주문 내역</h3>
    <h4>총 {{ totalOrderCount }}건 : {{ totalOrderPrice }}</h4>
    <div v-for="(order, index) in orderList" :key="index">
      <p>{{ order.menu.title }} - {{ order.size.name }} : {{ order.menu.price + order.size.price + order.shotCount*500 }}원</p>
      <p class="fs-6">
        {{ order.shot.name }} - {{ order.shot.count }},
        {{ order.banila.name }} - {{ order.banila.count }},
        {{ order.caramel.name }} - {{ order.caramel.count }}
      </p>
      
      <hr>
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