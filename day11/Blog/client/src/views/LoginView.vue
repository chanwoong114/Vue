<template>
  <div>
    <h3>로그인</h3>
    <form @submit.prevent="login"> 
      <label for="username">아이디</label>
      <input type="text" v-model="username"><br>
      <label for="password">비밀번호</label>
      <input type="password" v-model="password"><br>
      <input type="submit" value="로그인">
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      username: null,
      password: null,
    }
  },
  methods: {
    login() {
      const payload = {
        username: this.username,
        password: this.password
      }

      this.$store.dispatch('login', payload)
    }
  }
}
</script>

<style>

</style>