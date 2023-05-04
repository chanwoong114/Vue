<template>
  <div>
    <p>{{ todoitem.title }} : {{ todoitem.isCompleted }}</p>
  </div>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: {
    todoitem: Object
  }
}
</script>

<style>

</style>