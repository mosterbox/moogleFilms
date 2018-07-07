
<!-- ./src/components/Movie.vue -->
<template>
  <div class="container">
    <div class="row">
      <form @submit.prevent="fetchMovie()">
        <div class="columns large-4">
          <button type="submit" class="button expanded">
            Search titles
          </button>
            <ul>
            <li v-for="items in movie.results" :key="items.id">
                {{ items.title }}
                <img :src="posterImg">
            </li>  
        </ul>
        </div>
      </form>
    </div>
    <!-- /search form row -->

    <div class="result">
        
    </div>

  </div>
  <!-- /container -->
</template>


components/Movie.vue -->
<script>
const baseUrlImg = 'https://image.tmdb.org/t/p/w185';
// define the external API URL
const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=ceec93d778f59df4556ed45a60299413&page=1'
// Helper function to help build urls to fetch movie details from title
export default {
  name: 'movie', // component name
  data () {
    return {
      title: '',
    posterImg: [],
      error_message: '',
      loading: false, // to track when app is retrieving data
      movie: {}
    }
  },
  methods: {
    fetchMovie () {
      this.loading = true
      fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        this.loading = false
        this.error_message = ''
        if (data.errorcode) {
          this.error_message = `Sorry, movie with title not found. Try searching for "Fairy tail" or "The boondocks" instead.`
          return
        }
        this.movie = data
      }).catch((e) => {
        console.log(e)
      })
      this.poster(data)
    },
    poster(movie) {
        this.posterImg = this.movie.map(
            function(movie) {
                let newItems = {};
                newItems = `${baseUrlImg}${movie.poster_path}`
                return newItems;
            }
        )

    }
  }
}
</script>

<style scoped>
#movie {
  margin: 30px 0;
}
.loader {
  text-align: center;
}
</style>
