<template>
  <div>
    <h3>회원 가입</h3>
    <form @submit.prevent="signup"> 
      <label for="username">아이디</label>
      <input type="text" v-model="username"><br>
      <label for="password">비밀번호</label>
      <input type="password" v-model="password1"><br>
      <label for="password">비밀번호 확인</label>
      <input type="password" v-model="password2"><br>
      <input type="submit" value="회원 가입">
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignupView',
  data() {
    return {
      username: null,
      password1: null,
      password2: null,
    }
  },
  methods: {
    signup() {
      const payload = {
        username: this.username,
        password1: this.password1,
        password2: this.password2
      }

      this.$store.dispatch('signup', payload)
    }
  }
}
</script>

<style>

</style>