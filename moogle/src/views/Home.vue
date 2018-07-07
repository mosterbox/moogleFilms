<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Movie />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Movie from '@/components/Movie.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Movie
  }
}
</script>
