<template>
  <div>
    TodoForm
    <input type="text" v-model="todoTitle" @keyup.enter="createTodo">
  </div>
</template>

<script>
export default {
  name: 'TodoForm',
  data: function() {
    return {
      todoTitle: null
    }
  },
  methods: {
    createTodo() {
      if (this.todoTitle) {
        this.$store.dispatch('createTodo', this.todoTitle)
      } else {
        alert('할일을 입력하세요!!!')
      }
      
      this.todoTitle = null
    }
  }
}
</script>

<style>

</style>