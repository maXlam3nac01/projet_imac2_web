<template>
  <div>
    <div class="movie-gallery" v-if="movies.length">
      <div v-for="movie in movies" :key="movie.id">
        <h2>{{ movie.title }}</h2>
        <img :src="movie.image" alt="Movie Poster" />
        <p>{{ movie.crew }}</p>
      </div>
    </div>
    <div v-else>
      <p>Loading movies...</p>
    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  name: 'DirectorMovie',
  data() {
    return {
      movies: []
    }
  },
  mounted() {
    this.searchMovies();
  },
  methods: {
    sortMovie() {
      this.movies.sort((a, b) => a.crew > b.crew ? 1 : -1);
    },
    searchMovies() {
      axios.get(`https://imdb-api.com/en/API/Top250Movies/k_nq96obwu`)
        .then(response => {
          this.movies = response.data.items
          this.sortMovie()
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
}
</script>

<style scoped>
.movie-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.movie-gallery div {
  margin: 10px;
  width: 200px;
}

.movie-gallery img {
  max-width: 200px;
}
</style>