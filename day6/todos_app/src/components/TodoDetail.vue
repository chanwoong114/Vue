<template>
  <div>
    <div class="border border-black rounded d-flex justify-content-between">
      <div>
        <svg @click="selectCompleted(todo)" v-if="!todo.isCompleted" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        </svg>
        <svg @click="selectCompleted(todo)" v-if="todo.isCompleted" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="8"/>
        </svg>
      </div>
      <div @click="changeTodo">
        {{ todo.content }}
      </div>
      <div>
        <svg @click="selectImportant(todo)" v-if="!todo.isImportant" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
        </svg>
        <svg @click="selectImportant(todo)" v-if="todo.isImportant" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
      </div>
    </div>
    <div v-if="isUpdate" class="container rounded mt-1 bg-light">
      <form @submit.prevent="update">
        <label for="content">할일 : &nbsp;</label>
        <input type="text" id="content" v-model="content">
        <br><br>
        <label for="updateDate">마감 시간 : &nbsp;</label>
        <input type="date" id="updateDate" v-model="updateDate"> &nbsp;
        <input type="submit">
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'


export default {
  props:{
    todo: Object
  },
  data() {
    return {
      isUpdate: false,
      content: null,
      updateDate: null
    }
  },
  methods: {
    ...mapActions(['selectImportant', 'selectCompleted']),
    changeTodo() {
      this.isUpdate = !this.isUpdate
    },
    update() {
      if(!this.content || !this.updateDate) {
        alert('내용을 입력하세요!!!!!!!')
        return
      }
      this.$store.dispatch('updateTodo', [this.todo, this.content, new Date(this.updateDate)])
      this.isUpdate = false
      this.content = null
      this.updateDate = null
    }
  },
}
</script>

<style>

</style>