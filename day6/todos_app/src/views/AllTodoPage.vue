<template>
  <div class="text-start">
    <h1>모든 할일</h1>
    <span @click="createList" class="pt-2" style="font-size: 25px;">+</span> &nbsp; <input type="text" v-model="todoContent">
    <hr>
    <TodoDetail v-for="(todo, index) in allTodo" :key="index" :todo="todo"/>
  </div>
</template>

<script>
import TodoDetail from '@/components/TodoDetail.vue'

export default {
  components:{
    TodoDetail
  },
  data() {
    return {
      todoContent: null,
    }
  },
  computed: {
    allTodo() {
      console.log(this.$store.state.todo.list)
      return this.$store.state.todo.list
    },
  },
  methods: {
    createList() {
      this.$store.dispatch('createList', [this.todoContent, false], )
      this.todoContent = null
    },
  }
}
</script>

<style>

</style>