<template>
  <div class="home">
    <h1>Home</h1>
    <h2>첫 번째 박스</h2>
    <div class="box"></div>
    <h2>두 번째 박스</h2>
    <div class="box"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
}
</script>

<style>
.box {
  border: solid;
  height: 100px;
  width: 100px; 
  margin-inline: auto;
}
</style>
