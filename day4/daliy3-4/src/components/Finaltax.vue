<template>
  <div>
    <h2>산출세액 : {{ Calcul() }}</h2>
    <h2>세액감면 : {{ taxRelief }}</h2>
    <hr>
    <h2>결정세액 : {{ Final() }}</h2>
  </div>
</template>

<script>
export default {
  name: 'FinalTax',
  props: {
    salary: Number,
    taxRelief: Number,
  },
  data: function() {
    return {
      tax: null
    }
  },
  methods: {
    Calcul: function() {
      if (this.salary > 100000) {
        this.tax = Math.round(this.salary*0.45 - 6540)
        return Math.round(this.salary*0.45 - 6540)
      }
      else if (this.salary > 50000) {
        this.tax = Math.round(this.salary*0.42 - 3540)
        return Math.round(this.salary*0.42 - 3540)
      } 
      else if (this.salary > 30000) {
        this.tax = Math.round(this.salary*0.40 - 2540)
        return Math.round(this.salary*0.40 - 2540)
      }
      else if (this.salary > 15000) {
        this.tax = Math.round(this.salary*0.38 - 1940)
        return Math.round(this.salary*0.38 - 1940)
      } 
      else if (this.salary > 8800) {
        this.tax = Math.round(this.salary*0.35 - 1490)
        return Math.round(this.salary*0.35 - 1490)
      } 
      else if (this.salary > 4600) {
        this.tax = Math.round(this.salary*0.24 - 522)
        return Math.round(this.salary*0.24 - 522)
      } 
      else if (this.salary > 1200) {
        this.tax = Math.round(this.salary*0.15) - 108
        return Math.round(this.salary*0.15) - 108
      }  
      else if (this.salary > 0) {
        this.tax = Math.round(this.salary*0.06)
        return  Math.round(this.salary*0.06)
      }  
      else {
        this.tax = 0
        return 0
      }
    },
    Final: function() {
      if (this.tax - this.taxRelief < 0) return 0
      return this.tax - this.taxRelief
    }
  }
}
</script>

<style>

</style>