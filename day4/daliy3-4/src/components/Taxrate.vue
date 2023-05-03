<template>
  <div>
    <h2>종합소득금액 : {{ salary }} 만원</h2>
    <h2>종합소득공제 : (-) 150 만원</h2>
    <h2>과세표준 : <span v-if="isSalary">{{ salary-150 }}</span>
      <span v-else>0</span> 만원</h2>
    <hr>
    <Finaltax :salary="salary-150" :taxRelief="taxRelief"/>
  </div>
</template>

<script>
import Finaltax from './Finaltax.vue'

export default {
  name: 'TaxRate',
  components: {
    Finaltax,
  },
  props: {
    salary: Number,
    taxRelief: Number
  },
  data: function() {
    return {
      tax: null
    }
  },
  computed: {
    isSalary: function() {
      if (this.salary-150 >= 0) return true
      return false
    },
  },
}
</script>

<style>

</style>