<template>
  <div>
    <img v-if="imgSrc" :src="imgSrc" alt=""><br>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'DogView',
  data() {
    return {
      imgSrc: null,
    }
  },
  methods: {
    getDogImage() {
      const breed = this.$route.params.breed
      const dogImageSearchURL = `https://dog.ceo/api/breed/${breed}/images/random`

      axios({
        methods: 'get',
        url: dogImageSearchURL,
      })
      .then((response) => {
        console.log(response)
        this.imgSrc = response.data.message
      })
      .catch(error => {
        console.log(error)
        this.$router.push({name: 'NotFound404'})
      })
    }
  },
  created() {
    this.getDogImage()
  }
}
</script>

<style>

</style>