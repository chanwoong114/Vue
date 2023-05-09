<template>
  <div class="First">
    <h1>점심메뉴</h1>
    <button @click="selectLunch">Pick Lunch</button>
    <p v-text="selected"></p>
    <hr>
    <h1>로또를 뽑아보자</h1>
    <button @click="selectLotto">Pick Lotto</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'FirstView',
  data() {
    return {
      lunch: ['순두부찌개', '부추닭도리전골', '김치버섯필라프', '잔치국수', '베이컨라면'],
      selected: '',
    }
  },
  methods: {
    selectLunch() {
      this.selected = this.lunch[Math.floor(Math.random()*4)]
    },
    selectLotto() {
      this.$router.push({name: 'lotto', params: {num: 6}})
    }
  },
  components: {
  }
}
</script>
