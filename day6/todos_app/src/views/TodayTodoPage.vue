<template>
  <div class="text-start">
    <h1>모든 할일</h1>
    <span @click="createList" class="pt-2" style="font-size: 25px;">+</span> &nbsp; <input type="text" v-model="todoContent">
    <hr>
    <TodoDetail v-for="(todo, index) in selectTodayTodo" :key="index" :todo="todo"/>
  </div>
</template>

<script>
import TodoDetail from '@/components/TodoDetail.vue'

export default {
  components:{
    TodoDetail
  },
  data: function() {
    return {
      todoContent: null
    }
  },
  computed: {
    selectTodayTodo() {
      console.log(this.$store.getters.todayTodo)
      return this.$store.getters.todayTodo
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