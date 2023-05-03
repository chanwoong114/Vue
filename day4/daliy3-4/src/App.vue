<template>
  <div id="app">
    <h1>소득세 계산기</h1>
    <InCome @salary="onSalary" @taxRelief="onTaxRelief"/>
    <hr>
    <Taxrate :salary="salary" :taxRelief="taxRelief"/>
  </div>
</template>

<script>
import Taxrate from './components/Taxrate.vue';
import InCome from './components/Income.vue';

export default {
  name: 'App',
  components: {
    InCome,
    Taxrate,
  },
  data: function() {
    return {
      salary: null,
      taxRelief: null,
    }
  },
  methods: {
    onSalary: function(salary) {
      this.salary = salary
    },
    onTaxRelief: function(taxRelief) {
      this.taxRelief = taxRelief
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
