<template>
  <div @click="selectMenu(menu)" class="row" :class="{'bg-success': menu.selected}">
    <div class="col-2 d-flex justify-content-center align-items-center">
      <img :src="menu.image" style="width:30px; height:30px;" alt="">
    </div>
    <div class="col-7 d-flex justify-content-center align-items-center">
      {{ menu.title }}
    </div>
    <div class="col-3 d-flex justify-content-center align-items-center">
      {{ menu.price }}원
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuListItem',
  props: {
    menu: Object,
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