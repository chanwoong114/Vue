<template>
  <div>
    <span>연봉 입력 (만원) : </span>
    <input type="number" v-model.number="salary">
    <br>
    <span>세액감면액 (만원) : </span>
    <input type="number" v-model.number="taxRelief">
    <br>
  </div>
</template>

<script>
export default {
  name: 'InCome',
  data: function() {
    return {
      salary: null,
      taxRelief: null,
    }
  },
  watch: {
    salary: function() {
      return this.$emit('salary', this.salary)
    },
    taxRelief: function() {
      return this.$emit('taxRelief', this.taxRelief)
    },
  }
}
</script>

<style>

</style>