<template>
  <div>
    <h1>login</h1>
    <form @submit.prevent="login">
      <label for="username">username : </label>
      <input type="text" v-model="username"><br>
      <label for="password">password : </label>
      <input type="text" v-model="password"><br>
      <input type="submit" value="login">
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'LoginView',
  props: {
    isLogin: Boolean
  },
  data: function () {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    login: function () {
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/token/',
        data: {
          username: this.username,
          password: this.password
        }
      })
      .then(res => {
        localStorage.setItem('jwt', res.data.access)
        this.$router.push({name: 'TodoList'})
        this.$emit('loginSuccess')
      })
      .catch(error => {
        console.log(error)
        alert('올바른 회원 정보를 입력하세요')
      })
    }
  }
}
</script>
