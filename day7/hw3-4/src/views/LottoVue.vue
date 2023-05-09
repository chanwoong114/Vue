<template>
  <div class="Lotto">
    <h1>로또</h1>
    <button @click="getLotto">Get Lucky Numbers</button>
    <p v-text="lotto"></p>
  </div>
</template>

<script>
  import _ from 'lodash'

  export default {
    data() {
      return {
        lotto: null
      }
    },
    methods: {
      getLotto() {
        this.lotto = _.sampleSize(_.range(1, 45), 6)
      }
    }
  }
</script>
