<template>
  <div id="app">
    <div id="nav">
      <span>
        <router-link :to="{ name: 'TodoList' }">Todo List</router-link> | 
        <router-link :to="{ name: 'CreateTodo' }">Create Todo</router-link> |
      </span>
      <span>
        <router-link :to="{ name: 'SignUp' }">Signup</router-link> |
        <router-link v-if="!isLogin" :to="{ name: 'Login' }">Login</router-link>
        <router-link v-if="isLogin" :to="{ name: 'Logout'}">Logout</router-link>
      </span>
    </div>
    <router-view @loginSuccess="loginSuccess" @logout="logout"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      isLogin: false
    }
  },
  created() {
    if (localStorage.getItem('jwt')) {
      this.isLogin = false
    }
  },
  methods: {
    loginSuccess() {
      this.isLogin = true
    },
    logout() {
      this.isLogin = false
    }
  },
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
