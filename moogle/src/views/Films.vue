<template>
  <div class="films">
    <Movie />
  </div>
</template>

<script>
// @ is an alias to /src
import Movie from '@/components/Movie.vue'

export default {
  name: 'films',
  components: {
    Movie
  }
}
</script>
