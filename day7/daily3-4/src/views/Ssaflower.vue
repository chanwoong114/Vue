<template>
  <div class="d-flex justify-content-evenly">
    <div class="shadow d-flex flex-column justify-content-evenly" style="width: 480px; height: 480px;">
      <h3>3단계</h3>
      <div>
        <svg @click="noPage" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
        </svg>
        <img src="../assets/happlower.png" alt="" width="300px">
        <svg @click="nextPage" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
        </svg>
      </div>
      <h3>해플라워</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SsaFlower',
  methods: {
    nextPage() {
      alert('Home으로 돌아갑니다!')
      this.$router.push({name: 'home'})
    },
    noPage() {
      alert('이전 페이지로 돌아갈 수 없습니다.')
    }
  }
  
}
</script>

<style>

</style>