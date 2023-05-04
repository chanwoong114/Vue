<template>
  <div class="menu-list">
    <h1>1. 음료를 고르세요.</h1>
    <div class="container">
      <MenuListItem class="container border border-black my-2 rounded" v-for="(menu, index) in menuList" 
      :key="index"
      :menu="menu"/>
    </div>
    
  </div>
</template>

<script>
import MenuListItem from './MenuListItem.vue';

export default {
  name: 'MenuList',
  components: {
    MenuListItem
  },
  computed: {
    menuList: function () {
      return this.$store.state.menuList
    },
    totalOrderCount: function() {
      return this.$store.getters.totalOrderCount
    }
  },
  methods: {
    selectMenu: function (menu) {
      // this.$store.commit('updateMenuList', menu) mutation 바로전달 동기 방식에는 노상관
      this.$store.dispatch('updateMenuListAction', menu)
    },
  },
}
</script>

<style>

</style>