<template>
  <div>

  </div>
</template>

<script>
export default {
name: 'LogoutView',
methods: {
  logout() {
    localStorage.removeItem('jwt')
    this.$emit('logout')
    this.$router.push({name: 'Login'})
  }
},
created() {
  this.logout()
}
}
</script>

<style>

</style>