<template>
  <div>
    <h1>Sign up</h1>
    <form @submit.prevent="signup">
      <label for="username">username : </label>
      <input type="text" v-model="username"><br>
      <label for="password">password : </label>
      <input type="text" v-model="password"><br>
      <label for="passwordConfirm">password confirm : </label>
      <input type="text" v-model="passwordConfirm"><br>
      <input type="submit">
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SingUp',
  data: function () {
    return {
      username: null,
      password: null,
      passwordConfirm: null,
    }
  },
  methods: {
    signup: function () {
      console.log('1')
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/accounts/signup/',
        data: {
          username: this.username,
          password: this.password,
          passwordConfirm: this.passwordConfirm
        },
      })
      .then(res => {
        console.log(res)
        alert(res.data)
        this.$router.push({name: 'login'})
      })
      .catch(error => {
        console.log(error)
        alert('올바른 정보를 입력하세요')
      })
    }
  }
}
</script>
