<template>
  <div class="border">
    <h1>This is my component</h1>
    <button @click="create">할일 만들기</button>
    <div v-for="todo in todos" :key="todo.content">
      <input type="checkbox" v-model="todo.isCompleted">
      <span>{{ todo.content }}</span>
    </div>
    <button @click="onClick">완료목록삭제</button>
    <MyChild/>
    <MyChild/>
  </div>
</template>

<script>
import MyChild from '@/components/MyChild';

export default{
  name: 'MyComponent',
  data: function() {
    return  {
      inputMsg: "",
      todos: [
        {content: "test1", isCompleted: false},
        {content: "test2", isCompleted: true},
        {content: "test3", isCompleted: false},
      ]
    }
  },
  methods:{
    create: function() {
      this.todos.push({content:"test4", isCompleted:false})
    },
    onClick: function() {
      this.todos = this.todos.filter(todo => !todo.isCompleted)
    }
  },
  components: {
    MyChild,
  }
}
</script>

<style>
  .border {
    border: solid;
  }
</style>